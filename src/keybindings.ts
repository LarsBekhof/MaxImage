import {
	moveLeft,
	moveDown,
	moveUp,
	moveRight,
	zoomIn,
	zoomOut,
	zoomToImageSize,
	zoomToMax,
	rotateLeft,
	rotateRight,
} from './keyFunctions';

export const addKeybindings = (image) => {
	window.addEventListener('keypress', (event) => {
		switch (event.key) {
			case 'h': moveLeft(image); break;
			case 'j': moveDown(image); break;
			case 'k': moveUp(image); break;
			case 'l': moveRight(image); break;
			case '0': moveLeft(true); break;
			case 'G': moveDown(true); break;
			case 'g': moveUp(true); break;
			case '$': moveRight(true); break;
			case '+': zoomIn(image); break;
			case '-': zoomOut(image); break;
			case '=': zoomToImageSize(image); break;
			case '_': zoomToMax(image); break;
			case '<': rotateLeft(image); break;
			case '>': rotateRight(image); break;
		}
	});

	window.addEventListener('wheel',(event) => {
		if(event.deltaY > 0) {
			event.preventDefault();
			zoomOut(image);
		} else if (event.deltaY < 0) {
			event.preventDefault();
			zoomIn(image);
		}
	});
};
