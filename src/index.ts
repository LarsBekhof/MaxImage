import {
	zoomToMax,
} from './keyFunctions';
import {
	addKeybindings,
} from './keybindings';

const images = document.getElementsByTagName('img');

const setDefaults = () => {
	document.body.style.position = 'absolute';
	images[0].style.position = '';
	images[0].style.margin = '0 auto';
	images[0].style.width = 'auto';
	images[0].style.transform = 'rotate(0deg)';
};

if (images.length === 1 && document.body.children.length === 1) {
	setDefaults();
	addKeybindings(images[0]);
	zoomToMax(images[0]);
}
