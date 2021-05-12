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
		$(".nav-main .navbar").toggleClass("active");
	});
	$("#overlay").on("click", function () {
		let $this = $(this);
		$this.removeClass("active");
		$(".btn-toggle").removeClass("active");
		$(".nav-main .navbar").removeClass("active");
	});
	$(".btn-toggle-search").on("click", function () {
		$(this).siblings(".search-box").slideToggle();
	});
};

/*==========LISTBANNER SLIDER==========*/
const initBanner = () => {
	let myswiper = new Swiper(".banner-hero  .swiper-container", {
		loop: false,
		speed: 2500,
		effect: "fade",
		grabCursor: true,
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false,
		// },
		fadeEffect: {
			crossFade: true,
		},
		pagination: {
			el: ".banner-hero  .swiper-pagination",
			clickable: true,
			type: "bullets",
		},
	});
};
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

// ======================== MAPPING ============================================//
const mappingInit = () => {
	$(".wrap-right .hotline").mapping({
		mobileWrapper: ".wrap-right .toggle-button .sub-toggle",
		mobileMethod: "appendTo",
		desktopWrapper: "header nav .header-top .nav-main .wrap-right",
		desktopMethod: "appento",
		breakpoint: 1200,
	});
	$(".wrap-right .promotion").mapping({
		mobileWrapper: ".wrap-right .toggle-button .sub-toggle",
		mobileMethod: "appendTo",
		desktopWrapper: ".wrap-right",
		desktopMethod: "appento",
		breakpoint: 1200,
	});
	$(".header-bottom .wrapper-button").mapping({
		mobileWrapper: ".wrap-right .toggle-button .sub-toggle",
		mobileMethod: "appendTo",
		desktopWrapper: ".header-bottom",
		desktopMethod: "appento",
		breakpoint: 1200,
	});

	$("header")
		.find(".toggle-button .icon")
		.on("click", function () {
			$(this).next().slideToggle();
			$(this).toggleClass("active");
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
	mappingInit();
});
