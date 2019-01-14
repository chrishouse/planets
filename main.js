const panel = document.querySelectorAll('.panel');

function showPanel() {    
    if (this.classList.contains('panel-active')) {
        this.classList.remove('panel-active'); 
    } else {
        panel.forEach(panel => panel.classList.remove('panel-active'));
        this.classList.add('panel-active');
    }
}

function showName(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('panel-open-active');
    }
}

panel.forEach(panel => panel.addEventListener('click', showPanel));
panel.forEach(panel => panel.addEventListener('transitionend', showName));
