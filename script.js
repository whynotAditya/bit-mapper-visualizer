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
// Add this to your <script> tag
const resetBtn = document.getElementById('reset-btn');

if (resetBtn) {
    resetBtn.addEventListener('click', function() {
        console.log("Resetting System...");

        // 1. Find all bits and turn them off
        const allBits = document.querySelectorAll('.bit-card');
        allBits.forEach(bit => {
            bit.classList.remove('active');
            bit.innerText = "0";
        });

        // 2. Reset the display numbers to zero
        document.getElementById('dec-out').innerText = "0";
        document.getElementById('hex-out').innerText = "0x00";
        
        // Check if char-out exists before resetting
        const charOut = document.getElementById('char-out');
        if (charOut) charOut.innerText = "N/A";

        console.log("System Ready.");
    });
} else {
    console.error("Could not find the reset-btn in HTML!");
}