export const zoomOut = (image) => {
	image.style.height = parseInt(image.style.height) - 50 + 'px';
};

export const zoomIn = (image) => {
	image.style.height = parseInt(image.style.height) + 50 + 'px';
};

export const zoomToImageSize = (image) => {
	image.style.height = image.naturalHeight + 'px';
};

export const zoomToMax = (image) => {
	image.style.height = window.innerHeight + 'px';
};

export const rotateLeft = (image) => {
	image.style.transform = 'rotate(' + (parseInt(image.style.transform) - 90) + 'deg)';
};

export const rotateRight = (image) => {
	image.style.transform = 'rotate(' + (parseInt(image.style.transform) + 90) + 'deg)';
};

export const moveLeft = (isAbsolute) => {
	if (isAbsolute) {
		document.scrollingElement.scrollLeft = 0;
	} else {
		document.scrollingElement.scrollLeft -= 50;
	}
};

export const moveDown = (isAbsolute) => {
	if (isAbsolute) {
		document.scrollingElement.scrollTop = document.body.scrollWidth;
	} else {
		document.scrollingElement.scrollTop += 50;
	}
};

export const moveUp = (isAbsolute) => {
	if (isAbsolute) {
		document.scrollingElement.scrollTop = -1;
	} else {
		document.scrollingElement.scrollTop -= 50;
	}
};

export const moveRight = (isAbsolute) => {
	if (isAbsolute) {
		document.scrollingElement.scrollLeft = document.body.scrollHeight;
	} else {
		document.scrollingElement.scrollLeft += 50;
	}
};
