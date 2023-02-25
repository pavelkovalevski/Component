;(function(window) {
/* 'use strict'; */

//let id = [];
//let className = [];
//let inner = [];

function ChangeContent(text, image) {
    this.contentDescrText = document.querySelector('.component__text');
    this.contentDescrText.innerHTML = text;
    this.contentDescrImageWrapper = document.querySelector('.component__image');
    this.contentDescrImage = this.contentDescrImageWrapper.querySelector('img');
    this.contentDescrImage.src = image;
};

function CheckElementStatus() {
    this.activeElement = document.querySelector('.slider__el_active');

    if(this.activeElement) {
        this.activeElement.classList.remove('slider__el_active')
    };
};

function TranslateSliderElements(clicked, i) {
    this.root = document.getElementById('component');
    this.listWrapper = document.querySelector('.slider__wrapper');
    this.list = this.root.querySelectorAll('.slider__el');
    this.activeElement = this.root.querySelector('.slider__el_active');
    this.clickedElement = clicked;


    if(this.clickedElement.offsetTop > this.activeElement.offsetTop) {
        h = -(this.activeElement.offsetHeight/2 + 35 + this.clickedElement.offsetHeight/2)
    } else if(this.clickedElement.offsetTop < this.activeElement.offsetTop) {
        h = this.clickedElement.offsetTop + this.clickedElement.offsetHeight
    } else {
        return
    }

    this.list.forEach(item => {
        item.style.transform = `translate(0px, ${h}px)`;
    });

    console.log(this.clickedElement.offsetTop, this.clickedElement.offsetHeight, h);
};

/* function GetData() {
    this.items = document.querySelectorAll('.slider__el');
    this.items.forEach(item => {
        id.push(item.id)
        className.push(item.className)
        inner.push(item.innerHTML)
    });
    console.log(id, className, inner);
}; */

/* function CreateObject(id, className, inner) {
    let objects = []
    let object = {
        id: id,
        className: className,
        inner: inner,
        N: 0,
    }
    for(i = 0; i < id.length; i++) {
        object[i] = {
            id: id[i],
            className: className[i],
            inner: inner[i],
            N: i,
        }
        objects.push(object[i])
    };
    console.log(objects);
}; */

/* function CreateList() {
    this._init();
};

function CreateElement(i) {
    this.id = id[i];
    this.className = className[i];
    this.inner = inner[i];
    this._init();
};

function DeleteList() {
    this._init()
};

CreateList.prototype._init = function() {
    this.root = document.getElementById('component');
    this.sliderList = document.createElement('div');
    this.sliderList.className = 'component__slider slider';
    this.firstElem = this.root.firstChild.nextSibling;
    this.root.insertBefore(this.sliderList, this.firstElem);
};

CreateElement.prototype._init = function() {
    this.root = document.getElementById('component');
    this.sliderList = this.root.querySelector('.component__slider');
    this.sliderElement = document.createElement('div');
    this.sliderElement.id = this.id;
    this.sliderElement.className = this.className;
    this.sliderElement.innerHTML = this.inner;
    this.sliderList.appendChild(this.sliderElement);
}

DeleteList.prototype._init = function() {
    this.root = document.getElementById('component');
    this.sliderList = this.root.querySelector('.component__slider');
    this.sliderList.remove();
} */

//window.GetData = GetData;
//window.CreateObject = CreateObject;
//window.CreateList = CreateList;
//window.CreateElement = CreateElement;
//window.DeleteList = DeleteList;
window.TranslateSliderElements = TranslateSliderElements;
window.ChangeContent = ChangeContent;
window.CheckElementStatus = CheckElementStatus;

}) (window);

;(function() {
    let sliderElements = document.querySelectorAll('.slider__el');

    sliderElements.forEach((item, i) => {
        item.addEventListener('click', () => {
            new TranslateSliderElements(item, i);
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
            
            /* new GetData();
            new DeleteList();
            new CreateList(); */
        });
    });
})();