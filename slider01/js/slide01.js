$(function(){

function imgSlider(target){
let items = target.find("#imgList li"); 
let con = $("#control li");
let nav=$("#control li div");
let navNo=$(".navNo");
let current = 0;
let current1 = 1; 
let timeId;


function open(){
stopAuto();
$(items[current]).css("left",0);
$(navNo[current]).css("color","rgb(44, 43, 43)");
$(nav[current]).css("border-color","rgb(44, 43, 43)");
if ((current==1)||(current==3)) {
for(let i=0;i<navNo.length;i++){
$(navNo[i]).css("color","rgb(255,255,255)");
$(nav[i]).css("border-color","rgb(79,53,24)");
if(current==3){
$(nav[i]).css("border-color","rgb(132,5,8)");	
}
} 
}
else {
for(let j=0;j<navNo.length;j++){
$(navNo[j]).css("color","rgb(44, 43, 43)");
};
};

$(items[current]).animate({"left":"-20%"},{duration:7400,easing:"linear",queue:false});
$(nav[current]).addClass("navslide");
$(items[current]).fadeIn(1200,"easeInQuad",startAuto); 

};


function startAuto(){
	timeId = setTimeout(change, 5000);
};
function stopAuto(){
	clearTimeout(timeId);
};

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
}


function close(){
$(nav[current]).removeClass("navslide");
$(items[current]).fadeOut(1000, "easeOutQuad");
current1=current;	
setTimeout(function(){
	$(items[current1]).stop();
	$(items[current1]).css("left",0);
},1200)	;	
};


function change(){
close();

current = ++current % items.length;
open();
	
};

init();
open();

};

imgSlider($("#imgBox"));

});