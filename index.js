
document.addEventListener("click", function(e){

if(e.target.classList.contains("gallery-item")){
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById("gallery-modal"));
    myModal.show();
}
})



let btn = document.querySelector("#ok");

btn.addEventListener("click", () => {
window.location.href = "http://127.0.0.1:5500/";

});

