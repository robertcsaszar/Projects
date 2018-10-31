// Loading Spinner //

var spinner = function() {
  var mainCont = $("#content")
  var mainDiv = $("<div></div>").addClass("loading");
  var spinnerDiv = $("<div></div>").addClass("ring");
  var text = "Loading";
  var loader = $("<span></span>").addClass("loader");

  mainCont.append(mainDiv);
  mainDiv.append(spinnerDiv);
  spinnerDiv.append(text);
  spinnerDiv.append(loader);
}

$(domLoaded);

function domLoaded() {
  $(".list-unstyled a").on("click", spinner)
  $("#sidebar a").on("click", spinner)
  $(".loading").addClass("hidden")

  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function() {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5bd90c4d65224c26405171ec/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
}