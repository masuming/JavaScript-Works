$(function(){

    function pageSlider(target){
        let picBox=target.find(".picbox ul li");
        let txtBox=target.find(".msgbox ul li");
        let row=$(".row");
        let timeId;
        let isOver=false;
        let backimg = $(".back__pic");
        let con=$("#control li");
        $(con).html("●");
        $(con).css("color","rgba(92, 88, 85, 0.3)");
        current=0;
        current1=1;




function open() {
    stopAuto();
    
    $(backimg).css("background-image","url(images/slide"+[current]+".jpg");
    $(picBox[current]).css("opacity","1");
    $(txtBox[current]).css("opacity","1");
    $(picBox[current]).css("zIndex","10");
    $(txtBox[current]).css("zIndex","10");
    $(picBox[current]).css("left","-100%");    
    $(picBox[current]).css("display","block");
    $(txtBox[current]).css("left","auto");  
    $(txtBox[current]).css("right","-100%");     
    $(txtBox[current]).css("display","block");
    $(picBox[current]).animate({"left":"0"},{duration:500,easing:"linear",queue:false});
    $(txtBox[current]).animate({"right":"0"},{duration:500,easing:"linear",queue:false});
    $(backimg).animate({"opacity":"0.1"},{duration:1200,queue:false});
    $(con[current]).css("color","rgb(92, 88, 85)");
    $(picBox[current]).fadeIn(1000,"linear",function() {
        complete();
    });

}

function close(){
    $(con[current]).css("color","rgba(92, 88, 85,0.3)");
    $(backimg).css({"opacity":"0"},{duration:1200,queue:false});
    $(picBox[current]).css("zIndex","0");
    $(txtBox[current]).css("zIndex","0");
    $(picBox[current]).animate({"opacity":"0"},{duration:1200,queue:false});
    $(txtBox[current]).animate({"opacity":"0"},{duration:1200,queue:false});

};
function complete(){
    if(!isOver) startAuto();
}

function startAuto(){
    timeId=setTimeout(change,3800);
}
function stopAuto(){
    clearTimeout(timeId);
}

function change(){
    close();

    current=++current%picBox.length;
    open();
}
function clickCon(num){
	if(current != num){
		close();
		current = num;			
		open();
	};
};

function init(){
    $(con).each(function(index){
		con[index]=$(this);
		$(this).on({
			"click":function(){
				clickCon(index);
			}
		})
	})
    $(row).on({"mouseenter":function(){
        isOver=true;
        stopAuto();
    },
    "mouseleave":function(){
    isOver=false;
    startAuto();

}})    
}
init();
open();

}
pageSlider($("#slide"));
})