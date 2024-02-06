// let button = document.getElementById("button");

// button.addEventListener("click", Total);

// function Total(){
//     let Prix1= document.getElementById("Prix1").innerHTML;
//     let Prix2= document.getElementById("Prix2").innerHTML;
//     let  tot=Number(Prix1)+Number(Prix2)
//     console.log("Total=",tot);
//     let TotalPrice = document.getElementById("TotalP");
//     TotalPrice.innerHTML= tot;
// }

let btn_increment = document.getElementById("plus");
let btn_decrement = document.getElementById("moins");
let bot = document.getElementById("addBottonId");
let price1 = document.getElementById("price1");

//btn_increment.addEventListener("click", Increment);
btn_decrement.addEventListener("click", Decrement);
//bot.addEventListener("click", calcul);


function Increment (newId){
  let quantity = document.getElementById(newId);
  quantity.innerHTML=Number(quantity.innerHTML)+1;
}

function Decrement (newId){
  let quantity = document.getElementById(newId);
    if (Number(quantity.innerHTML)>0) {
      quantity.innerHTML=Number(quantity.innerHTML)-1;
    }
}

function calcul (QuantityId, PriceId, TotPriceId){
  
  let totalprice=document.getElementById(TotPriceId)
  let Price=document.getElementById(PriceId)
  let quantity = document.getElementById(QuantityId);
  let totality= document.getElementById("TotalAmount");
 totalprice.innerHTML=Number(Price.innerHTML)*Number(quantity.innerHTML);
 totality.innerHTML= Number(totality.innerHTML)+Number(totalprice.innerHTML);
}

function cancel (QuantityId, PriceId, TotPriceId){
  
  let totalprice=document.getElementById(TotPriceId)
  let Price=document.getElementById(PriceId)
  let quantity = document.getElementById(QuantityId);
  let totality= document.getElementById("TotalAmount");
  let cancelprice
  cancelprice=totalprice.innerHTML
  // totality.innerHTML=0;
  quantity.innerHTML=0;
 
 totalprice.innerHTML=Number(Price.innerHTML)*Number(quantity.innerHTML);
 totality.innerHTML= Number(totality.innerHTML)-cancelprice;
}

// function cancel(totalId,quantityId){
//   let totalprice= document.getElementById(totalId);
//   let quantity = document.getElementById(quantityId);
//   let totality= document.getElementById("TotalAmount");
  
//   quantity.innerHTML=0;
//   totalprice.innerHTML=Number(Price.innerHTML)*Number(quantity.innerHTML);
//  totality.innerHTML= Number(totality.innerHTML)+Number(totalprice.innerHTML);
  
  

// }

// let like=getElementById("heart")
// like.addEventListener()

function like(likeId1,likeId2){
  let likebot=document.getElementById(likeId1);
  let dislikebot=document.getElementById(likeId2);
  if((likebot.style.display==="block") && (dislikebot.style.display==="none"))

  {
    likebot.style.display="none";
    dislikebot.style.display="block";
  }
  else
  {
    likebot.style.display="block";
    dislikebot.style.display="none";
  }

}