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
