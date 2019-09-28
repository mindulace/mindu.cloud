var xDown = null,
    yDown = null,
    overlay = document.getElementById('overlay'),
    percentage = document.getElementById('percentage');

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

function swipeEffect(diff, color) {
    overlay.style.backgroundColor = color;

    var progress = (Math.abs(diff) / (document.body.clientWidth / 2)) * 100;

    if (progress < 100) {
        overlay.style.opacity = progress / 100;
        percentage.style.width = progress + "%";
    } else {
        overlay.style.opacity = 1;
        percentage.style.width = 100 + '%';
    }
}

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX,
        yUp = evt.touches[0].clientY,
        xDiff = xDown - xUp,
        yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            swipeEffect(xDiff, '#e91e63');
        } else {
            swipeEffect(xDiff, '#ea0000');
        }
    } else {
        if ( yDiff > 0 ) {
            swipeEffect(yDiff, '#0012ea');
        } else { 
            swipeEffect(yDiff, '#04ea00');
        }
    }
};

function resetProgress(evt) {
    percentage.classList.add('revert')
    overlay.removeAttribute('style');
    percentage.removeAttribute('style');
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', resetProgress, false);