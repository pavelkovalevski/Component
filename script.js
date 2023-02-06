const sliderElements = document.querySelectorAll('.slider__el');
const content = document.querySelectorAll('.component__descr');

//content change
sliderElements.forEach((item, i )=> {
    item.addEventListener('click', () => {
        changeContent(item, i);
        translate();
    });
});

function changeContent(item, i) {
    if(item.classList.contains('slider__el_active')) {
        return
    } else {
        let activeElement = document.querySelector('.slider__el_active');
        let activeContent = document.querySelector('.component__descr_active');

        if(activeElement) {
            formerActiveElement = activeElement;
            activeElement.classList.remove('slider__el_active')
        };
        if(activeContent) {
            activeContent.classList.remove('component__descr_active')
        };

        item.classList.add('slider__el_active');
        content[i].classList.add('component__descr_active');
    };
};

function translate() {
    let activeElement = document.querySelector('.slider__el_active');

    sliderElements.forEach ((item, i) => {

        item.style.transform = 'translateY(' + activeElement.offsetHeight + 'px)';

    });
};