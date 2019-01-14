const panel = document.querySelectorAll('.panel');

function showPanel() {
    panel.forEach(panel => panel.classList.remove('panel-active'));
    this.classList.toggle('panel-active');
}

function showName(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('panel-open-active');
    }
}

panel.forEach(panel => panel.addEventListener('click', showPanel));
panel.forEach(panel => panel.addEventListener('transitionend', showName));
