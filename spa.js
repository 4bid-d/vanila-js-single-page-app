let log= console.log
const app= {

    pages:[],
    show: new Event("show"),
    init : function(){
        app.pages = document.querySelectorAll(".page")
        app.pages.forEach((pg)=>{
            pg.addEventListener("show" , app.nav)
        })
        document.querySelectorAll(".nav-link").forEach((link)=>{
            link.onclick =  app.nav 
        })
        history.replaceState({},"home","#home")
        window.onhashchange = app.poppin
    },
    nav : function (ev){
        /***********
        
        * function triggered when .navink  and .page elements fires event show
         
        **********/
       ev.preventDefault()
        let hashchangeEvent = new HashChangeEvent("hashchange")
        hashchangeEvent.newURL = "ddd"
        let target = ev.target.getAttribute("data-target");
        document.querySelector(".active").classList.remove("active")
        document.getElementById(target).classList.add("active")

        history.pushState({},target,`#${target}`)
        window.dispatchEvent(hashchangeEvent)
    },
    pageShown : function (ev){
        ev.preventDefault()
        log("pageShown")
    },
    poppin : function (ev){
        ev.preventDefault()
        
        log(ev)
    },
}


document.addEventListener("DOMContentLoaded",app.init)