// for sliding movie list wrapper
const arrows=document.querySelectorAll('.arrow');
const movielists=document.querySelectorAll('.movie-list');

arrows.forEach((arrow,ind)=>{
    let counter=0;
    arrow.addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth/260);
        let itemnumber=movielists[ind].querySelectorAll('img').length;
        if(counter<(itemnumber-5+5-ratio)){
            movielists[ind].style.transform= `translateX(${movielists[ind].computedStyleMap().get("transform")[0].x.value-290}px)`;
            counter++;
        }
        else{
            movielists[ind].style.transform= `translateX(0)`;
            counter=0;
        }
    })
});

// for changing dark theme
const ball=document.querySelector(".toggle-ball");
const container=document.querySelectorAll(".navbar,.navbar-container,.sidebar,.sidebar-item,.container,.toggle,.toggle-ball,.back-video,.featured-content,.faq-page,.faq-body,.faq-container,.faq-heading");

ball.addEventListener("click",()=>{
        container.forEach((item)=>{
            item.classList.toggle("active");
        })
});


// for expanding and contracting faq questions
const faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("plusminus");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } 
        else {
            body.style.display = "block";
        }
    });
}