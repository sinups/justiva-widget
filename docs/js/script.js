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

//Яндекс.Метрикa: Нажали в виджете на “Не сейчас”
document.querySelector(".widget__dialog p").addEventListener("click", () => {
    sendGoal('ya_textPress', ' textPress')
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
});

let jusWidget = {
    open: null,
    countdown: null,
    openInterval: null,
    openOnLoadInterval: null,
    userAction:null,
    init: function(){
        //Только для тестирования
        console.log('----- Initial State -----');
        console.log('open:',jusWidget.open);
        console.log('openInterval:',jusWidget.openInterval);
        console.log('openOnLoadInterval:', jusWidget.openOnLoadInterval)
        console.log('userAction:', jusWidget.userAction)
        console.log('----- Initial State -----');
        //Только для тестирования

        //открываем в указанном промежутке
        function loopOpen() {
            if (jusWidget.open === false) {
                changeState ();
                console.log('every 40sec')
            }
            
        }
        setInterval(loopOpen, jusWidget.openInterval);

        //Через сколько должен открываться виджет После загрузки страницы.
        setTimeout(function(){ 
            if (jusWidget.open === false && jusWidget.userAction === false) {
                changeState ();
                console.log('15 sec')
            }
        }, jusWidget.openOnLoadInterval);

        
        //Меняем состояние нашего приложения
        function changeState () {
            jusWidget.open = !jusWidget.open;
            console.log('open:',jusWidget.open);
            if (jusWidget.open === true) {
                document.querySelector('#arcontactus-widget .messangers-block').classList.add('show-messageners-block');
                document.querySelector('.widget_container').classList.add('show_widget');
            } else {
                document.querySelector('#arcontactus-widget .messangers-block').classList.remove('show-messageners-block');
                document.querySelector('.widget_container').classList.remove('show_widget');
            }
            clearTimeout(loopOpen);

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

        document.querySelector('#arcontactus-widget').classList.add('active');
    }
};

;
