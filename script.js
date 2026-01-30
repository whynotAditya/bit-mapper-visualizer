document.addEventListener('click', function (event) {
    // 1. Check if the clicked element is a bit-card
    if (event.target.classList.contains('bit-card')) {
        
        const bit = event.target;

        // 2. Toggle the 'active' class
        bit.classList.toggle('active');

        // 3. Update the text (0 or 1)
        if (bit.classList.contains('active')) {
            bit.innerText = "1";
        } else {
            bit.innerText = "0";
        }

        // 4. Run the calculation
        calculateTotal();
    }
});

function calculateTotal() {
    let total = 0;
    const allBits = document.querySelectorAll('.bit-card');
    const decDisplay = document.getElementById('dec-out');
    const hexDisplay = document.getElementById('hex-out');

    allBits.forEach(bit => {
        if (bit.classList.contains('active')) {
            total += parseInt(bit.getAttribute('data-weight'));
        }
    });

    // Update the UI
    if(decDisplay) decDisplay.innerText = total;
    if(hexDisplay) hexDisplay.innerText = "0x" + total.toString(16).toUpperCase();
}