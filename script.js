let cardStack = [];

function myFunction() {
    var x = document.getElementById("definition");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
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
    index = Math.random() * flashCardStack.length;
    let card = flashCardStack.splice(index,1);
    shuffled.push(card);
  }
  return shuffled;
}

function switchCard(){
  document.getElementById("term").innerHTML = "Jake Rules";
  document.getElementById("definition").style.display = "none";
  document.getElementById("definition").innerHTML = "But which one?";
}
