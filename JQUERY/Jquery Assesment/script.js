// Function to update the clock display
function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time components as two digits
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update the clock content using jQuery
    $('#clock').html(formattedTime);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();
