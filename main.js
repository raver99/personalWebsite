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
      var scene = new ScrollMagic.Scene({triggerElement: "#sticky-container", duration: 1000})
      scene.triggerHook(0.1);
      scene.setPin("#iphone")
      .addIndicators({name: "pin"}) // add indicators (requires plugin)
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


      // // slide scene
      // var scene2 = new ScrollMagic.Scene({
      //       triggerElement: "#sticky-container"
      //   })
      // scene2.triggerHook(0.8);
      // scene2.setTween(fromLeftTimeline)
      // .duration(1000)
      // //    .reverse(false)
      // .addIndicators({name: "slidein"}) // add indicators (requires plugin)
      // .addTo(controller);

      //fade animation
      var fadeInTimeline = new TimelineMax();
      var fadeInFrom = TweenMax.from("#iphone", 1, {
          scale: 1.5,  transformOrigin:'50% 0%'
      });
      var fadeInTo = TweenMax.to("#iphone", 1, {
          scale: 1, transformOrigin:'50% 0%'
      });
      fadeInTimeline
          .add(fadeInFrom)
          .add(fadeInTo);
      
      new ScrollMagic.Scene({
              triggerElement: "#sticky-container"
          })
      .setTween(fadeInTimeline)
      .offset(400)
      .duration(1000)
      .addIndicators({name: "fade in"}) // add indicators (requires plugin)
      .addTo(controller);
});

  
