// CSS 其他尺寸动态适配
document.addEventListener("DOMContentLoaded", function () {
	function updateHeaderMargin() {
		const headerHeight = document.querySelector("header").offsetHeight;
		const rootElement = document.documentElement;
		rootElement.style.setProperty("--container-marginTop", headerHeight + "px");
	}

	updateHeaderMargin();
	window.addEventListener("resize", updateHeaderMargin);

	// creatDash();
});

const data = [
	[
		"\"./photos/20241207.jpg\"",
		"Hitalk学术交流下午茶，罗凯分享“多目标跟踪”，20241207"
	],
	[
		"\"./photos/20241129.jpg\"",
		"课题组轰趴，20241129"
	],
	[
		"\"./photos/20241001.jpg\"",
		"在米兰MICO Convention Centre参加ECCV，20241001"
	],
	[
		"\"./photos/20240718.jpg\"",
		"课题组爬岳麓山，20240718"
	],
	[
		"\"./photos/20240618.jpg\"",
		"祝贺陈冠宇、邹正宇、刘楚航等同学毕业，20240618"
	],
	[
		"\"./photos/20240615.jpg\"",
		"课题组参加ISoIRS会议，20240615"
	],
	[
		"\"./photos/20240612.jpg\"",
		"课题组爬岳麓山，20240612"
	],
	[
		"\"./photos/20240528.jpg\"",
		"在香港城市大学拜访雷磊博士、王敏博士，20240528"
	],
	[
		"\"./photos/20240527.jpg\"",
		"在香港科技大学郑家纯机器人研究院交流，20240527"
	],
	[
		"\"./photos/20240421.jpg\"",
		"EMBA交叉学科专题，20240421"
	],
	[
		"\"./photos/20240331_2.jpg\"",
		"课题组春游 with 滕飞、罗凯、黄翊洲、赵佳艺、刘嘉炜，20240331"
	],
	[
		"\"./photos/20240331_1.jpg\"",
		"机器人学院足球队与岳麓书院足球队友谊赛，20240331"
	],
	[
		"\"./photos/20240221.jpg\"",
		"胡杰 visit HNU，20240221"
	],
	[
		"\"./photos/20240203.jpg\"",
		"第1届优秀青年学者大跨度交叉学科研究方向挖掘研讨会，with 北京大学张世成、密歇根大学/哈尔滨工业大学王文韬、南京医科大学陈勋、东京大学苏泽彬、东北大学张继良，20240203"
	],
	[
		"\"./photos/20240121.jpg\"",
		"With ZJU OPT304实验室小伙伴，20240121"
	],
	[
		"\"./photos/20240117.jpg\"",
		"德国博世离线感知AI Lead万俊君受邀到学院作报告《视觉语言大模型在自动驾驶中的应用》，20240117"
	],
	[
		"\"./photos/20240115.jpg\"",
		"夏彦博士、孙磊博士到HNU交流，20240115"
	],
	[
		"\"./photos/20231213.jpg\"",
		"滕飞、李景行参加“科研历程与心路分享”Hitalk学术交流下午茶，20231209"
	],
	[
		"\"./photos/20231209.jpg\"",
		"机器人学院足球队与岳麓书院足球队友谊赛，20231209"
	],
	[
		"\"./photos/20231204.jpg\"",
		"团队开展“科学精神与学术规范”专题组会，20231204"
	],
	[
		"\"./photos/20231116.jpg\"",
		"课题组聚餐“智能无人，勇闯新界”，20231116"
	],
	[
		"\"./photos/20231104.jpg\"",
		"实验室夜爬岳麓山 with 滕飞、刘嘉炜、赵佳艺，20231104"
	],
	[
		"\"./photos/20231021.jpg\"",
		"机器人学院足球队第一次比赛，20231021"
	],
	[
		"\"./photos/20230925.jpg\"",
		"石泽在西班牙毕尔巴鄂参加智能交通系统旗舰会议IEEE ITSC 2023 with Prof. Luis M. Bergasa，20230925"
	],
	[
		"\"./photos/20230918.jpg\"",
		"在爱丁堡大学拜访李根、段皓然，20230918"
	],
	[
		"\"./photos/20230917.jpg\"",
		"在牛津大学拜访陈彦杰教授一家、李雷博士、张嘉明博士，20230917"
	],
	[
		"\"./photos/20230916.jpg\"",
		"在剑桥大学拜访王光明博士，20230916"
	],
	[
		"\"./photos/20230910.jpg\"",
		"教师节与唐从园踢球，20230910"
	],
	[
		"\"./photos/20230826.jpg\"",
		"实验室爬山 with 曹意宏、李景行、滕飞、喻慈舟、杨诗蕊、彭雅萱，20230826"
	],
	[
		"\"./photos/20230426.jpg\"",
		"在南洋理工大学S-LAB拜访周弈帆，20230426"
	],
	[
		"\"./photos/20230424.jpg\"",
		"与周易教授一起拜访香港科技大学尹欢教授，20230424"
	],
	[
		"\"./photos/20230414.jpg\"",
		"湖南省智能车辆领域雷达及视觉传感器产学研交流会，20230414"
	],
	[
		"\"./photos/20230408.jpg\"",
		"实验室爬山 with 时昊、印晓婷、李景行，20230408"
	],
	[
		"\"./photos/20230331.jpg\"",
		"深蓝学院公开课，20230331"
	]
]

function creatDash() {
	let result = [];
	for (const divData of data) {
		const imgS = divData[0];
		const des = divData[1];

		const imgSrc = imgS.slice(1, imgS.length - 1);
		const date = des.slice(des.length - 8, des.length);
		const description = des.slice(0, des.length - 8);

		// console.log(imgSrc + ":" + date + ":" + description);
		const DASH = `
        <div class="dash">
			<div class="dash-display">
				<img src="${imgSrc}" alt="">
			<div class="date">${date}</div>
			</div>
			<div class="dash-description">
				${description}
			</div>
		</div>
    `;

		console.log(DASH);
		result.push(DASH);
		let div = document.createElement("div");
		div.innerHTML = DASH.trim();
		let ele = div.firstChild;
		document.getElementById("container").appendChild(ele);
	}

	console.log(result);
}

function setPosition() {
	const dashs = document.getElementsByClassName("dash");

	for (const dash of dashs) {

	}
}

