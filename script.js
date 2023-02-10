;(function(window) {
/* 'use strict'; */

let elementsNumber = 5;

function ChangeContent(text, image) {
    this.contentDescrText = document.querySelector('.component__text');
    this.contentDescrText.innerHTML = text;
    this.contentDescrImageWrapper = document.querySelector('.component__image');
    this.contentDescrImage = this.contentDescrImageWrapper.querySelector('img');
    this.contentDescrImage.src = image;
    /* this._init(); */
};

function CheckElementStatus() {
    this.activeElement = document.querySelector('.slider__el_active');

    if(this.activeElement) {
        this.activeElement.classList.remove('slider__el_active')
    };
};

/* CreateContent.prototype._init = function() {
    this.content = document.getElementById('slider__content');
    this.contentDescr = document.createElement('div');
    this.contentDescr.className = 'component__descr component__descr_active';
    this.content.appendChild( this.contentDescr );
    //text
    this.contentDescrText = document.createElement('p');
    this.contentDescrText.className = 'component__text';
    this.contentDescrText.innerHTML = this.text;
    this.contentDescr.appendChild( this.contentDescrText );
    //image wrapper
    this.contentDescrImageWrapper = document.createElement('div');
    this.contentDescrImageWrapper.className = 'component__image';
    this.contentDescr.appendChild( this.contentDescrImageWrapper );
    //image
    this.contentDescrImage = document.createElement('img');
    this.contentDescrImage.src = this.image;
    this.contentDescrImageWrapper.appendChild( this.contentDescrImage );
}; */

window.ChangeContent = ChangeContent;
window.CheckElementStatus = CheckElementStatus;

}) (window);

;(function() {
    const sliderElements = document.querySelectorAll('.slider__el');

    sliderElements.forEach(item => {
        item.addEventListener('click', () => {
            new CheckElementStatus();
            if(item.id === 'managment') {
                var content = new ChangeContent('Человек, который с вами всегда на связи, дает простые ответы на сложные вопросы, готовит отчеты и контролирует всю разработку сайта от начала и до конца.', 'img/managment.png');
            } else if(item.id === 'backend') {
                var content = new ChangeContent('Эксперты, которые отвечают за весь внутренний функционал, автоматизацию и эффективность вашего продукта: интеграция верстки и CMS, настройка обмена данными с другими системами.', 'img/backend.png');
            } else if(item.id === 'designer') {
                var content = new ChangeContent('38% пользователей перестанут изучать сайт, если он им покажется непривлекательным. Помимо красоты и впечатлений наши дизайнеры учитывают лучший пользовательский опыт. Ведь какой смысл от красивой кнопки, если эту кнопку не найти.', 'img/QA.png');
            } else if(item.id === 'frontend') {
                var content = new ChangeContent('Реализует все то, что было придумано бизнес-аналитиками и дизайнерами, в работающий инструмент. Всегда учитывают особенности разных браузеров и устройств — от ноутбуков до смартфонов.', 'img/frontend.png');
            } else if(item.id === 'qa') {
                var content = new ChangeContent('Отыщет все возможные ошибки, чтобы вашим пользователям не пришлось с ними столкнуться на уже работающем ресурсе.', 'img/QA.png');
            };
            item.classList.add('slider__el_active');
        });
    });
})();