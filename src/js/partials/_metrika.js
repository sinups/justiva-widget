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
