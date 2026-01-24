const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector(".btn");


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
    let newSrc=`https://flagsapi.com/${selectedCountCode}/flat/64.png`;
    let img=el.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();  //does not perform the default action of refreeshing the page on button click
    
})