/*
poster
title
runtime
showtime
available tickets(theater capacity - tickets sold)
description
*/
fetch("http://localhost:3000/films/1")
.then(res => res.json())
.then(function(data){
    const filmTitle = document.getElementById("title");
    filmTitle.textContent = data.title;

    const filmPoster = document.getElementById("img");
    filmPoster.src = data.poster;

    const filmRuntime = document.getElementById("p1");
    filmRuntime.textContent = data.runtime;

    const filmShowtime = document.getElementById("p2");
    filmShowtime.textContent = data.showtime;

    const filmdescription = document.getElementById("p3");
    filmdescription.textContent = data.description;

    const filmAvailableTickets = document.getElementById("p4");
    filmAvailableTickets.textContent = (data.capacity)-(data.tickets_sold);

    

})

fetch("http://localhost:3000/films")
.then(res => res.json())
.then(function(data){
    let movieObject = data;
    const whereToAppend = document.getElementById("list-of-movies");

    for(const movie of movieObject){
        if(movie.id != 1){
        const movieName = document.createElement("div");
        movieName.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}">
        <p>${movie.runtime}</p>
        <p>${movie.showtime}</p>
        <p>${movie.description}</p>
        <p class="ticketsLeft">${(movie.capacity)-(movie.tickets_sold)}</p>
        <button class="button" onclick="buyTicket()">Buy Ticket</button>
        <hr>
        
        `
        
        
        /*function buyTicket(event){
            if(event.target.classList.contains("ticketsLeft")
            && event.target.classList.contains("button")){
                let ticket = document.getElementsByClassName("button");
                ticket = ((movie.tickets_sold) - 1);
                let ticketLeft = document.getElementsByClassName("ticketsLeft");
                ticketLeft.innerHTML = ticket;

            }
        

    
        }*/
        whereToAppend.appendChild(movieName);

     }

    }

});