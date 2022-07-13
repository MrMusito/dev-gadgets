// SHOW PICTURES

function changeImage() {
    const image = document.getElementById("pictures").getElementsByTagName("img")[0];


}

const btnLeft = document.getElementById("buttonLeft");
btnLeft.addEventListener("click", function(event) {
    const img = document.getElementById("pictures").getElementsByTagName("img")[0];

});

const btnRight = document.getElementById("buttonRight");
btnRight.addEventListener("click", function(event) {
    const img = document.getElementById("pictures").getElementsByTagName("img")[0];
    
});

function displayLargePic() {
    this.addEventListener("mouseover", function(event) {

    });
};

function showBigImage() {
    document.getElementById("thumbs").addEventListener("mouseover", function(event) {
        const newDiv = document.createElement("div");
        document.getElementById("thumbs").appendChild(newdiv);
        newDiv.innerHTML = `<img class="thumbs-img" src="img/canard-jaune-1-s.png" alt="photo canard 1">`
        console.log(newDiv);
    })
};
// showBigImage()

// ADD TO CART

document.getElementById("addCta").addEventListener("click", function(event) {
    document.getElementById("addCta").innerText = "Déja au panier";
    document.getElementById("cartNb").innerText = document.getElementById("addQty").value;
    updateCart();
    changeBackgroundColor();
    disableButton();
});

function updateCart() {
    const cart = document.getElementById("cartNb");
    if(parseInt(cart.innerText) > 99) {
        cart.innerText = "99+"
    }
};

function changeBackgroundColor() {
    document.getElementById("addCta").classList.add("grey");
};

function disableButton(){
    document.getElementById("addCta").disabled = true;
};

// DISPLAY OR NOT

function toggleDisplay() {
    this.classList.toggle("display");
};

document.getElementById("pros").addEventListener("click", function(event){
    document.getElementById("pros1").classList.toggle("display")
});
document.getElementById("about").addEventListener("click", function(event){
    document.getElementById("about1").classList.toggle("display")
});