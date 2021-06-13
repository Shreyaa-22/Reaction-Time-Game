document.getElementById("start").onclick= function()
{
	document.getElementById("display").style.display="none";
	
	start=new Date().getTime();
	
	var Arr= [];

	function getRandomColor() {
					
					var letters = '0123456789ABCDEF'.split('');
		
					var color = '#';
		
					for (var i = 0; i < 6; i++ ) {
			
						color += letters[Math.floor(Math.random() * 16)];
		
					}
					if(color=='#000000') color='#111111';
					return color;

				}

	function makeShape()
	{
					var top = Math.random() * 150;
					
					var left = Math.random() * 600;
					
					var width = (Math.random() * 200) + 100;
					
					if (Math.random() > 0.5) {
						
						document.getElementById("shapes").style.borderRadius = "50%";
						
					} else {
						
						document.getElementById("shapes").style.borderRadius = "0";
						
					}
					
					document.getElementById("shapes").style.backgroundColor = getRandomColor();
					
					document.getElementById("shapes").style.width = width + "px";
					
					document.getElementById("shapes").style.height = width + "px";
					
					document.getElementById("shapes").style.top = top + "px";
					
					document.getElementById("shapes").style.left = left + "px";
		
					document.getElementById("shapes").style.display = "block";
					
					start = new Date().getTime();
	}


	function appear()
	{
					setTimeout(makeShape, Math.random() * 2000);
	}
	
	function show()
	{
					var sum=0;

					for(var j=0; j<Arr.length; j++)
					{
					sum=sum+Arr[j];
					}

					var avg=sum/5;

					document.getElementById("display").style.color="#09082b";

					document.getElementById("display").style.fontSize=20 +"px";

					document.getElementById("display").style.textAlign="center";

					document.getElementById("display").style.border="1px solid black";

					document.getElementById("display").style.borderRadius="10px";

					document.getElementById("display").style.backgroundColor="Yellow";

					document.getElementById("display").style.display="block";

					document.getElementById("display").innerHTML= "Your average time of reaction is :  " + avg;

	}

	var i=0;
	
	appear();

	document.getElementById("shapes").onclick= function()
	{
					document.getElementById("shapes").style.display= "none";
					
					var end=new Date().getTime();
					
					var timeTaken=(end-start)/1000;
					
					Arr.push(timeTaken);
					
					i++;
					
					if(i<5) appear();
					
					if(i==5) show();
	}

}

