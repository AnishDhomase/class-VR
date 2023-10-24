
const preloader = document.querySelector("#preloader");
const menuBtn = document.querySelector("nav .navBtnDiv i");
const wrapper = document.querySelector("#wrapper");
const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#modal i");
const modalNavs = document.querySelectorAll("#modal div a");

window.addEventListener("load",function(){
    preloader.classList.add("remove");
    wrapper.classList.remove("remove");
    
});


menuBtn.addEventListener("click",function(){
    wrapper.classList.add("remove");
    modal.classList.remove("remove");
});

modalClose.addEventListener("click",function(){
    wrapper.classList.remove("remove");
    modal.classList.add("remove");
})
for(let i=0; i<5; i++){
    modalNavs[i].addEventListener("click",function(){
        wrapper.classList.remove("remove");
        modal.classList.add("remove");
    })
}
