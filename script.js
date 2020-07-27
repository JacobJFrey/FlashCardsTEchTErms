let cardStack = [];
let steveMiami = false;

//event listeners
document.addEventListener('DOMContentLoaded', () =>{
const reveal = document.querySelector("#reveal");
reveal.addEventListener('click',() => {
  revealDef();
  });

const swap = document.querySelector("#swap");
swap.addEventListener('click',() => {
  swapCard();
  });

const makeDeck = document.querySelector("#shuffle");
makeDeck.addEventListener('click',() => {
  restock_shuffle();
})

const theme = document.querySelector("#theme");
theme.addEventListener('click',() => {
  changeTheme();
  });

const flashcard_term = document.querySelector("#term");
flashcard_term.addEventListener('click', () => {
  revealDef();
});

const flashcard_def = document.querySelector("#definition");
flashcard_def.addEventListener('click', () => {
  swapCard();
});

});

//icon references
const close_eye = "fas fa-eye-slash";
const open_eye = "fas fa-eye";

//function switched CSS theme
function changeTheme() {
  let currentTheme = document.getElementById("thisStyle")
  if (!steveMiami) {
      currentTheme.setAttribute("href","steve.css");   
    } else {
      currentTheme.setAttribute("href","basic.css");
    }  
    steveMiami = !steveMiami;
  }

//reveal definition
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
  cardStack.push({term: "API", definition: "Application Program Interface"});
  cardStack.push({term: "CRUD", definition: "Create, Read, Update, Delete"});
  cardStack.push({term: "DNS", definition: "Domain Name System"});
  cardStack.push({term: "DTO", definition: "Data Transfer Object"});
  cardStack.push({term: "HTTP", definition: "HyperText Transfer Protocol"});
  cardStack.push({term: "HTTPS", definition: "HyperText Transfer Protocol Secure"});
  cardStack.push({term: "JAR", definition: "Java ARchive"});
  cardStack.push({term: "JWT", definition: "JSON Web Token"});
  cardStack.push({term: "JSON", definition: "JavaScript Object Notation"});
  cardStack.push({term: "MVC", definition: "Model View Controller"});
  cardStack.push({term: "REST", definition: "REpresentational State Transfer"});
  cardStack.push({term: "URL", definition: "Uniform Resource Locator"});
  cardStack.push({term: "URI", definition: "Uniform Resource Identifier"});
  cardStack.push({term: "WAR", definition: "Web ARchive"});
}

//dictionary of Terms in HTML module
function collectionHTMLTerms(){
  cardStack.push({term: "CSS", definition: "Cascading Style Sheets"});
  cardStack.push({term: "DOM", definition: "Document Object Model"});
  cardStack.push({term: "XML", definition: "eXtensible Markup Language"});
  cardStack.push({term: "Self Closing Element", definition: "Closes within the same tag"});
  cardStack.push({term: "HTTP", definition: "HyperText Transfer Protocol"});
  cardStack.push({term: "HTTPS", definition: "HyperText Transfer Protocol Secure"});
  cardStack.push({term: "URL", definition: "Uniform Resource Locator"});
  cardStack.push({term: "URI", definition: "Uniform Resource Identifier"});
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
    cardStack = [];
    let isStocked = false;
    let hasAPI_TERM = (document.querySelector("#TE_API").checked);
    if (hasAPI_TERM) {
      collectionAPITerms();
      isStocked = true;
    }
    let hasHTML_TERM = (document.querySelector("#TE_HTML").checked);
    if (hasHTML_TERM) {
      collectionHTMLTerms();
      isStocked = true;
    }
    if (!isStocked) {
      const instructions = '<span>TE: TERM-inator</span><ul id="baseInfo" style="list-style-type:none;"><li><i id="eye" class="fas fa-eye"></i> &emsp; reveals definition</li><li><i class="fas fa-hand-spock"></i> &emsp; changes to next flash card</li><li><i class="fas fa-random"></i> &emsp; shuffles the stack</li><li><i class="fas fa-street-view"></i> &emsp; toggles Steve mode</li></ul>';
      const steve_story = '<span style="display: flex; flex-direction: column; padding: 10px;">History of Steve:<br><span style="font-size: 30px;">Steve was a squirrel who lived in the backyard and moved to Miami do a buddy cop show with Don Johnson in the 80s.</span></span>';
      document.getElementById("cardCount").innerText = 'Version 0.20717 Alpha';
      document.getElementById("term").innerHTML = instructions;
      document.getElementById("definition").style.display = "none";
      document.getElementById("definition").innerHTML = steve_story;
      document.querySelector("#eye").setAttribute("class",close_eye);
    }
}

//shuffle the deck
function shuffleDeck(){
    cardStack = fisher_yeates_randomize(cardStack);
    document.getElementById("cardCount").innerText = `Cards Remaining: ${cardStack.length}`
}

//access the next card
function swapCard(){
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
  document.querySelector("#eye").setAttribute("class",close_eye);
}
