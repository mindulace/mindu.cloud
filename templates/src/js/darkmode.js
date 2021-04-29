let html_object = document.getElementsByTagName("html")[0],
    time = null;
    window.circle = document.getElementById("circle");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html_object.classList.add('dark');
}

html_object.addEventListener('mousedown', startProcess, {passive: true});

html_object.addEventListener('mouseup', stopProcess, {passive: true});

html_object.addEventListener('touchstart', startProcess, {passive: true});

html_object.addEventListener('touchend', stopProcess, {passive: true});

window.circle.addEventListener('webkitAnimationEnd', removeAnimation, {passive: true});

function startProcess (e) {
    // e.preventDefault();
    // e.stopImmediatePropagation();

    // window.circle.style.webkitAnimationName = "";

    window.timer = setTimeout(function() {
        e.target.classList.toggle('dark');

        if (e.type == 'touchstart' || e.type == 'touchend') {
            var touch = e.touches[0] || e.changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
        } else if (e.type == 'mousedown' || e.type == 'mouseup') {
            x = e.clientX;
            y = e.clientY;
        }

        window.circle.style.top = y - (window.circle.offsetWidth / 2) + "px";
        window.circle.style.left = x - (window.circle.offsetHeight / 2) + "px";
        window.circle.style.webkitAnimationName = 'ripple';
    }, 500)
}

function stopProcess (e) {
    // e.preventDefault();

    clearTimeout(window.timer);
}

function removeAnimation (e) {
    // e.preventDefault();

    this.style.webkitAnimationName = '';
}