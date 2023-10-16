document.addEventListener("DOMContentLoaded", function() {
    const popupContainer = document.getElementById("popup-container");
    const popupContent = document.getElementById("popup-content");

    const contentArray = [
        "Shola From Abuja Just ordered Three Bottles of the prostate solution 3 min ago and is permanenty free from frequent urination!",
        "Oluwafemi From Ilorin Just ordered Three Bottles of the prostate solution 10 min ago and is escaping prostate problems!",
        "Amb Nnabuihe From Warri Just ordered Two Bottles of the prostate solution 7 min ago and would see his psa level comimg down!",
        "Mr Musa From Minna Just ordered Two Bottles of the prostate solution 7 min ago!!",
    ];

    let contentIndex = 0;

    function showPopup() {
        popupContent.textContent = contentArray[contentIndex];
        popupContainer.style.display = "block";

        setTimeout(function() {
            popupContainer.style.display = "none";
            contentIndex = (contentIndex + 1) % contentArray.length;
        }, 6000); // Hide the pop-up after 6 seconds (simulating a notification)
    }

    function initialPopupWithDelay() {
        setTimeout(function() {
            showPopup();
            setInterval(showPopup, 30000); // Show the pop-up every minute
        }, 40000); // Initial delay of 2 minutes
    }

    initialPopupWithDelay();
});

