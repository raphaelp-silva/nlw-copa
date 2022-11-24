function createGame(player1,result1, hour,result2, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="bandeira ${player1}">
    <strong>${result1}</strong>
    <h3>${hour}</h3>
    <strong>${result2}</strong>
    <img src="./assets/icon-${player2}.svg" alt="bandeira ${player2}">
  </li>

  `
}
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2> ${date} <span>${day}</span> </h2>

  <ul>
      ${games}
  </ul>

</div>
  `
}



document.querySelector("#app").innerHTML = `
    <header>
                <img src="./assets/logo.svg" alt="logo da nlw">
    </header>
    <main id="cards">
    ${createCard("20/11", "domingo", 
    createGame("qatar","0", "13:00","2", "ecuador"))}


    ${createCard("21/11", "segunda", 
     createGame("england","6", "10:00","2", "iran")+ 
     createGame("senegal","0", "13:00","2", "netherlands")+ 
     createGame("usa","1", "16:00","1", "wales"))}


     ${createCard("22/11", "terça", 
     createGame("argentina","1", "07:00","2", "saudiarabia")+ 
     createGame("denmark","0", "10:00","0", "tunisia")+ 
     createGame("mexico","0", "13:00","0", "poland")+ 
     createGame("france","4", "16:00","1", "australia"))}

     ${createCard("23/11", "quarta", 
     createGame("morocco","0", "07:00","0", "croatia")+ 
     createGame("germany","1", "10:00","2", "japan")+ 
     createGame("spain","7", "13:00","0", "costarica")+ 
     createGame("belgium","1", "16:00","0", "canada"))}

  
     ${createCard("24/11", "quinta", 
     createGame("switzerland","-", "07:00","-", "cameroon")+ 
     createGame("uruguay","-", "10:00","-", "southkorea")+ 
     createGame("portugal","-", "13:00","-", "ghana")+ 
     createGame("brazil","-", "16:00","-", "serbia"))}

     ${createCard("25/11", "sexta", 
     createGame("wales","-", "07:00","-", "iran")+ 
     createGame("qatar","-", "10:00","-", "senegal")+ 
     createGame("netherlands","-", "13:00","-", "ecuador")+ 
     createGame("england","-", "16:00","-", "usa"))}

     ${createCard("26/11", "sábado", 
     createGame("tunisia","-", "07:00","-", "australia")+ 
     createGame("poland","-", "10:00","-", "saudiarabia")+ 
     createGame("france","-", "13:00","-", "denmark")+ 
     createGame("argentina","-", "16:00","-", "mexico"))}

     ${createCard("27/11", "domingo", 
     createGame("japan","-", "07:00","-", "costarica")+ 
     createGame("belgium","-", "10:00","-", "morocco")+ 
     createGame("croatia","-", "13:00","-", "canada")+ 
     createGame("spain","-", "16:00","-", "germany"))}
     
     
     ${createCard("28/11", "segunda", 
     createGame("cameroon","-", "07:00","-", "serbia")+
     createGame("southkorea","-", "10:00","-", "ghana")+
     createGame("brazil","-", "13:00","-", "switzerland")+
     createGame("portugal","-", "16:00","-", "uruguay"))}

     ${createCard("29/11", "terça", 
     createGame("ecuador","-", "12:00","-", "senegal")+
     createGame("netherlands","-", "12:00","-", "qatar")+
     createGame("iran","-", "16:00","-", "usa")+
     createGame("wales","-", "16:00","-", "england"))}

     ${createCard("30/11", "quarta", 
     createGame("tunisia","-", "12:00","-", "france")+
     createGame("australia","-", "12:00","-", "denmark")+
     createGame("poland","-", "16:00","-", "argentina")+
     createGame("saudiarabia","-", "16:00","-", "mexico"))}

     ${createCard("01/12", "quinta", 
     createGame("croatia","-", "12:00","-", "belgium")+
     createGame("canada","-", "12:00","-", "morocco")+
     createGame("japan","-", "16:00","-", "spain")+
     createGame("costarica","-", "16:00","-", "germany"))}
     
     
     ${createCard("02/12", "sexta",
     createGame("southkorea","-", "12:00","-", "portugal")+
     createGame("ghana","-", "12:00","-", "uruguay")+
     createGame("cameroon","-", "16:00","-", "brazil")+
     createGame("serbia","-", "16:00","-", "switzerland"))}      
    </main>
`
const change_color = document.querySelector("body");
const blue_botton = document.querySelector("#themes #theme-blue");
const yellow_botton = document.querySelector("#themes #theme-yellow");
const green_botton = document.querySelector("#themes #theme-green");

blue_botton.addEventListener("click", () => {
  change_color.classList.remove("yelloq");
  change_color.classList.remove("green");
  change_color.classList.add("blue");
});

yellow_botton.addEventListener("click", () => {
  change_color.classList.remove("blue");
  change_color.classList.remove("green");
  change_color.classList.add("yellow");
});

green_botton.addEventListener("click", () => {
  change_color.classList.remove("yellow");
  change_color.classList.remove("blue");
  change_color.classList.add("green");
});