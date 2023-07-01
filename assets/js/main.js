
window.addEventListener('scroll', ()=> {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 400);
});


// Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .cardd");

// Add click event listener to each filter button

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(cardd => {
        cardd.classList.add("hide");
        if(cardd.dataset.name === e.target.dataset.name || e.target.dataset.name === "saterday") {
            cardd.classList.remove("hide")
        }
    })
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));

let loader = document.getElementById("preloader");
window.onload = setTimeout(()=> {
    loader.style.display = "none";
}, 2000);

let btnScroll = document.getElementById("scroller");

window.onscroll = ()=> {
    this.scrollY >= 100 ? btnScroll.classList.add("show") : btnScroll.classList.remove("show");
}

btnScroll.onclick = ()=> {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}
