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

// 手机模式点击显示
const dashset = document.getElementsByClassName("dash");
for (const dash of dashset) {
	dash.addEventListener("click", function () {
		if (dash.classList.contains("show")) {
			dash.classList.remove("show");
		} else {
			dash.classList.add("show");
		}
	});
}