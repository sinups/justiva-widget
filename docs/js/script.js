/**
 * Параметры по умолчанию для нашего приложения
 * @open Начальное состояние виджета открыт/закрыт.
 * @openInterval Через сколько должен открываться виджет После загрузки страницы.
 * @openOnLoadInterval открываем в указанном промежутке.
 * @userAction Фиксируем 1 Клик который сделал пользователь на виджете.
 * init() инициализируем функцию при загрузке страницы.
 */

window.addEventListener('load', function(){
    jusWidget.open = false;
    jusWidget.openInterval = 40000;
    jusWidget.openOnLoadInterval = 15000;
    jusWidget.userAction = false;
    jusWidget.init();
    document.querySelector('#arcontactus-widget').classList.add('active');
});

let jusWidget = {
    open: null,
    countdown: null,
    openInterval: null,
    openOnLoadInterval: null,
    userAction:null,
    init: function(){
        //Только для тестирования
        // console.log('----- Initial State -----');
        // console.log('open:',jusWidget.open);
        // console.log('openInterval:',jusWidget.openInterval);
        // console.log('openOnLoadInterval:', jusWidget.openOnLoadInterval)
        // console.log('userAction:', jusWidget.userAction)
        // console.log('----- Initial State -----');
        // console.log('init time:',new Date().getSeconds())
        //Только для тестирования

        //открываем в указанном промежутке
        function loopOpen() {
            if (jusWidget.open === false) {
                changeState ();
                // console.log('every 40sec',new Date().getSeconds())
            }
        }
        var settIntervel = setInterval(loopOpen, jusWidget.openInterval);

        //Через сколько должен открываться виджет После загрузки страницы.
        setTimeout(function(){ 
            if (jusWidget.open === false && jusWidget.userAction === false) {
                changeState ();
                // console.log('15 sec',new Date().getSeconds())
            }
        }, jusWidget.openOnLoadInterval);

        
        //Меняем состояние нашего приложения
        function changeState () {
            jusWidget.open = !jusWidget.open;
            // console.log('open and chenge state:',jusWidget.open + ' time:',new Date().getSeconds());
            if (jusWidget.open === true) {
                document.querySelector('#arcontactus-widget .messangers-block').classList.add('show-messageners-block');
                document.querySelector('.widget_container').classList.add('show_widget');
            } else {
                document.querySelector('#arcontactus-widget .messangers-block').classList.remove('show-messageners-block');
                document.querySelector('.widget_container').classList.remove('show_widget');
                
            }
            clearTimeout(settIntervel);
            settIntervel = setInterval(loopOpen, jusWidget.openInterval);
            //Фиксируем 1 Клик который сделал пользователь на виджете.
            jusWidget.userAction = true;
        }

        // закрываем при клике на крестик
        document.querySelector("#arcontactus-widget .close_widget").addEventListener("click", (e) => {
            changeState ();
            //Яндекс.Метрикa: Нажали на “Закрыть виджет”
            sendGoal('ya_widgetClosePress', 'widgetClosePress')
        });
        // закрываем при клике на текст 'не сейчас'
        document.querySelector("#arcontactus-widget .close-widget").addEventListener("click", (e) => {
            changeState ();
            //Яндекс.Метрикa:Нажали в виджете на “Не сейчас”
            sendGoal('ya_notnowPress', 'notnowPress')

            e.preventDefault();
        });
        // При клике на самом виджет
        document.querySelector("#arcontactus-widget .arcontactus-message-button").addEventListener("click", () => {
            changeState();
            //Яндекс.Метрикa:Нажали в виджете на “открыть чат"
            sendGoal('ya_openPress', 'openPress')

            //Яндекс.Метрикa:Нажали в виджете на “закрыть чат”
            if (jusWidget.open === false) {
                sendGoal('ya_closePress', 'closePress')
            }
            
        });

       
    },
    injectScripts: function() {
        // Get HTML head element 
        var head = document.querySelector('head');  
        // Create new link Element 
        var link = document.createElement('link'); 
        // set the attributes for link element  
        link.rel = 'stylesheet';  
        link.type = 'text/css'; 
        link.href = 'https://wdgt.justiva.ru/css/style.css';  
        // Append link element to HTML head 
        head.appendChild(link);  

          
        let html = `<div class="arcontactus-message" id="arcontactus-widget" >

    <div class="messangers-block" style="opacity: 0;">
        <div class="close_widget">
            <svg width="12" height="13" viewBox="0 0 12 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                <g id="Canvas" transform="translate(-829 -1155)">
                    <g id="Shape">
                        <use xlink:href="#path0_fill" transform="matrix(0.707107 0.707107 -0.707107 0.707107 835 1151.52)" fill="#FFFFFF" />
                    </g>
                </g>
                <defs>
                    <path id="path0_fill" fill-rule="evenodd" d="M 14 6L 8 6L 8 0L 6 0L 6 6L 0 6L 0 8L 6 8L 6 14L 8 14L 8 8L 14 8L 14 6Z" />
                </defs>
            </svg>

        </div>
        <div class="widget__box">

            <div class="justiva__widge__avatar">
                <img src="img/Bitmap.jpg" alt="">
                        </div>


                <div class="widget__dialog">
                    <div class="widget__breadcrumbs">
                        <ul>
                            <li class="consultant__name">Виктория</li>
                            <li class="consultant__status">Дежурный юрист из Юстива</li>
                        </ul>
                    </div>
                    <p>
                        Здравствуйте. <br>
                        Возможно вам нужна помощь <br>
                        юриста? Давайте я вам помогу
                    </p>
                </div>

            </div>
            <div class="widget__links">
                <a href="https://justiva.ru/how-to/online-consultation" target="_blank" class="juw-how-works">Как это работает?</a>
                <a href="javascript:void(0);" class="close-widget">Не сейчас</a>
                <a href="https://justiva.ru/questions/ask" target="_blank" class="juw-help-jurist">Да, нужна помощь юриста</a>
            </div>
        </div>

        <div class="arcontactus-message-button">

            <div class="static">
                <!-- <img src="img/mes.png" alt=""> -->
                <svg width="28" height="28" viewBox="0 0 28 28"  xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path d="M14 27H1V14C1 6.81967 6.81967 1 14 1C21.1803 1 27 6.81967 27 14C27 21.1803 21.1803 27 14 27Z" stroke="white"/>
                    <path d="M9 15C8.448 15 8 14.553 8 14C8 13.447 8.448 13 9 13C9.552 13 10 13.447 10 14C10 14.553 9.552 15 9 15Z" fill="white"/>
                    <path d="M14 15C13.448 15 13 14.553 13 14C13 13.447 13.448 13 14 13C14.552 13 15 13.447 15 14C15 14.553 14.552 15 14 15Z" fill="white"/>
                    <path d="M19 15C18.448 15 18 14.553 18 14C18 13.447 18.448 13 19 13C19.552 13 20 13.447 20 14C20 14.553 19.552 15 19 15Z" fill="white"/>
                </svg>
            </div>

            <!-- <div class="arcontactus-close">
                        <img src="./img/close.svg" alt="Close">
                    </div> -->
            <div class="pulsation"></div>

        </div>

    </div>
`;
        let widgetContainer = document.createElement('div');
        widgetContainer.classList.add('widget_container');
        widgetContainer.innerHTML = html;

        document.querySelector('body').appendChild(widgetContainer);
    },

};
jusWidget.injectScripts();



