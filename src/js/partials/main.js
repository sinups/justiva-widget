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
        link.href = 'css/style.css'; 
        // js to prod 
        // link.href = 'https://wdgt.justiva.ru/css/style.css';  
        // Append link element to HTML head 
        head.appendChild(link);  

          
        let html = `@@include('../../templates/btn.html')`;
        let widgetContainer = document.createElement('div');
        widgetContainer.classList.add('widget_container');
        widgetContainer.innerHTML = html;

        document.querySelector('body').appendChild(widgetContainer);
    },

};
jusWidget.injectScripts();



