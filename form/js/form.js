let tabs=document.getElementsByClassName("tab");
let array = Array.prototype.slice.call(tabs);
let contentArray=document.getElementsByClassName("content");
let isActive=document.getElementsByClassName("is-active");
let isShow=document.getElementsByClassName("is-show");
let i,j,k,l,m,n;
let prev=document.querySelectorAll(".prev");
let next=document.querySelectorAll(".next");
let chk1,chk2,chk3,chk4,chk5;
let change=document.getElementsByClassName("change");
let chk=document.querySelectorAll(".chk");
let t=new Date();
let pyear=t.getFullYear();
let pmonth=t.getMonth()+1;



window.onload=function(){
for(i=0;i<tabs.length;i++) {
    tabs[i].addEventListener("click",tabChange);
    prev[0].style.display="none";

}
function tabChange(){
    isActive[0].classList.remove("is-active");
    this.classList.add("is-active");
    isShow[0].classList.remove("is-show");
    let index = array.indexOf(this);
    contentArray[index].classList.add("is-show");
    if(index!==0&&index<tabs.length) {
        prev[1,2,3].style.display="inline-block";
        next[1,2,3].style.display="inline-block";        
    } else if(index==0) {
        prev[0].style.display="none";
    } else {
        next[5].style.display="none";
    }
}

}

function toNext(ch,s,t,tn) {

    chk[ch].classList.remove("fa-square");
    chk[ch].classList.add("fa-check-square");
    let secName1 = next[s].closest(".content");
    secName1.classList.remove("is-show");
    nextSec=secName1.nextElementSibling;
    nextSec.classList.add("is-show");
    tabs[t].classList.remove("is-active");
    tabs[tn].classList.add("is-active");

}


function toPrev(pre,t1,tp) {
    let secName2 = prev[pre].closest(".content");
    secName2.classList.remove("is-show");
    prevSec=secName2.previousElementSibling;
    prevSec.classList.add("is-show");
    tabs[t1].classList.remove("is-active");
    tabs[tp].classList.add("is-active");
}

function Change(cb) {
    let secName2 = change[cb];
    isActive[0].classList.remove("is-active");
    tabs[cb].classList.add("is-active");
    isShow[0].classList.remove("is-show");
    contentArray[cb].classList.add("is-show");
}




next1=document.getElementById("next1");
next1.onclick=function(){
    let male=document.mem.male.selectedIndex;
    let female=document.mem.female.selectedIndex;
    let child=document.mem.child.selectedIndex;
    let baby=document.mem.baby.selectedIndex;
    let sec01txt=document.getElementById("sec01Tabletd");
    if(male==0&&female==0&&child==0&&baby==0){
        alert("申込人数を入れてください");
    } else if((male==0&&female==0)&&(child!==0||baby!==0)){
        alert("大人の人数を入れてください");}
    else {
    sec01txt.innerHTML="おとな男性："+male+"名、おとな女性："+female+"名、こども："+child+"名、乳幼児："+baby+"名";
    sec01txt.style.color="#333333";
    toNext(0,0,0,1);

}


}
next2=document.getElementById("next2");
next2.onclick=function(){
    let ouroBin=document.getElementsByName("ouro");
    let a,b;
    let sec02txt=document.getElementById("sec02Tabletd");
    for(let j=0; j<ouroBin.length;j++) {
        if(ouroBin[j].checked) {
            a = ouroBin[j].value;
        switch(a) {
            case "ouro1":
            b="【JAL 2803便】札幌／千歳　10:05発　→　青森　10:55着";
            break;
            case "ouro2":
            b="【JAL 2805便】札幌／千歳　13:10発　→　青森　14:05着";
            break;
            default:
            b="【JAL 2809便】札幌／千歳　19:05発　→　青森　20:00着";
            break;
        }
        sec02txt.innerHTML=b;
        sec02txt.style.color="#333333";
        let chk2=document.getElementById("chk2");
        chk2.classList.remove("fa-square");
        chk2.classList.add("fa-check-square");
        toNext(1,1,1,2);

        }
    }

}
prev2=document.getElementById("prev2");
prev2.onclick=function(){
    toPrev(1,1,0);    
}

