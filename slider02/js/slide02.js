$(function(){

    function imgChange(target){
        
        let items=target.find("#imglist li img");
        $(items).css({transform: "scale(1) translate(-50%,-50%)"});
        let con=$("#control li");
        $(con).html("●");
        let current=0;
        let timeId;


        function open(){
            stopAuto();
            $(con[current]).css("color","rgb(255,255,255)");
            $(items[current]).fadeIn(800,"easeInQuad",startAuto);
            
        };
        function startAuto(){
            timeId = setTimeout(change, 5000);
        };
        function stopAuto(){
            clearTimeout(timeId);
        };

        function clickCon(num){
                if(current!=num){
                    close();
                    current=num;		
                    open();
                }
            }

            
        $(con).each(function(index){
            con[index]=$(this);
            $(this).on({
                "click":function(){
                    clickCon(index);
                }
            })
        });

        function close(){
            $(con[current]).css("color","rgba(255,255,255,0.3)");            
            $(items[current]).fadeOut(800,"easeOutQuad");

        }

        function change(){
            close();

            current=++current%items.length;
            open();
        }
        open();

    };



    imgChange($("#imgBox"));


});