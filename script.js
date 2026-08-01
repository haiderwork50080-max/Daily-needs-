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
