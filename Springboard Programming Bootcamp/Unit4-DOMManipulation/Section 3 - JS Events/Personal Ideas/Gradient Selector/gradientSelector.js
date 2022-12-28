document.querySelector('img').addEventListener('click', function (e) 
{
    var rgbVal = (Math.round(255*(e.pageX/e.target.offsetWidth)));

    document.body.style.backgroundColor = "rgba("+rgbVal+","+rgbVal+","+rgbVal+")";
});

