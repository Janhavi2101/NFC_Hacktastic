const income = document.querySelector('#income');


function calculateIncomeTax(income, age,ass) {
  let tax = 0;
  if (ass=="2022"){
     
  if (income <= 250000) {
    tax = 0;
    alert(`The income tax for an income of ${income} is: ${tax}\n yayy you dont have to pay any taxes!!!`);
    
  } else if ((income>250000) &&(income <= 500000)) {
    tax = (income - 250000) * 0.05;

  } else if((income>500000) && (income <= 1000000) ){
    tax = 250000 * 0.05 + (income - 500000) * 0.20;
  } else {
    tax = 250000 * 0.05 + 500000* 0.20 +(income- 1000000)*0.30 ;
  }
  
 // tax = tax + 0.04*tax ;

} else if(ass=="2023"){
  if (income <= 300000) {
    tax = 0;
    alert(`The income tax for an income of ${income} is: ${tax}\n yayy you dont have to pay any taxes!!!`);
    
  } else if ((income>300000) &&(income <= 600000)) {
    tax = (income - 300000) * 0.05;

  } else if((income>600000) && (income <= 900000) ){
    tax = 300000 * 0.05 + (income - 600000) * 0.10;

  }else if((income>900000) && (income <= 1200000) ){

    tax = 300000 * 0.05 + 300000 * 0.10 + (income- 900000) *0.15;

  } else if((income>1200000) && (income <= 1500000) ){
    tax = 300000 * 0.05 + 300000*0.10 +  300000 * 0.15 +(income - 1200000) * 0.20;
  }else {
    tax = 300000 * 0.05 + 300000*0.10 +  300000 * 0.15 + 300000 * 0.20 +(income- 1500000)*0.30 ;
  }
}

tax = tax + 0.04*tax ;
return tax;

}


function myFunction(event) {

  event.preventDefault();
  const income = parseFloat(document.getElementById("income").value);
  const age = parseFloat(document.getElementById("age").value);
  const ass = document.querySelector('input[name="financial-year"]:checked').value
  
  const tax = calculateIncomeTax(income, age, ass);
  
  const outputTextarea = document.getElementById("output");
  outputTextarea.value = `The income tax for an income of ${income} is: ${tax.toFixed(2)}`;
  
}

document.getElementById("submit").addEventListener("click", myFunction);

