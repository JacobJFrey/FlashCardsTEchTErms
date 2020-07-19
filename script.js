let cardStack = [];

//event listeners
document.addEventListener('DOMContentLoaded', () =>{

});

//icon references
const close_eye = "fas fa-eye-slash";
const open_eye = "fas fa-eye";

//function switched CSS theme
function changeTheme() {
  document.getElementById("thisStyle").setAttribute("href","steve.css");
}

//function reveals definition
function revealDef() {
    const m = document.getElementById("definition");
    const eye = document.getElementById("eye");
    if (m.style.display === "none" ||
        m.style.display === "") {
      m.style.display = "flex";
      eye.setAttribute("class","fas fa-eye-slash");
    } else {
      m.style.display = "none";
      eye.setAttribute("class","fas fa-eye");
    }
  }

//dictionary of Terms in API module
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

//dictionary of Terms in HTML module
function collectionHTMLTerms(){
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

//function to randomize card order
function fisher_yeates_randomize(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  while ( 0 != currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//make a randomized deck
function restock_shuffle(){
    cardStack = collectionAPITerms();
    cardStack = fisher_yeates_randomize(cardStack);
}

//access the next card
function switchCard(){
  //empty deck invokes restock
  if (cardStack.length < 1) {
    restock_shuffle();
  }
  //reveal definition of card
  let nextCard = cardStack.shift();
  document.getElementById("cardCount").innerText = `Cards Remaining: ${cardStack.length}`
  document.getElementById("term").innerText = nextCard.term;
  document.getElementById("definition").style.display = "none";
  document.getElementById("definition").innerText = nextCard.definition;
  document.getElementById("reveal").setAttribute("class",close_eye);
}
