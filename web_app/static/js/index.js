var menuOpen = false;

$(".menu_trigger").click(function() {
  if(!menuOpen){
    $(".menu_item").addClass("open");
    menuOpen = true;
  }else {
    closeMenu();
  }
});

function closeMenu() {
  $(".menu_item").removeClass("open");
  menuOpen = false;
}

