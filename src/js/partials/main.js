"use strict";
var arContactUs = {
    init: function(){
        
        //Function to fix time closed  widget 
            var secunds = true;
           
            function onClickClose() {  
                if (secunds === true) {
                    setTimeout(function(){ 
                        widget_toggle();
                        secunds  = false;
                        console.log('30 secunds',secunds);
                    }, 3000);
                }
                
            }
        // Create function for change classes
        function widget_toggle(e) {
            document.querySelector('#arcontactus-widget .messangers-block').classList.toggle('show-messageners-block');
            // document.querySelector('#arcontactus-widget .static').classList.toggle('hide');
            // document.querySelector('#arcontactus-widget .arcontactus-close').classList.toggle('show-messageners-block');`
            document.querySelector('.widget_container').classList.toggle('show');

        }
        document.querySelector("#arcontactus-widget .arcontactus-message-button").addEventListener("click", (e) => {

            widget_toggle();
            e.preventDefault();
        });

        // Close btn X
        document.querySelector("#arcontactus-widget .close_widget").addEventListener("click", (e) => {
            widget_toggle();
            onClickClose();
            e.preventDefault();
            
        });

       // close by link btn
        document.querySelector("#arcontactus-widget .close-widget").addEventListener("click", (e) => {

            widget_toggle();
            onClickClose();
            e.preventDefault();

        });
        // Close by click on document
        var specifiedElement = document.querySelector(".arcontactus-message");
        document.addEventListener('click', function(event) {
          var isClickInside = specifiedElement.contains(event.target);
          if (!isClickInside) {
            widget_toggle();
          }
        });



       
            var fivesec = true;
            setTimeout(function(){ 
                if (fivesec === true && !document.querySelector('.messangers-block').classList.contains('show-messageners-block')) {
                    widget_toggle();
                    console.log('5 secunds open if not click before', fivesec);
                    fivesec  = false;
                } 
            }, 5000);
        

            
      

        document.querySelector('#arcontactus-widget').classList.add('active');
        
    }
};
window.addEventListener('load', function(){
    arContactUs.init();
});