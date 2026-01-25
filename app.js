const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector(".btn");
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")

for (select of dropdowns){    // for of loops used for iterating NodeLists , we use this loop to handle the working of dropdown menus
    for(let currcode in countryList){   //for in used to iterate over onjects
        let newOpt=document.createElement('option');
        newOpt.innerText=currcode;                       //we are selecting all the currency codes from  tthe list and adding them to the dropdown lists in the html file
        newOpt.value=currcode;
        if(select.name==="from" && currcode==="USD"){
            newOpt.selected="selected";
        }
        if(select.name==="to" && currcode==="INR"){
            newOpt.selected="selected";
        }
        select.append(newOpt);
    }
    
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);               //target tells us where  the change has been made
    })
}

const updateFlag=(el)=>{
    // console.log(el)   //it return the select attribute where the change occurs
    let selectedCurrCode= el.value;
    let selectedCountCode= countryList[selectedCurrCode];
    if (!selectedCountCode) return; // Skip if no country code
    let newSrc=`https://flagsapi.com/${selectedCountCode}/flat/64.png`;
    let img=el.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();  //does not perform the default action of refreeshing the page on button click
    let amount=document.querySelector(".amount input");
    let amtValue=amount.value;
    if(amtValue==="" || amtValue<1){
        alert("Enter a valid value");
        amtValue=1;
        amount.value="1";
    }

    const URL = `${BASE_URL}${fromCurr.value.toUpperCase()}`;
    let response = await fetch(URL);
    let data = await response.json();
    if (!response.ok) {
        alert("Failed to fetch exchange rate");
        return;
    }
    let rate = data.rates[toCurr.value.toUpperCase()];
    if (!rate) {
        alert("Exchange rate not available for selected currencies");
        return;
    }
    let convertedAmount = amtValue * rate;
    document.querySelector(".msg").innerText = `${amtValue} ${fromCurr.value} = ${convertedAmount.toFixed(2)} ${toCurr.value}`;
})