next3=document.getElementById("next3");
next3.onclick=function(){
    let yado=document.getElementsByName("hotel");
    let a,b;
    let sec03txt=document.getElementById("sec03Tabletd");
    for(let k=0; k<yado.length;k++) {
        if(yado[k].checked) {
            a = yado[k].value;
        switch(a) {
            case "hotel1":
            b="【ダイワロイネットホテル青森】禁煙ツイン／夕食なし、朝食あり／追加料金　＋1,000円";
            break;
            case "hotel2":
            b="【ホテル　サンルート青森】禁煙ツイン／夕食なし、朝食あり／追加料金なし";
            break;
            default:
            b="【アートホテル弘前シティ】禁煙ツイン／夕食なし、朝食あり／追加料金　＋1,500円";
            break;
        }
        sec03txt.innerHTML=b;
        sec03txt.style.color="#333333";
        let chk3=document.getElementById("chk3");
        chk3.classList.remove("fa-square");
        chk3.classList.add("fa-check-square");
        toNext(2,2,2,3);

        }
    }

}
prev3=document.getElementById("prev3");
prev3.onclick=function(){
    toPrev(2,2,1);    
}
next4=document.getElementById("next4");
next4.onclick=function(){
    let fukuroBin=document.getElementsByName("fukuro");
    let a,b;
    let sec04txt=document.getElementById("sec04Tabletd");
    for(let l=0; l<fukuroBin.length;l++) {
        if(fukuroBin[l].checked) {
            a = fukuroBin[l].value;
        switch(a) {
            case "fukuro1":
            b="【JAL 2804便】青森　11:30発　→　札幌／千歳　12:20着";
            break;
            case "fukuro2":
            b="【JAL 2806便】青森　14:35発　→　札幌／千歳　15:25着";
            break;
            default:
            b="【JAL 2810便】青森　20:30発　→　札幌／千歳　21:15着";
            break;
        }
        sec04txt.innerHTML=b;
        sec04txt.style.color="#333333";
        let chk4=document.getElementById("chk4");
        chk4.classList.remove("fa-square");
        chk4.classList.add("fa-check-square");
        toNext(3,3,3,4);

        }
    }

}
prev4=document.getElementById("prev4");
prev4.onclick=function(){
    toPrev(3,3,2);    
}
next5=document.getElementById("next5");
next5.onclick=function(){
    let card=document.pay.card;
    let num1=card.selectedIndex;
    let c=card.options[num1].value;
    let bango=document.getElementById("text").value;
    bango1=bango.slice(-4);
    let month=document.pay.month;
    let num2=month.selectedIndex;
    let m=Number(month.options[num2].value);
    let year=document.pay.year;
    let num3=year.selectedIndex;
    let y=Number(year.options[num3].value);
    let sec05txt=document.getElementById("sec05Tabletd");
    let regex=/^([0-9]{14,16})$/;
    if(!regex.test(bango)){
        alert("カード番号に不備があります");
    }
    else if(y==pyear&&m<pmonth){
        alert("カードの有効期限が過ぎています");

    }
    else{

    sec05txt.innerHTML="カードの種類："+c+"／カード番号：xxxx-xxxx-"+bango1+"／有効期限："+y+"年"+m+"月"+"／支払い回数：1回";
    sec05txt.style.color="#333333";
    let chk5=document.getElementById("chk5");
    chk5.classList.remove("fa-square");
    chk5.classList.add("fa-check-square");
    toNext(4,4,4,5);
}

}
prev5=document.getElementById("prev5");
prev5.onclick=function(){
    toPrev(4,4,3);    
}


change[0].onclick=function(){
    Change(0);    
};
change[1].onclick=function(){
    Change(1);    
};
change[2].onclick=function(){
    Change(2);    
};
change[3].onclick=function(){
    Change(3);    
};
change[4].onclick=function(){
    Change(4);    
};

apply=document.getElementById("apply");
apply.onclick=function() {
    let c1=document.getElementById("sec01Tabletd");
    let c2=document.getElementById("sec02Tabletd");
    let c3=document.getElementById("sec03Tabletd");
    let c4=document.getElementById("sec04Tabletd");
    let c5=document.getElementById("sec05Tabletd");
    let cnt=0;
    let check=[c1,c2,c3,c4,c5];

    for(r=0;r<check.length;r++) {
        if(check[r].textContent=="未選択"){
            check[r].style.color="#d13262";
            cnt++;
        }
        
    }
    if(cnt!==0) {
        alert("未選択項目があります");
    } else {
        alert("お申込みありがとうございました！　良い旅を♪");
    }

}


