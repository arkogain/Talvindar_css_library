import { styles } from "https://cdn.jsdelivr.net/gh/arkogain/Talvindar_css_library/cssstylescomp.js";

const index = () => {
	const nodeList = document.querySelectorAll("*");

	// console.log(classes[6]);

	nodeList.forEach((el) => {
		// console.log(el.classList.value);

		el.classList.forEach((className) => {
			if (styles[className]) {
				// console.log(className);

				// style add kar diya

				Object.assign(el.style, styles[className]);
			} else {
				console.log(el.className, "Ye Class humare pass nehi hai");
			}
		});

		// remove class attribute
		el.removeAttribute("class");
	});
};

export default index;
