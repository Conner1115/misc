const $ = (prop) => document.querySelector(prop);
function showNav() {
	$("#dropdown").classList.remove("nav-out");
	$("#dropdown").classList.add("nav-in");
	$("#hamburger-button").classList.remove("btn-in");
	$("#hamburger-button").classList.add("btn-out");
	$("#close-button").classList.add("btn-in");
	$("#close-button").classList.remove("btn-out");
}
function hideNav() {
	$("#dropdown").classList.remove("nav-in");
	$("#dropdown").classList.add("nav-out");
	$("#hamburger-button").classList.add("btn-in");
	$("#hamburger-button").classList.remove("btn-out");
	$("#close-button").classList.add("btn-out");
	$("#close-button").classList.remove("btn-in");
}
