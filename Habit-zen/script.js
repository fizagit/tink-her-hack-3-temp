function trackHabits() {
    const water = document.getElementById("water").checked;
    const steps = document.getElementById("steps").checked;
    const sleep = document.getElementById("sleep").checked;

    // Count completed habits
    let completed = 0;
    if (water) completed++;
    if (steps) completed++;
    if (sleep) completed++;

    // Display progress
        const progressDiv = 
    document.getElementById("progress");
        progressDiv.innerText = `You completed ${completed}/3 habits today! Keep it up!`;
};
