const Words=['Abjure', 'Future', 'Picnic', 'Agonistic', 'Garland', 'Protect', 'Airline', 'Gigantic', 'Publish', 'Bandit', 'Goofy', 'Quadrangle', 'Banquet', 'Government', 'Recount', 'Binoculars', 'Grandnieces', 'Redoubtable', 'Biologist', 'Handbook', 'Reflection', 'Blackboard', 'Himself', 'Reporter', 'Board', 'Indulge', 'Ring', 'Bookworm', 'Inflatable', 'Salesclerk', 'Butterscotch', 'Inimical', 'Snapshot', 'Camera', 'Interim', 'Shellfish', 'Campus', 'Invest', 'Ship', 'Catfish', 'Jackpot', 'Significance', 'Carsick', 'Kitchenette', 'Sometimes', 'Celebrate', 'Law', 'Sublime', 'Celery', 'Life', 'Tabletop', 'Citizen', 'Lifeline', 'Teamwork', 'Coloring', 'Love', 'Tennis', 'Compact', 'Magnificent', 'Timesaving', 'Dark', 'Malevolence', 'Tree', 'Damage', 'Man', 'Termination', 'Dangerous', 'Mascot', 'Underestimate', 'Decorum', 'Marshmallow', 'Vineyard', 'Endorse', 'Mine', 'War', 'Engender', 'Moonwalk', 'Way', 'Erratic', 'Near', 'Wealth', 'Envelope', 'Nephogram', 'Wednesday', 'Etymology', 'Newborn', 'World', 'Eyewitness', 'Noisome', 'Xerox', 'Eulogy', 'Owl', 'You', 'Fish', 'Parenthesis', 'Zestful', 'Food', 'Perpetrator', 'Foreclose', 'Phone'];
let numWords=Words.length;
let input=document.getElementById("input");
let output=document.getElementById("output");
let button=document.getElementById("enter");
let start=document.getElementById("start");
let outcon=document.getElementById("outputcontainer");
let underscore=document.getElementById("underscore");
let selectedword;
let underscoreArray;
let guesses;
let guessLeft=document.querySelector("#guessLeft");

start.addEventListener("click",()=>{
  button.disabled=false
  guesses=10;
  guessLeft.innerText="guesses left " + guesses;
  outcon.style.display="block";
  selectedword = Words[Math.floor(Math.random()*numWords)].toLowerCase()
 underscoreArray = "_".repeat(selectedword.length).split("")
  underscore.innerText=underscoreArray.join(" ")
  output.innerText=""
});

button.addEventListener("click",function(){
if (selectedword.includes(input.value.toLowerCase())){
  for (let i = 0; i<selectedword.length; i++){
    if (input.value.toLowerCase()==selectedword[i]){
      underscoreArray[i]=input.value.toLowerCase()
    }
  }
  underscore.innerText=underscoreArray.join(" ")
}
  else if(input.value.toLowerCase()==selectedword){
    underscoreArray=selectedword.split("")
    underscore.innerText=underscoreArray.join(" ")
  }
  else if(!underscoreArray.includes("_")){
    output.innerText="YOU WON! Do you like money? WELL IDC!"
    output.style.color="green"
    button.disabled=true
  }
  else if(guesses==0){
    output.innerText="you lost. get smart. By the way, the word is " + selectedword;
    output.style.color="red"
    button.disabled=true
  }
  else{
    guesses=guesses-1
    
  }
    guessLeft.innerText="guesses left " + guesses

  input.value=""
});

  