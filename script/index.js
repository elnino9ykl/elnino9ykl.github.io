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

// Address 点击复制
document.getElementById("clickToCopy").addEventListener("click", function () {
	const textToCopy = "Office 206, Building B3, Fenghuangshan Road 66, Yuelu District, Changsha 410012, Hunan, China.";

	navigator.clipboard.writeText(textToCopy).then(function () {
		console.log("Copy done！");

		const toast = document.getElementById("toast");
		toast.classList.add("show");

		setTimeout(function () {
			toast.classList.remove("show");
		}, 500);
	}).catch(function (err) {
		console.error("Error, can't copy it. ", err);
	});
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

// Publications 部分折叠
const pubFolds = document.getElementsByClassName("pub-fold");
for (const index in pubFolds) {
	pubFolds[+index].addEventListener("click", function () {
		const display = document.getElementsByClassName("dashset")[+index].style.display;
		document.getElementsByClassName("dashset")[+index].style.display = (display === "none" ? "block" : "none");
		pubFolds[+index].innerHTML = (pubFolds[+index].innerHTML === "折叠" ? "展开" : "折叠");
	});
}

// Publications 计数
// const dashsets = document.getElementsByClassName("dashset");
// const pubCounts = document.getElementsByClassName("pub-count");
// document.addEventListener("DOMContentLoaded", function () {
// 	function pubCounter() {
// 		console.log("p");
// 		for (const index in pubCounts) {
// 			console.log(index);
// 			pubCounts[+index].innerHTML = "共" + dashsets[+index].children.length + "篇";
// 		}
// 	}
//
// 	pubCounter();
// });

// 此功能废

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
