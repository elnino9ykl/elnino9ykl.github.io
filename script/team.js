// CSS 其他尺寸动态适配
document.addEventListener("DOMContentLoaded", function () {
	function updateHeaderMargin() {
		const headerHeight = document.querySelector("header").offsetHeight;
		const rootElement = document.documentElement;
		rootElement.style.setProperty("--container-marginTop", headerHeight + "px");
	}

	updateHeaderMargin();
	window.addEventListener("resize", updateHeaderMargin);
});


// Picture轮播
document.addEventListener("DOMContentLoaded", function () {
	const img = document.getElementsByClassName("pic");
	let index = 0;

	function pictureSwitcher () {
		img[index].classList.remove("active");
		index = (index + 1) % img.length;
		img[index].classList.add("active");
	}

	setInterval(pictureSwitcher, 5000)
});