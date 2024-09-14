
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;


function firstPageAnim(){
    // creating timeline 
    var tl = gsap.timeline();

    tl.from("#nav" , {
        y:'-10',
        opacity: 0,
        duration :1.5, 
        ease : Expo.easeInOut
    })
    .to('.boundingelem' , {
        y:0,
        ease: Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
    })
    .from("#herofooter" , {
        y:'-10',
        opacity:0,
        duration : 1.5,
        ease : Expo.easeInOut,
        delay: -.5 
    })
}

// jab hamlog mouse moove karain to hum log skew kar paaye aur maximi=um skew or minimum skew define kar paaye  , jab mouse moove kare to chapta ki value badhe , ur jab mouse chalna band ho jaaye to chapta hata lo 

function circleChaptaKaro(){
    clearTimeout(timeout);
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove" , function(dets){
      var xdiff =   dets.clientX - xscale;
    var ydiff = dets.clientY - yscale;
       

      xscale =   gsap.utils.clamp(.8,1.2 , xdiff);
      yscale =   gsap.utils.clamp(.8,1.2 , ydiff);

         xprev = dets.clientX;
        yprev = dets.clientY;
    
            circleMouseFollow(xscale , yscale)

         timeout = setTimeout(function(){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1 ,1)`;

            }, 100)
    })
}

circleChaptaKaro()

function circleMouseFollow(xscale , yscale){
    window.addEventListener('mousemove' , function(dets){
        console.log(dets.clientX , dets.clientY);
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale} , ${yscale})`;
    })
}

circleMouseFollow();
firstPageAnim();


// teeno element ko select karo , uske baad teeno elem par eak mouse moove lagao ,
// jab mouse moove ho to ye pata karo ki mouse kahan par hi  jiska matlab hai ki mouse ki x and y psoition pata karo , ab mouse ki sy position ke badle us image ko show karo , move karte waqt rotate karo , move karte waqt rotate karo , and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaaye 


document.querySelectorAll(".elem")
.forEach(function(elem){
    elem.addEventListener("mousemove" , function(details){
        
        console.log( )
    
        gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease : Power1,
        top:details.clientY - elem.getBoundingClientRect().top,
        left : details.clientX,
       })
    })
});