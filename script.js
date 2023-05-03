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
    undateSelectedCount();
})

function undateSelectedCount() {
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    const selectedSeatCount = selectedSeat.length;
    count.innerHTML = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice
    console.log(selectedSeatCount)
}