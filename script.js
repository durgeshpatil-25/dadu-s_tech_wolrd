// Search functionality
document.getElementById('searchBar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
    products.forEach(function(product) {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Add to Cart functionality
// function addToCart(productName, productPrice) {
//     alert(`${productName} added to the cart at $${productPrice}`);
//     // You can add more logic for handling the cart here
// }

function addToCart() {
    window.location.href= "https://www.flipkart.com/realme-p1-5g-peacock-green-128-gb/p/itmae4447062b5b5?pid=MOBGZSU4HH7YZW6D&lid=LSTMOBGZSU4HH7YZW6D3I1RBM&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=b3f92182-6051-49d1-9639-44f5fe898332.MOBGZSU4HH7YZW6D.SEARCH&ppt=hp&ppn=homepage&ssid=0dylge2rdc0000001725551487151";
}

function shopNow() {
    window.location.href= "https://www.flipkart.com/";
}
