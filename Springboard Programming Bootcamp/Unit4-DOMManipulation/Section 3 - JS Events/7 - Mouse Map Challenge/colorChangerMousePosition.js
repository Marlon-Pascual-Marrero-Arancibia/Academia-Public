document.onmousemove = mouseMoved;
    
function mouseMoved (e) 
{
    rgbValR = (Math.round(255*(e.pageX/e.target.offsetWidth)));
    rgbValG = (0);
    rgbValB = (Math.round(255*((e.pageY/e.target.offsetHeight)/100)));
    document.body.style.backgroundColor = "rgba("+rgbValR+","+rgbValG+","+rgbValB+")";
};