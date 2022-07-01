function getProductList() {
    return [
        { name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21 },
        { name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27 }
    ]
}

function getTotalPrice(productList) {
    return productList.reduce((product, acc) => {
        const accumulator = acc.price * acc.count * (1 - acc.discount);
        const totalPrice = product.price * product.count * (1 - product.discount)
        return (accumulator + totalPrice).toFixed(2);
    });
}

const totalPrice = getTotalPrice(getProductList());
console.log(totalPrice); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)