var mySidenav = $('#mySidenav');
var menuButtonAnimation;
var isMenuOpen = false;

function openNav() {
    if(!isMenuOpen){
        isMenuOpen = true;
        mySidenav.height("100%");
        $('body').addClass("fixedPosition");
        menuButtonAnimation.playSegments([0,85],true);
        // menuButtonAnimation.goToAndPlay(0, true);
    }
    else{
        mySidenav.height("0%");
        $('body').removeClass("fixedPosition");
        menuButtonAnimation.playSegments([86,170],true);
        isMenuOpen = false;
    }
}
  
function closeNav() {
    mySidenav.height("0%");
    $('body').removeClass("fixedPosition");
    isMenuOpen = false;
}

$(document).ready(function () {

    //menu button animation
    var menuButton = $('#menuButton');
    
    var svgContainer = document.getElementById('menuButton');
    menuButtonAnimation = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    speed:2,
    autoplay: false,
    path: 'res/menuClose.json'
    });
    menuButtonAnimation.setSpeed(1.4);

    var iphone = $('#iphone');
    var iphoneApps = $('#iphone-apps');

    iphoneApps.width = iphone.width;

    menuButton.click(function() {
        // menuButton.toggleClass("menu-button-animate");
        openNav();
      });

    var isPhone = window.matchMedia("(max-width: 480px)").matches;

    var controller = new ScrollMagic.Controller();

    //sticky scene
    var animationDuration = 4*window.innerHeight;
    var scene = new ScrollMagic.Scene({triggerElement: "#sticky-container", duration: animationDuration})
    scene.triggerHook(0.1);
    scene.setPin("#sticky-container")
    // .addIndicators({name: "pin"}) // add indicators (requires plugin)
    .addTo(controller);

    var animationtimeLine = new TimelineMax();

    //make smaller animation
    var tweenSmaller;
    if(isPhone){
        tweenSmaller = TweenMax.to([".iphone", "iphone-apps"], 1, {
            width: "60%"
        }, "iphone-smaller");
    }else{
        tweenSmaller = TweenMax.to([".iphone", "iphone-apps"], 1, {
            height: "500px"
        }, "iphone-smaller");
    }

    //fade in apps animation
    var tweenFade = TweenMax.to('#iphone-apps', 1, { css: { opacity: 1}});
      
    //slide left animation
    var tweenTranslate;
    if(!isPhone){
        tweenTranslate = TweenMax.to('#iphone-container', 1, { css: { transform: 'translate3d(-30%, 0 , 0)' }});
    }
    
    //reveal text
    var tweenFadeProjectText = TweenMax.to('#projects-text', 1, { css: { opacity: 1}});

    //add animations to timeline
    animationtimeLine.add(tweenSmaller);
    animationtimeLine.add(tweenFade);
    if(tweenTranslate){
        animationtimeLine.add(tweenTranslate);
    }
    animationtimeLine.add(tweenFadeProjectText);
    
    new ScrollMagic.Scene({
            triggerElement: "#sticky-container"
        })
    .setTween(animationtimeLine)
    // .offset(400)
    .duration(4*window.innerHeight)
    // .addIndicators({name: "animations"}) // add indicators (requires plugin)
    .addTo(controller);
});

  
