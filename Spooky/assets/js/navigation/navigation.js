$(domLoaded);

function domLoaded() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("active");
    $("#userOnline").toggleClass("active");
    $("#nav-links").toggleClass("active");
    $("#nav-logo").toggleClass("active");
  });
}