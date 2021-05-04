/*==================== SHOW SCROLL TOP ====================*/
const scrollTop = () => {
	let headerHeight = $("header").outerHeight();
	let bannerHeight = $("#section-banner").outerHeight();
	$(window).scroll(function () {
		if ($(this).scrollTop() > headerHeight) {
			$("#scroll-top").addClass("show-scroll");
		} else {
			$("#scroll-top").removeClass("show-scroll");
		}
	});

	$("#scroll-top").on("click", function (e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0,
		});
	});
};

/*==================== MAIN MENU MOBILE ====================*/
const mainMenu = () => {
	$(".btn-toggle").on("click", () => {
		let $this = $(".btn-toggle");
		$this.toggleClass("active");
		$("#overlay").toggleClass("active");
		$(".nav-wrapper .navbar").toggleClass("active");
	});
	$("#overlay").on("click", function () {
		let $this = $(this);
		$this.removeClass("active");
		$(".btn-toggle").removeClass("active");
		$(".nav-wrapper .navbar").removeClass("active");
	});
	$(".btn-toggle-search").on("click", function () {
		$(this).siblings(".search-box").slideToggle();
	});
};

/*==========LISTBANNER SLIDER==========*/
const initBanner = () => {};
// ===========================CHECK BANNER========================= //
const checkLayoutBanner = () => {
	const pagesBanner = $("#pagebanner");
	const heightHeader = $("header").outerHeight();
	const mainBanner = $("#home-banner");
	if (mainBanner.length >= 1) {
		$("main").css("padding-top", 0);
	} else if (pagesBanner.length >= 1) {
		$("main").css("padding-top", heightHeader);
	} else {
		$("main").css("padding-top", heightHeader);
	}
};
// =========================== BUTTON SEARCH MOBILE =========================== //
const searchButton = () => {
	$(".search-box .button-search").on("click", () => {
		let $this = $(".search-box .button-search");
		$this.siblings(".form-group ").slideToggle();
	});
};
// =========================SET BACKGROUND ====================================== //
const setBackgroundElement = () => {
	$("[setBackground]").each(function () {
		var background = $(this).attr("setBackground");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center",
			"background-repeat": "repeat",
		});
	});
};
/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	scrollTop();
	mainMenu();
	initBanner();
	searchButton();
	setBackgroundElement();
	// checkLayoutBanner();
});
