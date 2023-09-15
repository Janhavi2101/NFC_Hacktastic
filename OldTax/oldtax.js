const income = document.querySelector('income');


function calculateIncomeTax(income) {
  let tax = 0;
  const age =document.getElementById("age");
  const res =document.getElementById("residential");
  
  if ((age <60)){
  if (income <= 250000) {
    tax = 0;
    alert(`The income tax for an income of ${income} is: ${tax}\n yayy you dont have to pay any taxes!!!`);
    
  } else if ((income>250000) &&(income <= 500000)) {
    tax = (income - 250000) * 0.05;
  } else if((income>500000) && (income <= 1000000) ){
    tax = 250000 * 0.05 + (income - 500000) * 0.20;
  } else {
    tax = 250000 * 0.05 + 500000* 0.20 +(income- 100000)*0.30 ;
  }
  }
  else if ( res= Residential)
  tax = tax + 0.04*tax ;
  return tax;
}


function myFunction() {
  const income = parseFloat(document.getElementById("income").value);
  const tax = calculateIncomeTax(income);
  
  const outputTextarea = document.getElementById("output");
  (outputTextarea.value) = `The income tax for an income of ${income} is: ${tax.toFixed(2)}`;
 
}
document.getElementById("submit").addEventListener("click", myFunction);

