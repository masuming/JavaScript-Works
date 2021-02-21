$(function(){
    
    let roulette=$("#roulette__img");
    let mawasu=$("#mawasu");
    let rClear=$("#rclear");
    let result=$("#result");
    let rRotate;
    let flag=false;
    
    $(mawasu).css("opacity",1).css("filter","grayscale(0)");
    $(rClear).css("opacity",0.5).css("filter","grayscale(0.9)").css("cursor","auto");
    $(rClear).on("mouseover",function(){
        $(rClear).css({transform: "scale(0.9)"});
    });

    $(mawasu).on("click",function(){

        $(mawasu).css({transform: "scale(0.9)"});
        $(mawasu).css("opacity",0.5).css("filter","grayscale(0.9)").css("cursor","auto");

        if(flag==false){    
            rRotate=Math.random();
            rRotate=Math.floor(rRotate*10+1)*36+720;
            $(roulette).css({transition: "3s"});
            $(roulette).css({transform: "rotate("+rRotate+"deg)"});
            $(mawasu).on("mouseover",function(){
                $(mawasu).css({transform: "scale(0.9)"});
            });

            setTimeout(function(){
                $(result).css("display","block");
                if(rRotate<=756){
                $(result).css("background-image","url(images/go_02.png)");
                } else if(rRotate<=792){
                    $(result).css("background-image","url(images/go_01.png)");
                } else if(rRotate<=828){
                    $(result).css("background-image","url(images/go_10.png)");
                } else if(rRotate<=864){
                    $(result).css("background-image","url(images/go_09.png)");
                } else if(rRotate<=900){
                    $(result).css("background-image","url(images/go_08.png)");
                } else if(rRotate<=936){
                    $(result).css("background-image","url(images/go_07.png)");
                } else if(rRotate<=972){
                    $(result).css("background-image","url(images/go_06.png)");
                } else if(rRotate<=1008){
                    $(result).css("background-image","url(images/go_05.png)");
                } else if(rRotate<=1044){
                    $(result).css("background-image","url(images/go_04.png)");
                } else {
                    $(result).css("background-image","url(images/go_03.png)");
                }
            },4000);
     
            setTimeout(function(){
                $(result).css("display","none");  
                flag=true;
                $(rClear).css("opacity",1).css("filter","grayscale(0)").css("cursor","pointer");
                $(rClear).on("mouseover",function(){
                    $(rClear).css({transform: "scale(1)"});
                });
                $(rClear).on("mouseout",function(){
                    $(rClear).css({transform: "scale(0.9)"});
                });
            },6500);
        }
    });
    
    $(rClear).click(function(){
        if(flag==true){
            $(roulette).css({transform: "rotate(0deg)"});
            $(roulette).css({transition: "0s"});
            $(mawasu).css("opacity",1).css("filter","grayscale(0)").css("cursor","pointer");
            $(mawasu).on("mouseover",function(){
                $(mawasu).css({transform: "scale(1)"});
            });
            $(mawasu).on("mouseout",function(){
                $(mawasu).css({transform: "scale(0.9)"});
            });           
            $(rClear).css("opacity",0.5).css("filter","grayscale(0.9)").css("cursor","auto").css({transform: "scale(0.9)"});
            flag=false;
            console.log(flag);
        }
    });


})