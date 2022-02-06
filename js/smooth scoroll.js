//for the index page
function smoothScroll(target,duration){
    var target=document.querySelector(target);
    var targetPos=target.getBoundingClientRect().top;
    var startPos=window.pageYOffset;
    var distance=targetPos-startPos;
    var startTime=null;
    function animation(currentTime){
        if(startTime===null) startTime=currentTime;
        var elapsedTime=currentTime-startTime;
        var run=ease(elapsedTime,startPos,distance,duration);
        window.scrollTo(0,run);
        if(elapsedTime<duration) requestAnimationFrame(animation);
    }
    function ease(t,b,c,d){
        t/=d/2;
        if(t<1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * ( t * ( t - 2 ) - 1 ) + b;
    }

    requestAnimationFrame(animation);
    // console.log(distance);
}

//when u call it tell it for specific target to scroll
// smoothScroll('.indexItems',2000);
//or add event listenr like thiss
document.querySelector('.indexItems').addEventListener('click',function(){
    smoothScroll('.indexItems',2000);
})

