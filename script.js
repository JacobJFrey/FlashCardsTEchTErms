let cardStack = [];


function revealDef() {
    var m = document.getElementById("definition");
    if (m.style.display === "none") {
      m.style.display = "flex";
    } else {
      m.style.display = "none";
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
  return flashStack;
}


function shuffle(flashCardStack) {
  let index = 0;
  let shuffled = [];
  while (flashCardStack.length > 0) {
    index = Math.floor(Math.random() * flashCardStack.length);
    let card = flashCardStack.splice(index,1);
    shuffled.push(card);
  }
  return shuffled;
}


function switchCard(){
  if (cardStack.length < 1) {
    cardStack = collectionAPITerms();
  }
  let nextCard = cardStack.pop();
  document.getElementById("term").innerText = nextCard.term;
  document.getElementById("definition").style.display = "none";
  document.getElementById("definition").innerText = nextCard.definition;
}
