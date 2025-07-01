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

// function addToCart() {
//     window.location.href= "https://www.flipkart.com/realme-p1-5g-peacock-green-128-gb/p/itmae4447062b5b5?pid=MOBGZSU4HH7YZW6D&lid=LSTMOBGZSU4HH7YZW6D3I1RBM&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=b3f92182-6051-49d1-9639-44f5fe898332.MOBGZSU4HH7YZW6D.SEARCH&ppt=hp&ppn=homepage&ssid=0dylge2rdc0000001725551487151";
// }

function addToCart(productId) {
    let productLinks = {
        1: "https://www.flipkart.com/realme-p1-5g-peacock-green-128-gb/p/itmae4447062b5b5?pid=MOBGZSU4HH7YZW6D&lid=LSTMOBGZSU4HH7YZW6D3I1RBM&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=b3f92182-6051-49d1-9639-44f5fe898332.MOBGZSU4HH7YZW6D.SEARCH&ppt=hp&ppn=homepage&ssid=0dylge2rdc0000001725551487151",
        2: "https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART",
        3: "https://example.com/product3",
        4: "https://www.flipkart.com/hp-laptop-amd-ryzen-3-quad-core-5300u-8-gb-512-gb-ssd-windows-11-home-15s-eq2212au-thin-light/p/itmedd9f415e3db2?pid=COMGHAGN3U9FJH39&lid=LSTCOMGHAGN3U9FJH39LOH9CD&marketplace=FLIPKART&q=hp+laptop&store=6bo%2Fb5g&srno=s_1_3&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&fm=organic&iid=4f4c46f4-ebf9-4d51-8be7-64f73e003352.COMGHAGN3U9FJH39.SEARCH&ppt=hp&ppn=homepage&ssid=9p8ywhbnm80000001725862645545&qH=9d1edd3d0f6d1b3c",
        5: "https://www.flipkart.com/canon-eos-200d-ii-dslr-camera-ef-s18-55mm-stm/p/itm5d6e44f7fd976?pid=DLLFFNVDYGQN9XCS&lid=LSTDLLFFNVDYGQN9XCSS1NNIP&marketplace=FLIPKART&q=canon+200d+camera&store=jek%2Fp31%2Ftrv&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&fm=organic&iid=6ada2a1b-d457-4b69-ad4c-51a67a093047.DLLFFNVDYGQN9XCS.SEARCH&ppt=hp&ppn=homepage&ssid=rxrpcpgdbk0000001725863866456&qH=d0b5d2035f13229b",
        6: "https://www.flipkart.com/boat-rockerz-425-w-25-hrs-playtime-40-mm-drivers-beast-mode-enx-tech-dual-pairing-bluetooth/p/itm6e167984a78ce?pid=ACCG8MXCWYYWQQMY&lid=LSTACCG8MXCWYYWQQMYD6ESHP&marketplace=FLIPKART&q=hedphone&store=0pm%2Ffcn%2Fgc3&srno=s_1_16&otracker=search&otracker1=search&fm=Search&iid=4dca6f33-d037-42b2-8428-97f6acae7d17.ACCG8MXCWYYWQQMY.SEARCH&ppt=sp&ppn=sp&ssid=kjyaf4btpc0000001725864948204&qH=368512eabc19310b",
        7: "https://www.flipkart.com/dyanora-sigma-80-cm-32-inch-hd-ready-led-smart-linux-tv-30-watt-box-speakers-bezel-less-design/p/itmd652988ab8656?pid=TVSGHAEYVKZGGNGP&lid=LSTTVSGHAEYVKZGGNGPDXEJDG&marketplace=FLIPKART&q=tv+smart+tv&store=ckf%2Fczl&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&fm=search-autosuggest&iid=en_MfgpcY-9nPXXceMt14x2xqHyjlqd2LzTLoCQMQdtPxNQ8fK4uYAqdwnxVI0PVG_FYRYi-FnVS_mBKpIHdseO9w%3D%3D&ppt=sp&ppn=sp&ssid=a3lj9601ao0000001725864358400&qH=9f4f9f00d8892ecd",
        8: "https://www.flipkart.com/galaxar-gaming-core-i5-16-gb-ddr4-500-gb-128-ssd-windows-11-home-1-intel-hd-graphics-2500-20-inch-screen-glx-i52500-16gb-128gb-500gb-20inch-ms-office/p/itm5904bad1f0e9d?pid=AIOHYSDWCRAHSGHF&lid=LSTAIOHYSDWCRAHSGHFIMDCYX&marketplace=FLIPKART&q=computer+all+setup&store=6bo%2Fnl4%2Figk&srno=s_1_8&otracker=AS_QueryStore_OrganicAutoSuggest_2_8_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_8_na_na_na&fm=search-autosuggest&iid=1df60f8b-d2c6-49d5-af37-dade848380fc.AIOHYSDWCRAHSGHF.SEARCH&ppt=sp&ppn=sp&ssid=j0ba0zo7f40000001725864569877&qH=b61b7a36a46e5cff",


    };
    window.location.href = productLinks[productId];
}


function shopNow() {
    window.location.href= "https://www.flipkart.com/";
}
