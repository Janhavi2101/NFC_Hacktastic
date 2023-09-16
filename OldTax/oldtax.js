
function calculateIncomeTax(income, age) {
  let tax = 0;
  
  if ((age <60)){
  if (income <= 250000) {
    tax = 0;
    alert(`The income tax for an income of ${income} is: ${tax}\n yayy you dont have to pay any taxes!!!`);
    
  } else if ((income>250000) &&(income <= 500000)) {
    tax = (income - 250000) * 0.05;

  } else if((income>500000) && (income <= 1000000) ){
    tax = 12500 + (income - 500000) * 0.20;
  } else {
    tax = 112500 +(income- 1000000)*0.30 ;
  }
  }
  else if ((age>=60)&&(age<80)){
    if (income <= 300000) {
      tax = 0;
      alert(`The income tax for an income of ${income} is: ${tax}\n yayy you dont have to pay any taxes!!!`);
      
    } else if ((income>300000) &&(income <= 500000)) {
      tax = (income - 300000) * 0.05;
  
    } else if((income>500000) && (income <= 1000000) ){
      tax = 200000 * 0.05 + (income - 500000) * 0.20;
    } else {
      tax = 200000 * 0.05 + 500000* 0.20 +(income- 1000000)*0.30 ;
    }
  }
  else if(age>=80){
    if (income <= 500000) {
      tax = 0;
      alert(`The income tax for an income of ${income} is: ${tax}\n yayy you dont have to pay any taxes!!!`);
      
    } else if((income>500000) && (income <= 1000000) ){
      tax =(income - 500000) * 0.20;
    } else {
      tax = 500000* 0.20 +(income- 1000000)*0.30 ;
    }
  }

  tax += 0.04*tax ;
  return tax;
}


function myFunction(event) {

  event.preventDefault();

  const income = parseFloat(document.getElementById("income").value);
  income.disabled = false; 
  const age = parseFloat(document.getElementById("age").value);
  
  const tax = calculateIncomeTax(income, age);
  
  const outputTextarea = document.getElementById("output");
  outputTextarea.value = `The income tax for an income of ${income} is: ${tax}`;
  
}


document.getElementById("submit").addEventListener("click", myFunction);