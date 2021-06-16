// Open side bar
const sideBar = document.querySelector('.side-navbar .container');
const buttonOpenSide = document.querySelector('.open');
buttonOpenSide.addEventListener('click', () => {
    sideBar.classList.toggle('active');
});

// Modal services

const servicesModal = () => {
    const modal = document.querySelector('.modal-alert');
    const barProgress = document.querySelector('.bar');
    barProgress.style.width = '100%';
    let i = 100;
    const timer = setInterval(() => {
        barProgress.style.width = `${i}%`
        i--;
        if (i === 0) {
            modal.style.left = '-200%';
            clearInterval(timer);
        }
    }, 100);
}
servicesModal();


// box Scroll effect

function isVisible(elem) {
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    const elemCenter = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
}
window.onscroll = () => {
    const boxScroll = document.querySelector('#boxScroll');
    if (isVisible(boxScroll)) {
        setInterval(() => {
            boxScroll.scrollTop++;
            if (boxScroll.scrollTop === 800) {
                boxScroll.scrollTop = 0;
            }
        }, 100);
    }
}