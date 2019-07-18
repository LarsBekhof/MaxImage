const images = document.getElementsByTagName('img');

const setDefaults = () => {
	document.body.style.position = 'absolute';
	images[0].style.position = '';
	images[0].style.margin = '0 auto';
	images[0].style.height = window.innerHeight + 'px';
	images[0].style.width = 'auto';
};

const addScrollListener = () => {
	window.addEventListener('wheel',(event) => {
		if(event.deltaY > 0) {
			event.preventDefault();
			images[0].style.height = parseInt(images[0].style.height) - 50 + 'px';
		} else if (event.deltaY < 0) {
			event.preventDefault();
			images[0].style.height = parseInt(images[0].style.height) + 50 + 'px';
		}
	});
};

const moveLeft = (isAbsolute) => {
	if (isAbsolute) {
		document.scrollingElement.scrollLeft = 0;
	} else {
		document.scrollingElement.scrollLeft -= 50;
	}
};

const moveDown = (isAbsolute) => {
	if (isAbsolute) {
		document.scrollingElement.scrollTop = document.body.scrollWidth;
	} else {
		document.scrollingElement.scrollTop += 50;
	}
};

const moveUp = (isAbsolute) => {
	if (isAbsolute) {
		document.scrollingElement.scrollTop = -1;
	} else {
		document.scrollingElement.scrollTop -= 50;
	}
};

const moveRight = (isAbsolute) => {
	if (isAbsolute) {
		document.scrollingElement.scrollLeft = document.body.scrollHeight;
	} else {
		document.scrollingElement.scrollLeft += 50;
	}
};

const addMenuPopup = () => {
	window.addEventListener('keypress', (event) => {
		switch (event.key) {
			case 'h': moveLeft(); break;
			case 'j': moveDown(); break;
			case 'k': moveUp(); break;
			case 'l': moveRight(); break;
			case '0': moveLeft(true); break;
			case 'G': moveDown(true); break;
			case 'g': moveUp(true); break;
			case '$': moveRight(true); break;
		}
	});
};

if (images.length === 1 && document.body.children.length === 1) {
	setDefaults();
	addScrollListener();
	addMenuPopup();
}
