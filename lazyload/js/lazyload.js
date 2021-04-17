let fig = document.getElementsByClassName("col__fig");
let txt = document.getElementsByClassName("col__txt");
let ey=0;


window.onscroll=function(){

    for(let i=0; i<fig.length;i++){
        ey=fig[i].getBoundingClientRect().top+window.pageYOffset-window.innerHeight;
        if(document.documentElement.scrollTop>ey+200) {
            fig[i].classList.add("slide-l");
            txt[i].classList.add("slide-t");

        }

    }

}