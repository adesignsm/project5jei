$(document).ready(function() {


	$("#main-page-logo").on("mouseenter", function() {

		document.getElementById("main-page-logo").setAttribute("src", "../media/logo2.png");
	});

	$("#main-page-logo").on("mouseleave", function() {

		document.getElementById("main-page-logo").setAttribute("src", "../media/logo1.png");
	});

	$("#main-page-logo").on("click", function() {

		window.location.href = "file:///Users/freakolope/Desktop/~*~/includes/index.html";
	});

	if (window.location.href == "file:///Users/freakolope/Desktop/~*~/includes/about.html"
		|| window.location.href == "file:///Users/freakolope/Desktop/~*~/includes/portfolio.html") {

		$("#loading-page").delay(2000).fadeOut(300);
	
	} else if (window.location.href == "file:///Users/freakolope/Desktop/~*~/includes/index.html") {

		$("#loading-page").delay(7000).fadeOut(300);
	}
});