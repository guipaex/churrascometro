/*Carne - 400gr por pessoa + de 6hrs - 650
Cerveja - 1200ml por pessoa + 6hrs - 2000ml
Refrigerante/Agua - 1000ml por pessoa + 6 hrs 1500ml
Criança vale -> 0,5*/


//identifying increase and decrease buttons
let incButton = document.getElementsByClassName("inc");
let decButton = document.getElementsByClassName("dec");

for(i = 0; i < incButton.length; i++){
 
  let button = incButton[i];

  //Each button 
  button.addEventListener('click', function(e){
    let buttonClicked = e.target;

    //Getting the button parent, to get the 3hrd element of parent div
    let input = buttonClicked.parentElement.children[1];
    
    //declaring a variable with the value of input
    let inputValue = input.value;

    //incresse input value
    let newValue = parseInt(inputValue) +1;

    //update input value
    input.value = newValue;
  
  })
}
for(i = 0; i < decButton.length; i++){
 
  let button = decButton[i];

  //Each button 
  button.addEventListener('click', function(e){
    let buttonClicked = e.target;

    //Getting the button parent, to get the 3hrd element of parent div
    let input = buttonClicked.parentElement.children[1];
    
    //declaring a variable with the value of input
    let inputValue = input.value;

    //incresse input value
    let newValue = parseInt(inputValue) -1;

    //update input value
    if (newValue >=0){
      input.value = newValue;
    }
  
  })
}

let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputTime = document.getElementById("duration");
let result = document.getElementById("result");
let form = document.getElementById("form").style;

function calculate(){
    let adults = inputAdults.value;
    let children = inputChildren.value;
    let time = inputTime.value;

    let totalBeer = cervaPP(time) * adults;
    let qdtTotalBebidas = bebidaPP(time) * adults + (bebidaPP(time)/2 * children);
    let qdtTotalCarne = carnePP(time) * adults + (carnePP(time)/2 * children);
    console.log(qdtTotalCarne);
    console.log(totalBeer);

    form.display ='none';

    result.style.display ="block";

    if(qdtTotalCarne >= 1000){
      qdtTotalCarne = qdtTotalCarne/1000;
      result.innerHTML = `<p>${qdtTotalCarne}Kg de Carne</p>`;
      } else{
      result.innerHTML = `<p>${qdtTotalCarne}g de Carne</p>`;
    }
    if(totalBeer >= 1000){
      totalBeer = totalBeer/1000;
      result.innerHTML += `<p>${totalBeer}L de Cerveja</p>`
    } else {
      result.innerHTML += `<p>${totalBeer}ml de Cerveja</p>`
    }
      
    result.innerHTML += `<p>${qdtTotalBebidas}ml de Bebidas</p>`
    result.innerHTML += `<button onclick="recalc()">Recalcular</button>`
}

function carnePP(duracao){
  if (duracao >= 6){
    return 650;
  } else {
    return 400;
  }
}

function cervaPP(duracao){
  if (duracao >= 6){
    return 2000;
  } else {
    return 1200;
  }
}

function bebidaPP(duracao){
  if (duracao >= 6){
    return 1500;
  } else {
    return 100;
  }
}


//Increase & Decrease Buttons

/*Criar ainda:
  -> Qual tipo de Carne;
  -> Quem bebe cerveja ou não;
  -> Divisão de dinheiro pra cada pessoa;
  -> Acompanhamentos;
  -> Variavel por hora;*/