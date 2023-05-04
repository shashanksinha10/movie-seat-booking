const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
PopulateUI();
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
       e.target.classList.toggle('selected');
       undateSelectedCount();
    }
});

function undateSelectedCount() {
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...selectedSeat].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
    const selectedSeatCount = selectedSeat.length;
    count.innerHTML = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
};

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    undateSelectedCount();
});

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
};

function PopulateUI(){
    const selectedSeat = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeat !== null && selectedSeat.length >0){
        seats.forEach((seat, index)=>{
          if(selectedSeat.indexOf(index) >-1){
             seat.classList.add('selected')
          }
        })
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
};

undateSelectedCount();