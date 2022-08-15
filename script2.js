let slideCount=1;



function nextSlide()
{
    // let margin=slideCount*100;
    // document.querySelector(".slider").style.marginLeft=-margin+"%";
    
    
        
    slideCount++
    moveToSlide(slideCount);
    if(slideCount==5)
    {
        slideCount=1;

        setTimeout(function(){
            document.querySelector(".slider").style.marginLeft="-100%";
            document.querySelector(".slider").style.transition="0s";
        },500)
    }

}


function prevSlide()
{
    slideCount--;
    moveToSlide(slideCount)
    
    if(slideCount==0)
    {
        slideCount=4;

        setTimeout(function(){
            document.querySelector(".slider").style.marginLeft="-400%";
            document.querySelector(".slider").style.transition="0s";
        },500)
    }


}

function moveToSlide(slideNumber)
{

    let margin = slideNumber*100;
    document.querySelector(".slider").style.transition=".5s";
    document.querySelector(".slider").style.marginLeft=-margin+"%";

}