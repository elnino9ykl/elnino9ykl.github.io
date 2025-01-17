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
		document.getElementById("nav").classList.remove("open");
	})
});
