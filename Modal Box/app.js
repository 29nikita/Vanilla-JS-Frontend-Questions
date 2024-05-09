let modal = document.getElementById("myModal");
let btn = document.querySelector(".show");
let closeBtn = document.querySelector(".hide");

modal.style.display = "none";

btn.addEventListener("click", function(){
    modal.style.display = "block";
})

closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
})
