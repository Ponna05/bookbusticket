const routeSelect = document.getElementById("route-select");
const seatContainer = document.querySelector(".seats");
const seatCountDisplay = document.getElementById("seat-count");
const totalPriceDisplay = document.getElementById("total-price");
const clearButton = document.getElementById("clear-selection");

let ticketPrice = +routeSelect.value;
let selectedSeats = [];

// Initialize seats layout
for (let i = 0; i < 20; i++) { // 20 seats for simplicity
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.addEventListener("click", () => toggleSeatSelection(seat));
    seatContainer.appendChild(seat);
}

// Update price and count display
function updateSummary() {
    seatCountDisplay.textContent = selectedSeats.length;
    totalPriceDisplay.textContent = selectedSeats.length * ticketPrice;
}

// Toggle seat selection
function toggleSeatSelection(seat) {
    if (!seat.classList.contains("occupied")) {
        seat.classList.toggle("selected");
        if (seat.classList.contains("selected")) {
            selectedSeats.push(seat);
        } else {
            selectedSeats = selectedSeats.filter(s => s !== seat);
        }
        updateSummary();
    }
}

// Change ticket price on route change
routeSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    selectedSeats.forEach(seat => seat.classList.remove("selected"));
    selectedSeats = [];
    updateSummary();
});

// Clear all selected seats
clearButton.addEventListener("click", () => {
    selectedSeats.forEach(seat => seat.classList.remove("selected"));
    selectedSeats = [];
    updateSummary();
});
