window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = "Loan Amount!";
  document.getElementById("loan-amount").dataset.text = "Loan Amount!";
  document.getElementById("loan-years").value = "Loan Years!";
  document.getElementById("loan-years").dataset.text = "Loan Years!";
  document.getElementById("loan-rate").value = "Loan Interest Rate!";
  document.getElementById("loan-rate").dataset.text = "Loan Interest Rate!";
  inputEventListeners();
}

function inputEventListeners ()
{
  const allInputs = document.querySelectorAll("input");

  for (let i = 0; i<allInputs.length; i++)
  {
    allInputs[i].addEventListener('mouseover', function(e) 
    {
      if (e.target.value === e.target.dataset.text)
      {
        
        e.target.value = '';
      }
    });
  
    allInputs[i].addEventListener('blur', function(e) 
    {
      if (e.target.value === "")
      {
        e.target.value = e.target.dataset.text;
      }
    });
  }
}

// Get the current values from the UI
// Update the monthly payment
function update() 
{
  let monthlyPayment = calculateMonthlyPayment(getCurrentUIValues())
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) 
{
  let principle = values.amount;
  let periodicRate = (values.rate/100)/12;
  let payments = (values.years*12);
  let monthlyPayment = ((principle*periodicRate)/(1-Math.pow((1+periodicRate), -payments)));
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) 
{
  console.log(monthly);
  document.getElementById("monthly-payment").innerText = monthly;
}