;
//Цели для Яндекс.Метрики
let yandexTargets = {
    ya_widgetClosePress:true,
    ya_textPress:true,
    ya_notnowPress:true,
    ya_needhelpPress:true,
    ya_openPress:true,
    ya_closePress:true,
    ya_namePress:true,
    ya_logoPress:true,
    ya_howitworksPress:true,
    ya_widgetCloseOver:true,
    ya_textOver:true,
    ya_notnowOver:true,
    ya_needhelpOver:true,
    ya_openOver:true,
    ya_blockOver:true,
    ya_logoOver:true,
    ya_howitworksOver:true,
};
//Нажали на “Закрыть виджет”
function sendGoal(goalStatus, goalName) {
    if (yandexTargets[goalStatus]) {
        yandexTargets[goalStatus] = false;
        try {
            window["yaCounter" + 55903738].reachGoal(goalName)
        } catch (e) {
        }
    }
}

//Яндекс.Метрикa: Нажали в виджете на “Не сейчас”
document.querySelector("#arcontactus-widget .close-widget").addEventListener("click", () => {
    sendGoal('ya_notnowPress', 'notnowPress')
});

//Яндекс.Метрикa: Нажали в виджете на текст юриста
document.querySelector(".widget__dialog p").addEventListener("click", () => {
    sendGoal('ya_textPress', 'textPress')
});

