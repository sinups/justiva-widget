//Цели для Яндекс.Метрики
let yandexTargets = {
    ya_widgetClosePress:true,
    ya_notnowPress:true,
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
    jusWidget.openOnLoadInterval = 5000;
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
                console.log('5 sec')
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
        });
        // При клике на самом виджет
        document.querySelector("#arcontactus-widget .arcontactus-message-button").addEventListener("click", () => {
            changeState();
        });

        document.querySelector('#arcontactus-widget').classList.add('active');
    }
};
;
