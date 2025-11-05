let btndark = document.querySelector("#btndark")
let btnlight = document.querySelector("#btnlight")
let btnclassic = document.querySelector("#btnclassic")

btndark.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1190')"
})
btnlight.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')"
})
btnclassic.addEventListener("click", function () {
    document.body.style.backgroundImage = " url('https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331')"
})
let title = document.querySelector("#title")
let text = document.querySelector("#textarea")

let btnsave = document.querySelector("#btnsave")
btnsave.addEventListener("click", function () {
    localStorage.setItem("titleval", title.value)
    localStorage.setItem("textarea", text.value)
})
window.addEventListener("load", function(){
    let savedtitle = localStorage.getItem("titleval")
    let savedtext = localStorage.getItem("textarea")

    if(savedtitle !== null){
        title.value = savedtitle
    }
    if(savedtext !== null){
        text.value = savedtext
    }

})
let btndelete = document.querySelector("#btndelete")
btndelete.addEventListener("click", function(){
    localStorage.removeItem("titleval") 
    localStorage.removeItem("textarea")
    
    title.value = ""
    text.value = ""
    
})
btnsave.addEventListener("click", function(){
    btnsave.style.fontSize = "x-small";
})
btndelete.addEventListener("click",function(){
    btndelete.style.fontSize = "x-small"
    
})
window.addEventListener("mouseover",function(){
    btndelete.style.fontSize = "initial"
})
window.addEventListener("mouseover",function(){
    btnsave.style.fontSize = "initial"
})
