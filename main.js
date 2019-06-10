var mySidenav = $('#mySidenav');

function openNav() {
  mySidenav.height("100%");
  $('body').addClass("fixedPosition");
}
  
function closeNav() {
    mySidenav.height("0%");
    $('body').removeClass("fixedPosition");
}

$(document).ready(function () {
    var menuButton = $('#menuButton');
    
    menuButton.click(function() {
        menuButton.toggleClass("menu-button-animate");
        openNav();
      });

      var controller = new ScrollMagic.Controller();

      //sticky scene
      var scene = new ScrollMagic.Scene({triggerElement: "#sticky-container", duration: "400%"})
      scene.triggerHook(0.1);
      scene.setPin("#sticky-container")
      .addIndicators({name: "pin"}) // add indicators (requires plugin)
      .addTo(controller);

      //scale animation
      var fadeInTimeline = new TimelineMax();
      var fadeInFrom = TweenMax.from("#iphone", 1, {
          scale: 1.5,  transformOrigin:'50% 0%'
      });
      var fadeInTo = TweenMax.to("#iphone", 1, {
          scale: 1, transformOrigin:'50% 0%'
      });
      var tweenTranslate = TweenMax.to('#iphone-container', 1, { css: { transform: 'translate3d(-30%, 0 , 0)' }});

      var tweenFade = TweenMax.to('#iphone-apps', 1, { css: { opacity: 1}});
      var tweenFade2 = TweenMax.to('#projects-text', 1, { css: { opacity: 1}});

      fadeInTimeline
          .add(fadeInFrom)
          .add(fadeInTo)
          .add(tweenTranslate)
          .add(tweenFade)
          .add(tweenFade2);
      
      new ScrollMagic.Scene({
              triggerElement: "#sticky-container"
          })
      .setTween(fadeInTimeline)
      .offset(400)
      .duration("300%")
      .addIndicators({name: "fade in"}) // add indicators (requires plugin)
      .addTo(controller);

    //left to right
    // var fromLeftTimeline = new TimelineMax();
    // var fromLeftFrom = TweenMax.from("#iphone", 1, {
    //     x: 500
    // });
    // var fromLeftTo = TweenMax.to("#iphone", 1, {
    //     x: 0
    // });
    // fromLeftTimeline
    //     .add(fromLeftFrom)
    //     .add(fromLeftTo);


    //var tweenTranslate = new TweenMax.to('#iphone-container', 1, { css: { transform: 'translate3d(-150px, 0 , 0)' }})

    // // slide scene
    // var scene2 = new ScrollMagic.Scene({
    //       triggerElement: "#iphone-container"
    //   })
    // scene2.offset(1000);
    // // scene2.triggerHook(0.8);
    // scene2.setTween(tweenTranslate)
    // .duration(500)
    // //    .reverse(false)
    // .addIndicators({name: "slide left"}) // add indicators (requires plugin)
    // .addTo(controller);
});

  
