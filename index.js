let btndark = document.querySelector("#btndark")
let btnlight = document.querySelector("#btnlight")
let btnclassic = document.querySelector("#btnclassic")

btndark.addEventListener("click", function(){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1190')"
})
btnlight.addEventListener("click", function(){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')"
})
btnclassic.addEventListener("click", function(){
    document.body.style.backgroundImage =" url('https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331')"
})
