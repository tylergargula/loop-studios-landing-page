$("button").click(function() {
  $("body footer div div div:nth-child(1) a").removeClass("navbar-brand");
  $(".nav-link").css("color", "none");
  $("#navbarNavAltMarkup").css("height", "0")
});
