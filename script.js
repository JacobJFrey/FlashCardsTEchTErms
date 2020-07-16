let cardStack = [];

function revealDef() {
    const m = document.getElementById("definition");
    const eye = document.getElementById("eye");
    if (m.style.display === "none") {
      m.style.display = "flex";
      eye.setAttribute("class","fas fa-eye-slash");
    } else {
      m.style.display = "none";
      eye.setAttribute("class","fas fa-eye");
    }
  }


function collectionAPITerms(){
  let flashStack = [];
  flashStack.push({term: "API", definition: "Application Program Interface"});
  flashStack.push({term: "CRUD", definition: "Creat, Read, Update, Delete"});
  flashStack.push({term: "DNS", definition: "Domain Name System"});
  flashStack.push({term: "DTO", definition: "Data Transfer Object"});
  flashStack.push({term: "HTTP", definition: "HyperText Transfer Protocol"});
  flashStack.push({term: "HTTPS", definition: "HyperText Transfer Protocol Secure"});
  flashStack.push({term: "JAR", definition: "Java ARchive"});
  flashStack.push({term: "JWT", definition: "Java Web Token"});
  flashStack.push({term: "JSON", definition: "JavaScript Object Notation"});
  flashStack.push({term: "MVC", definition: "Model View Controller"});
  flashStack.push({term: "REST", definition: "REpresentational State Transfer"});
  flashStack.push({term: "URL", definition: "Uniform Resource Locator"});
  flashStack.push({term: "URI", definition: "Uniform Resource Identifier"});
  flashStack.push({term: "WAR", definition: "Web ARchive"});
  flashStack.push({term: "Where is Steve from?", definition: "Miami"});
  return flashStack;
}


function shuffle() {
  let index = 1;
  let shuffled = this.cardStack;
  while (shuffle.length > 0) {
    index = Math.floor(Math.random() * shuffled.length);
    let card = shuffled.splice(index,1);
    cardStack.push(card);
  }
}


function switchCard(){
  if (cardStack.length < 1) {
    cardStack = collectionAPITerms();
    //shuffle();
  }
  let nextCard = cardStack.shift();
  document.getElementById("cardCount").innerText = `Cards Remaining: ${cardStack.length}`
  document.getElementById("term").innerText = nextCard.term;
  document.getElementById("definition").style.display = "none";
  document.getElementById("definition").innerText = nextCard.definition;
}
