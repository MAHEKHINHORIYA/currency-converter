const baseurl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"

const btn  = document.querySelector(".get");
const fromcurrency  = document.querySelector(".from select");
const tocurrency = document.querySelector(".to select");

let mssg = document.querySelector(".mssg");



btn.addEventListener("click" , async(evt) => {
    evt.preventDefault();
    let amnt   = document.querySelector(".amount input");
    let amntvalue = amnt.value;
    if (amntvalue ==="" || amntvalue < 1 ) {
        amntvalue = 1;
        amnt.value = 1;
    } else{console.log(amntvalue);}


    console.log(fromcurrency.value.toLowerCase(), tocurrency.value.toLowerCase());
    const url = `${baseurl}${fromcurrency.value.toLowerCase()}/${tocurrency.value.toLowerCase()}.json` ; 

    let response  = await fetch(url);
    let data =await response.json();
    let rate = data[tocurrency.value.toLowerCase()];
    console.log(rate);

    let finalamnt  = amnt.value * rate ; 

    mssg.innerText =`${amntvalue} ${fromcurrency.value} = ${finalamnt} ${tocurrency.value}`
    
})