var xDown       = null,
    yDown       = null,
    overlay     = document.getElementById('overlay'),
    percentage  = document.getElementById('percentage');

// COLOR SETTINGS
var colorLeft   = '#A2FF00',
    colorRight  = '#800000',
    colorUp     = '#800000',
    colorDown   = '#800000';

// LINK SETTINGS
var linkLeft    = '/greeno',
    linkRight   = null,
    linkUp      = null,
    linkDown    = null;

function removeClassFromBar() {
    percentage.classList.remove('revert');
}


function getTouches(evt) {
  return evt.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0]
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;

    removeClassFromBar();
};

function handleMouseClick(evt) {
    xDown = evt.offsetX;
    yDown = evt.offsetY;
}

function openLocation(link) {
    if (!!link) {
        document.removeEventListener('touchmove', handleTouchMove, false);

        // window.navigator.vibrate(200);
        window.open(link, '_self', "", false);
    }
}

function swipeEffect(diff, color, link) {
    overlay.style.backgroundColor = color;

    var progress = (Math.abs(diff) / (document.body.clientWidth / 2)) * 100;

    if (progress <= 100) {
        overlay.style.opacity   = progress / 100;
        percentage.style.width  = progress + "%";
    } else {
        overlay.style.opacity   = 1;
        percentage.style.width  = 100 + '%';

        openLocation(link);
    }
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp     = evt.touches[0].clientX,
        yUp     = evt.touches[0].clientY,
        xDiff   = xDown - xUp,
        yDiff   = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            // LEFT
            swipeEffect(xDiff, colorLeft, linkLeft);
        } else {
            // RIGHT
            swipeEffect(xDiff, colorRight, linkRight);
        }
    } else {
        if (yDiff > 0) {
            // UP
            swipeEffect(yDiff, colorUp, linkUp);
        } else { 
            // DOWN
            swipeEffect(yDiff, colorDown, linkDown);
        }
    }
};

function handleMouseMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp     = evt.clientX,
        yUp     = evt.clientY,
        xDiff   = xDown - xUp,
        yDiff   = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            // LEFT
            swipeEffect(xDiff, colorLeft, linkLeft);
        } else {
            // RIGHT
            swipeEffect(xDiff, colorRight, linkRight);
        }
    } else {
        if (yDiff > 0) {
            // UP
            swipeEffect(yDiff, colorUp, linkUp);
        } else { 
            // DOWN
            swipeEffect(yDiff, colorDown, linkDown);
        }
    }
};

function stopSwipe(evt) {
    percentage.classList.add('revert')

    overlay.removeAttribute('style');
    percentage.removeAttribute('style');
}

// TOUCH
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', stopSwipe, false);

// CLICK – deactivated
// document.addEventListener('mousedown', handleMouseClick, false);
// document.addEventListener('mousemove', handleMouseMove, false);
// document.addEventListener('mouseup', stopSwipe, false);