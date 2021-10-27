window.onload= function(){


    VanillaTilt.init(document.querySelectorAll(".SMwrapper li a"), {
        max: 30,
        speed: 400,
        glare: true,
        "max-glare": 1
    });


    let list = document.querySelectorAll('.SMwrapper li');
    let Bg = document.querySelector('.socialmedia');


list.forEach(elements =>{
    console.log("hello")
    elements.addEventListener("mouseenter", function(event){
        let color = event.target.getAttribute("data-color");
        Bg.style.backgroundColor = color;
    })
        elements.addEventListener("mouseleave", function(event){
        Bg.style.backgroundColor = '#fff';
    })
})




}


