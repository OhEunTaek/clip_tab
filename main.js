const btns = document.querySelectorAll('li');
const boxs = document.querySelectorAll('section');
const delay = convertSpeed(boxs[0]);
let enableClick = true;

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		!btn.classList.contains('on') && enableClick && activation(idx);
	});
});

function activation(index) {
	enableClick = false;
	console.log('activation called!!');
	for (const el of btns) el.classList.remove('on');
	btns[index].classList.add('on');

	const prevActive = document.querySelector('.upper');
	prevActive.classList.remove('upper');
	prevActive.classList.add('lower');

	boxs[index].classList.add('upper');

	setTimeout(() => {
		document.querySelector('.lower').classList.remove('lower');
		enableClick = true;
	}, delay);
}

function convertSpeed(el) {
	return parseFloat(getComputedStyle(el)['transition-duration']) * 1000;
}
