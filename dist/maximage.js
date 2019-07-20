define("keyFunctions", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.zoomOut = function (image) {
        image.style.height = parseInt(image.style.height) - 50 + 'px';
    };
    exports.zoomIn = function (image) {
        image.style.height = parseInt(image.style.height) + 50 + 'px';
    };
    exports.zoomToImageSize = function (image) {
        image.style.height = image.naturalHeight + 'px';
    };
    exports.zoomToMax = function (image) {
        image.style.height = window.innerHeight + 'px';
    };
    exports.rotateLeft = function (image) {
        image.style.transform = 'rotate(' + (parseInt(image.style.transform) - 90) + 'deg)';
    };
    exports.rotateRight = function (image) {
        image.style.transform = 'rotate(' + (parseInt(image.style.transform) + 90) + 'deg)';
    };
    exports.moveLeft = function (isAbsolute) {
        if (isAbsolute) {
            document.scrollingElement.scrollLeft = 0;
        }
        else {
            document.scrollingElement.scrollLeft -= 50;
        }
    };
    exports.moveDown = function (isAbsolute) {
        if (isAbsolute) {
            document.scrollingElement.scrollTop = document.body.scrollWidth;
        }
        else {
            document.scrollingElement.scrollTop += 50;
        }
    };
    exports.moveUp = function (isAbsolute) {
        if (isAbsolute) {
            document.scrollingElement.scrollTop = -1;
        }
        else {
            document.scrollingElement.scrollTop -= 50;
        }
    };
    exports.moveRight = function (isAbsolute) {
        if (isAbsolute) {
            document.scrollingElement.scrollLeft = document.body.scrollHeight;
        }
        else {
            document.scrollingElement.scrollLeft += 50;
        }
    };
});
define("keybindings", ["require", "exports", "keyFunctions"], function (require, exports, keyFunctions_1) {
    "use strict";
    exports.__esModule = true;
    exports.addKeybindings = function (image) {
        window.addEventListener('keypress', function (event) {
            switch (event.key) {
                case 'h':
                    keyFunctions_1.moveLeft(image);
                    break;
                case 'j':
                    keyFunctions_1.moveDown(image);
                    break;
                case 'k':
                    keyFunctions_1.moveUp(image);
                    break;
                case 'l':
                    keyFunctions_1.moveRight(image);
                    break;
                case '0':
                    keyFunctions_1.moveLeft(true);
                    break;
                case 'G':
                    keyFunctions_1.moveDown(true);
                    break;
                case 'g':
                    keyFunctions_1.moveUp(true);
                    break;
                case '$':
                    keyFunctions_1.moveRight(true);
                    break;
                case '+':
                    keyFunctions_1.zoomIn(image);
                    break;
                case '-':
                    keyFunctions_1.zoomOut(image);
                    break;
                case '=':
                    keyFunctions_1.zoomToImageSize(image);
                    break;
                case '_':
                    keyFunctions_1.zoomToMax(image);
                    break;
                case '<':
                    keyFunctions_1.rotateLeft(image);
                    break;
                case '>':
                    keyFunctions_1.rotateRight(image);
                    break;
            }
        });
        window.addEventListener('wheel', function (event) {
            if (event.deltaY > 0) {
                event.preventDefault();
                keyFunctions_1.zoomOut(image);
            }
            else if (event.deltaY < 0) {
                event.preventDefault();
                keyFunctions_1.zoomIn(image);
            }
        });
    };
});
define("index", ["require", "exports", "keyFunctions", "keybindings"], function (require, exports, keyFunctions_2, keybindings_1) {
    "use strict";
    exports.__esModule = true;
    var images = document.getElementsByTagName('img');
    var setDefaults = function () {
        document.body.style.position = 'absolute';
        images[0].style.position = '';
        images[0].style.margin = '0 auto';
        images[0].style.width = 'auto';
        images[0].style.transform = 'rotate(0deg)';
    };
    if (images.length === 1 && document.body.children.length === 1) {
        setDefaults();
        keybindings_1.addKeybindings(images[0]);
        keyFunctions_2.zoomToMax(images[0]);
    }
});
