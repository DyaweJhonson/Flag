Canvas=document.getElementById("myCanvas");
ctx.beingPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beingPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(300,310,40,0,2*Math.PI);
ctx.stroke();