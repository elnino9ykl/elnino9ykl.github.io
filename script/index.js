// CSS Navbar 点击菜单
document.getElementById("nav-btn").addEventListener("click", function () {
	const nav = document.getElementById("nav");
	if (nav.classList.contains("open")) {
		nav.classList.remove("open");
	} else {
		nav.classList.add("open");
	}
});

// CSS Navbar 点击按钮
document.querySelectorAll(".hover-line").forEach(element => {
	element.addEventListener("click", function (event) {
		document.getElementById("top").classList.remove("open");
	})
});

// CSS 其他尺寸动态适配
document.addEventListener("DOMContentLoaded", function (event) {
	function updateHeaderMargin() {
		const headerHeight = document.querySelector("header").offsetHeight;
		const rootElement = document.documentElement;
		rootElement.style.setProperty("--container-marginTop", headerHeight + "px");
	}

	updateHeaderMargin();
	window.addEventListener("resize", updateHeaderMargin);
});

// Publications 部分格式化
const pubDivs = document.getElementsByClassName("dash");
for (const originalDiv of pubDivs) {
	const newDiv = originalDiv;
	const textAndLinks = newDiv.querySelector("p").innerHTML;
	newDiv.querySelector("p").innerHTML = textAndLinks
		.replace(/<a style="color:MidnightBlue">(.*?)<\/a>/sg, '<span>$1</span>')
		.replace(/<a style="color:BLUE">(.*?)<\/a>/sg, '<span>$1<span>')
		.replace(/<a style="color:MidnightBlue" href="(.*?)">(.*?)<\/a>/sg, '<a class="db" href="$1">$2</a>')
		.replace(/<a style="color:BLUE" href="([\s\S]*?)">(.*?)<\/a>/g, '<a class="b" href="$1">$2</a>')
		.replace(/<b><a style="color:orangered" href="(.*?)">(.*?)<\/a><\/b>/g, '<b><a class="r" href="$1">$2</a></b>');

	originalDiv.parentNode.replaceChild(newDiv, originalDiv);
}