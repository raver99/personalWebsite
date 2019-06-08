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
   });

  
