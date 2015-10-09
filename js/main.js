		var check = false;
		for(var i = 1 ; i<=36 ; i++){
			document.write("<div class='form' id ='form"+i+"'></div>");
			var tag="form"+i;
			document.getElementById(tag).innerHTML=i;
			if(i%12==0){
				document.writeln("<br>");
			}
		}
		var count = 0;
		var v=250;
		var answer = 0;
		var total=1000;
		var moneyArr=[];
		var checkRestart=true;
		var result;
		var allget = 0;
		
		function random(){
			var element = document.getElementsByClassName("form");
			var rand=Math.floor((Math.random() * 36));
			for(var i=0 ; i<36 ; i++){
				if(i==rand){
					element[i].style.background="orange";
					element[i].style.borderColor="aquamarine";
					element[i].style.borderStyle="dashed";
					//document.getElementById("choose").innerHTML=element[i].innerHTML;
					answer = element[i].innerHTML;
				}
				else{
					element[i].style.background="";
					element[i].style.borderColor="";
					element[i].style.borderStyle="";
				}
			}
			count++;
			if(count==10){
				window.clearInterval(run1);
				v*=2;
				run();
			}
			if(count==13){
				window.clearInterval(run1);
				v*=1.5;
				run();
			}
			if(count==15){
				v=250;
				count=0;
				check=false;
				window.clearInterval(run1);
				setTimeout("checkIfWin(answer)",800);
				setTimeout("restore()",1200);
			}
		}
		function run(){ 
			if(check==true){
				checkRestart=false;
				//document.getElementById("resultId").innerHTML="";
				document.getElementById("resultId").style.visibility = "hidden";
				run1 = window.setInterval("random()",v);
				document.getElementById("rand").style.visibility = "hidden";
			}
		}
		var number=1;
		function createTable(){
			var table = document.createElement("TABLE");
			table.setAttribute("ID","gamble");
			document.body.appendChild(table);
			table.border = "2";
   			table.cellSpacing = "2";
   			table.bgColor = "#eeeeee";
   			table.style.width = "80%";
   			table.style.margin = "0 auto";
   			table.style.marginTop = "5%";
   			for(var i = 0 ; i<2 ; i++){
				var tr = table.insertRow(i); 
				for(var j = 0 ; j<18 ; j++){
						var td = tr.insertCell(j);
						var num = document.createTextNode(number);
						td.align="center";
						td.setAttribute("id",number);
						td.setAttribute("Class","no");
						td.setAttribute("onclick","press(this)");
						td.appendChild(num);
						number++;
				}
			}
			var tr1 = table.insertRow(2);

			for(var i = 0 ; i<2 ; i++){
				var td1 = tr1.insertCell(i);
				td1.align="center";
				td1.colSpan="9";
				td1.setAttribute("id",number);
				td1.setAttribute("Class","no");
				td1.setAttribute("onclick","press(this)");
				if(i==0)
					td1.appendChild(document.createTextNode("Odd"));
				if(i==1)
					td1.appendChild(document.createTextNode("Even"));
				number++;
			}
			var tr2 = table.insertRow(3);

			for(var i = 0 ; i<2 ; i++){
				var td2 = tr2.insertCell(i);
				td2.align="center";
				td2.colSpan="9";
				td2.setAttribute("id",number);
				td2.setAttribute("Class","no");
				td2.setAttribute("onclick","press(this)");
				if(i==0)
					td2.appendChild(document.createTextNode("1~18"));
				if(i==1)
					td2.appendChild(document.createTextNode("19~36"));
				number++;
			}

			var tr3 = table.insertRow(4);

			for(var i = 0 ; i<6 ; i++){
				var td3 = tr3.insertCell(i);
				td3.align="center";
				td3.colSpan="3";
				td3.setAttribute("id",number);
				td3.setAttribute("Class","no");
				td3.setAttribute("onclick","press(this)");
				if(i==0)
					td3.appendChild(document.createTextNode("1~6"));
				if(i==1)
					td3.appendChild(document.createTextNode("7~12"));
				if(i==2)
					td3.appendChild(document.createTextNode("13~18"));
				if(i==3)
					td3.appendChild(document.createTextNode("19~24"));
				if(i==4)
					td3.appendChild(document.createTextNode("25~30"));
				if(i==5)
					td3.appendChild(document.createTextNode("31~36"));
				number++;
			}
			var tr4 = table.insertRow(5);
			var td4 = tr4.insertCell(0);
			td4.align="center";
			td4.setAttribute("id",number);
			td4.setAttribute("class","show_m")
			td4.appendChild(document.createTextNode("$ "+total));
			td4.colSpan="18";
		}
		function press(obj){
			if(checkRestart){
			if(obj.className!="choice"){

				bootbox.prompt("Please input Your Bets !",function(money){
					if (!isNaN(money) && (total-money)>=0 && money>=1) {
        			var id = obj.getAttribute("id");
        			var value = document.createElement("p"); 	
        			value.style.color = "red";
        			value.innerHTML="$ "+money;
        			moneyArr[id]=money;
        			value.setAttribute("class","all");
        			document.getElementById(id).appendChild(value);
        			//obj.style.background = "red";
        			obj.className="choice";
        			check=true;
        			total=total-money;
        			document.getElementById("47").innerHTML="$ "+total;
				}
				});
			}
			/*else{
					obj.className="no";
				}	*/
			}
		}
		function restore(){
			$('.all').remove();
			checkRestart=true;
			for(var i = 1 ; i<=46 ; i++){
				document.getElementById(i).className="no";
				document.getElementById(i).background="rgb(232, 232, 232)";
				
			}
			document.getElementById("rand").style.visibility = "visible";
		}
		function checkIfWin(answer){
			for(var i=1 ; i<=47 ; i++){
				if(moneyArr[i]>=1 && moneyArr[i]<=1000){
					if(i>=1 && i<=36){
						if(answer==i)
							compute(i,36);
					}
					if(i==37){
						if(answer%2==1)
							compute(i,2);
					}
					if(i==38){
						if(answer%2==0)
							compute(i,2);						
					}
					if(i==39){
						if(answer>=1 && answer<=18) 
							compute(i,2);
					}
					if(i==40){
						if(answer>=19 && answer<=36)
							compute(i,2);
					}
					if(i==41){
						if(answer>=1 && answer<=6)
							compute(i,6);
					}
					if(i==42){
						if(answer>=7 && answer<=12)
							compute(i,6);
					}
					if(i==43){
						if(answer>=13 && answer<=18)
							compute(i,6);
					}
					if(i==44){
						if(answer>=19 && answer<=24)
							compute(i,6);
					}
					if(i==45){
						if(answer>=25 && answer<=30)
							compute(i,6);
					}
					if(i==46){
						if(answer>=31 && answer<=36)
							compute(i,6);
					}
				}
				if(i==47){
					document.getElementById("resultId").style.visibility = "visible";
					document.getElementById("resultId").style.fontSize = "-webkit-xxx-large";
					document.getElementById("resultId").style.height = "20px";
					document.getElementById("resultId").style.margin = "1%";
					document.getElementById("resultId").style.marginBottom = "-30px";
					document.getElementById("resultId").style.color = "rgb(76, 144, 74)";
					document.getElementById("resultId").style.fontFamily = "fantasy";
					if(allget==0)
						document.getElementById("resultId").innerHTML = "You miss it!";
					else
						document.getElementById("resultId").innerHTML = "Congratulation!You get $"+allget;
					allget=0;
					if(total==0){
						
							$(document).ready(function() {
								//$('#gamble').css('display', 'none');
								$( "#gamble" ).fadeOut( 1600);
								$( ".form" ).fadeOut( 1600);
								setTimeout(function(){
									document.getElementById("resultId").innerHTML = "Sorry!You lose the game. You can press the restart button to play again!";
									var r = document.getElementById("rand");
									r.innerHTML="restart";
									r.setAttribute("onclick","reload()");
								},1600);
							});
						}
				}	
			}
		}
		function compute(i,j){
			if(moneyArr[i]*j>0)
				allget+=moneyArr[i]*j;
			total=total+moneyArr[i]*j;
			document.getElementById("47").innerHTML="$ "+total;
			moneyArr[i]="";
		}
		function reload(){
			location.reload();
		}

