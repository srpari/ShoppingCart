
let itemwiseQty = [
    {itemqty:1,price:0},
    {itemqty:1,price:0},
    {itemqty:1,price:0},
    {itemqty:1,price:0}
];
let totalQty = 0;
let sumAmount=0;
let price=0;
let itemwiseSum=0;


function delItems(id){   
   let targetCart = document.getElementsByClassName("cart")[id];
   targetCart.style.display="block";
   let targertRibbon= document.getElementsByClassName("ribbon")[id];
   targertRibbon.style.display="none"; 
   document.getElementsByTagName("input")[id].value="1"; 
   totalQty=totalQty-itemwiseQty[id].itemqty;
   itemwiseQty[id] = {itemqty:1,price:0};   
   document.getElementById("totalOrder").innerHTML="( "+totalQty+" Items )";
   document.getElementById("totalAmount").innerHTML="$0";
   
}

function addItems (id) {     
   totalQty++;   
   let targetCart = document.getElementsByClassName("cart")[id];
   targetCart.style.display="none";
   let targertRibbon= document.getElementsByClassName("ribbon")[id];
   targertRibbon.style.display="block";      
   price=document.getElementsByClassName("price")[id].textContent;
   sumAmount=sumAmount+parseInt(price,10);
   document.getElementById("totalOrder").innerHTML="( "+totalQty+" Items )";
   document.getElementById("totalAmount").innerHTML="$"+sumAmount;
}

function increaseQty(id) {
    ++totalQty;
    let inputQty=document.getElementsByTagName("input")[id].value;
    document.getElementsByTagName("input")[id].value=++inputQty;   
    price=document.getElementsByClassName("price")[id].textContent;
    price=parseInt(price,10); 
    updateQty(inputQty, id,price);
}

function reduceQty(id){
    let inputQty=document.getElementsByTagName("input")[id].value;      
    if(inputQty>1) {        
        --totalQty;   
        document.getElementsByTagName("input")[id].value=--inputQty;  
        price=document.getElementsByClassName("price")[id].textContent;
        price=parseInt(price,10); 
        updateQty(inputQty, id,price);
    }
}

function updateQty(inputQty, id,price) {
    console.log("itemqty Before "+itemwiseQty[id].itemqty);
    let item = {};
    item.itemqty = inputQty;
    item.price =price;
    itemwiseSum=(item.itemqty * item.price);
    item.price = itemwiseSum;  
    itemwiseQty[id] = item;
    // console.log(item); 
    // console.log(itemwiseSum);
    sumAmount = itemwiseQty.map(element => element.price).reduce((a, b) => a + b, 0);
    console.log(sumAmount); // 600 = 0 + 100 + 200 + 300
    document.getElementById("totalOrder").innerHTML="("+totalQty+" Items )";
    document.getElementById("totalAmount").innerHTML="$"+sumAmount;  
}
