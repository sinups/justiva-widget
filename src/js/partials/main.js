"use strict";

let jusWidget = {
    open: null,
    countdown: null,
    openInterval: null,
    openOnLoadInterval: null,
    userAction:null,
    init: function(){

        console.log('open:',jusWidget.open);
        console.log('openInterval:',jusWidget.openInterval);
        console.log('openOnLoadInterval:', jusWidget.openOnLoadInterval)
        console.log('userAction:', jusWidget.userAction)
    
        // runs every {openInterval} sec and runs on init.
        function loopOpen() {
            if (jusWidget.open === false) {
                changeState ();
                console.log('evry 40sec')
            }
            
        }
        setInterval(loopOpen, jusWidget.openInterval);

        setTimeout(function(){ 
            if (jusWidget.open === false && jusWidget.userAction === false) {
                changeState ();
                console.log('5 sec')
            }
        }, jusWidget.openOnLoadInterval);

        // runs every {openInterval} sec and runs on init.
        
        //Change widget state
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
            // First tuch widget from user
            jusWidget.userAction = true;
            console.log('User tuch widget:', jusWidget.userAction)

        }

        // Close btn X
        document.querySelector("#arcontactus-widget .close_widget").addEventListener("click", (e) => {
            changeState ();
        });
        // close by link btn
        document.querySelector("#arcontactus-widget .close-widget").addEventListener("click", (e) => {
            changeState ();
        });
        // Click on widget btn
        document.querySelector("#arcontactus-widget .arcontactus-message-button").addEventListener("click", () => {
            changeState();
        });

        document.querySelector('#arcontactus-widget').classList.add('active');
    }
};
window.addEventListener('load', function(){
    jusWidget.open = false;
    jusWidget.openInterval = 30000;
    jusWidget.openOnLoadInterval = 5000;
    jusWidget.userAction = false;
    jusWidget.init();
});
