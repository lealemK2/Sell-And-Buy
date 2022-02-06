function scrollAppear(target){
    var innerText=document.querySelector(target);
    var introPos=innerText.getBoundingClientRect().top;
    var screenPos=window.innerHeight;
    if(introPos<(screenPos/2)){
        innerText.classList.add('section-appear');
    }
}
// scrollAppear();//is not gone work because it is only called once and if stat condition
//  won't work since inner height<....n
window.addEventListener('scroll',function(){
    scrollAppear('.beige-section-hide ');
});
window.addEventListener('scroll',function(){
    scrollAppear('.cat-index ');
});

// document.querySelector('#about').getBoundingClientRect();



////////////////////-scroll js
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
document.querySelector('.indexItems').addEventListener('click',function(){
    smoothScroll('.discount',2000);
})