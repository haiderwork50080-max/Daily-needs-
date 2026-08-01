document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector("button");

button.addEventListener("click", () => {
window.open("https://wa.me/917820041833?text=Hello,%20I%20want%20to%20order%20from%20Daily%20Needs","_blank");
});

});
let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + " added to cart!");
}
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Items in your cart:\n\n" + cart.join("\n"));
    }
}
function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}