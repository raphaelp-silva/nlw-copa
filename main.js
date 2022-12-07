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
     createGame("switzerland","1", "07:00","0", "cameroon")+ 
     createGame("uruguay","0", "10:00","0", "southkorea")+ 
     createGame("portugal","3", "13:00","2", "ghana")+ 
     createGame("brazil","2", "16:00","0", "serbia"))}

     ${createCard("25/11", "sexta", 
     createGame("wales","0", "07:00","2", "iran")+ 
     createGame("qatar","1", "10:00","3", "senegal")+ 
     createGame("netherlands","1", "13:00","1", "ecuador")+ 
     createGame("england","0", "16:00","0", "usa"))}

     ${createCard("26/11", "sábado", 
     createGame("tunisia","0", "07:00","1", "australia")+ 
     createGame("poland","2", "10:00","0", "saudiarabia")+ 
     createGame("france","2", "13:00","1", "denmark")+ 
     createGame("argentina","2", "16:00","0", "mexico"))}

     ${createCard("27/11", "domingo", 
     createGame("japan","0", "07:00","1", "costarica")+ 
     createGame("belgium","0", "10:00","2", "morocco")+ 
     createGame("croatia","4", "13:00","1", "canada")+ 
     createGame("spain","1", "16:00","1", "germany"))}
     
     
     ${createCard("28/11", "segunda", 
     createGame("cameroon","3", "07:00","3", "serbia")+
     createGame("southkorea","2", "10:00","3", "ghana")+
     createGame("brazil","1", "13:00","0", "switzerland")+
     createGame("portugal","2", "16:00","0", "uruguay"))}

     ${createCard("29/11", "terça", 
     createGame("ecuador","1", "12:00","2", "senegal")+
     createGame("netherlands","2", "12:00","0", "qatar")+
     createGame("iran","0", "16:00","1", "usa")+
     createGame("wales","0", "16:00","3", "england"))}

     ${createCard("30/11", "quarta", 
     createGame("tunisia","1", "12:00","0", "france")+
     createGame("australia","1", "12:00","0", "denmark")+
     createGame("poland","0", "16:00","2", "argentina")+
     createGame("saudiarabia","1", "16:00","2", "mexico"))}

     ${createCard("01/12", "quinta", 
     createGame("croatia","0", "12:00","0", "belgium")+
     createGame("canada","1", "12:00","2", "morocco")+
     createGame("japan","2", "16:00","1", "spain")+
     createGame("costarica","2", "16:00","4", "germany"))}
     
     
     ${createCard("02/12", "sexta",
     createGame("southkorea","2", "12:00","1", "portugal")+
     createGame("ghana","0", "12:00","2", "uruguay")+
     createGame("cameroon","1", "16:00","0", "brazil")+
     createGame("serbia","2", "16:00","3", "switzerland"))}      

     ${createCard("03/12", "sábado  (oitavas)",
     createGame("netherlands","3", "12:00","1", "usa")+
     createGame("argentina","2", "16:00","1", "australia"))}

     ${createCard("04/12", "domingo  (oitavas)",
     createGame("france","3", "12:00","1", "poland")+
     createGame("england","3", "16:00","0", "senegal"))}

     ${createCard("05/12", "segunda  (oitavas)",
     createGame("japan","1", "12:00","1", "croatia")+
     createGame("brazil","4", "16:00","1", "southkorea"))}

     ${createCard("06/12", "terça  (oitavas)",
     createGame("morocco","0", "12:00","0", "spain")+
     createGame("portugal","6", "16:00","1", "switzerland"))}

     
     ${createCard("09/12", "sexta  (quartas)",
     createGame("croatia","-", "12:00","-", "brazil"))}
     
     ${createCard("09/12", "sexta  (quartas)",
     createGame("netherlands","-", "16:00","-", "argentina"))}

     ${createCard("10/12", "sábado  (quartas)",
     createGame("morocco","-", "12:00","-", "portugal"))}
     
     ${createCard("10/12", "sábado  (quartas)",
     createGame("england","-", "16:00","-", "france"))}


    </main>
`
const change_color = document.querySelector("body");
const blue_botton = document.querySelector("#themes #theme-blue");
const yellow_botton = document.querySelector("#themes #theme-yellow");
const green_botton = document.querySelector("#themes #theme-green");

blue_botton.addEventListener("click", () => {
  change_color.classList.remove("yellow");
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