//Яндекс.Метрикa: Нажали в виджете на “Нужна помощь юриста”
document.querySelector("#arcontactus-widget .juw-help-jurist").addEventListener("click", () => {
    sendGoal('ya_needhelpPress', 'needhelpPress')
});
//Яндекс.Метрикa: Нажали в виджете на имя юриста
document.querySelector("#arcontactus-widget .consultant__name").addEventListener("click", () => {
    sendGoal('ya_namePress', 'namePress')
});

//Яндекс.Метрикa: Нажали в виджете на лого юриста
document.querySelector("#arcontactus-widget .justiva__widge__avatar").addEventListener("click", () => {
    sendGoal('ya_logoPress', 'logoPress')
});

//Яндекс.Метрикa: Нажали в виджете на “Как это работает”
document.querySelector("#arcontactus-widget .juw-how-works").addEventListener("click", () => {
    sendGoal('ya_howitworksPress', 'howitworksPress')
});

//mouseover
//Яндекс.Метрикa: Навели на “Закрыть виджет”
document.querySelector("#arcontactus-widget .close_widget").addEventListener("mouseover", () => {
    sendGoal('ya_widgetCloseOver', 'widgetCloseOver')
});

//Яндекс.Метрикa: Навели на “Закрыть виджет”
document.querySelector("#arcontactus-widget .close-widget").addEventListener("mouseover", () => {
    sendGoal('ya_notnowOver', 'notnowOver')
});

//Яндекс.Метрикa: Навели в виджете на текст юриста
document.querySelector(".widget__dialog p").addEventListener("mouseover", () => {
    sendGoal('ya_textOver', 'textOver')
});

//Яндекс.Метрикa: Навели в виджете на “Нужна помощь юриста”
document.querySelector("#arcontactus-widget .juw-help-jurist").addEventListener("mouseover", () => {
    sendGoal('ya_needhelpOver', 'needhelpOver')
});

//Яндекс.Метрикa: Навели в виджете на “открыть чат”
document.querySelector("#arcontactus-widget .arcontactus-message-button").addEventListener("mouseover", () => {
    sendGoal('ya_openOver', 'openOver')
});

//Яндекс.Метрикa: Навели на весь блок виджета
document.querySelector("#arcontactus-widget .messangers-block").addEventListener("mouseover", () => {
    sendGoal('ya_blockOver', 'blockOver')
});

//Яндекс.Метрикa: Навели на лого юриста
document.querySelector("#arcontactus-widget .justiva__widge__avatar").addEventListener("mouseover", () => {
    sendGoal('ya_logoOver', 'logoOver')
});

//Яндекс.Метрикa: Навели в виджете на “Как это работает”
document.querySelector("#arcontactus-widget .juw-how-works").addEventListener("mouseover", () => {
    sendGoal('ya_howitworksOver', 'howitworksOver')
});
;