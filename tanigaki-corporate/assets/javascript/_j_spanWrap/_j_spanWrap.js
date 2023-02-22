
function init(tg) {

	let str;
	[].slice.call(tg).forEach(function(element, i) {

		let spanWrapText = ""

		spanWrapText = [...element.textContent].map(char => `<span>${char}</span>`).join('');
		element.innerHTML = spanWrapText
	});
	
}

export default function(tg) {
	init(tg);
}