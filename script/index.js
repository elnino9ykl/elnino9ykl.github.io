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

// backTop 回到导航按钮
const backTopBtn = document.getElementById("backTop");
const publicationsTop = document.getElementById("publications").offsetTop;
const headerHeight = document.querySelector("header").offsetHeight;
const scrollTopThreshold = 0.85 * (publicationsTop + headerHeight);
window.onscroll = function () {
	if (document.documentElement.scrollTop > scrollTopThreshold) {
        backTopBtn.style.display = "block";
    } else {
        backTopBtn.style.display = "none";
    }
}

backTopBtn.addEventListener("click", function () {
	document.documentElement.scrollTop = publicationsTop - headerHeight;
});
