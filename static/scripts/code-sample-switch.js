const nextRender = (fn) => setTimeout(fn, 0);

document.addEventListener('click', (event) => {
	const control = event.target;
	const language = control.dataset.lang;
	if (!language) return;

	const origin = control.parentElement;
	const initialPosition = origin.getBoundingClientRect().top;

	document.querySelectorAll('[data-show]').forEach((container) => {
		container.dataset.show = language;
	});

	document.querySelectorAll('[data-lang]').forEach((control) => {
		control.ariaCurrent = control.dataset.lang === language;
	});

	nextRender(() => {
		const currentPosition = origin.getBoundingClientRect().top;
		const adjustedPosition = window.scrollY + currentPosition - initialPosition;
		window.scrollTo(0, adjustedPosition);
	});
});
