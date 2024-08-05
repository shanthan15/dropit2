document.addEventListener('DOMContentLoaded', function () {
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const quantityDisplay = document.getElementById('quantity');
    let quantity = 1;

    decreaseButton.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', function () {
        quantity++;
        quantityDisplay.textContent = quantity;
    });
});
