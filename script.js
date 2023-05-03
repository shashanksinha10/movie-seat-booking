const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
       e.target.classList.toggle('selected');
       undateSelectedCount();
    }
});

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectIndex, e.target.value);
    undateSelectedCount();
})

function undateSelectedCount() {
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...selectedSeat].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
    const selectedSeatCount = selectedSeat.length;
    count.innerHTML = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
}

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}