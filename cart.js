
let itemwiseQty = [
    {itemqty:0,price:0},
    {itemqty:0,price:0},
    {itemqty:0,price:0},
    {itemqty:0,price:0}
];
let totalQty = 0;
let sumAmount=0;
let price=0;
let itemwiseSum=0;
let cartQty =0;


function delItems(id){   
   let targetCart = document.getElementsByClassName("cart")[id];
   targetCart.style.display="block";
   let targertRibbon= document.getElementsByClassName("ribbon")[id];
   targertRibbon.style.display="none"; 
   document.getElementsByTagName("input")[id].value="1"; 
     itemwiseQty[id].itemqty=0;
     itemwiseQty[id].price=0;
   displyOrdersummary();   
   document.getElementById("orderItems").innerHTML=--cartQty +" Items";   
}

function addItems (id) {   
   let targetCart = document.getElementsByClassName("cart")[id];
   targetCart.style.display="none";
   let targertRibbon= document.getElementsByClassName("ribbon")[id];
   targertRibbon.style.display="block";      
   price=document.getElementsByClassName("price")[id].textContent;
   let inputQty=document.getElementsByTagName("input")[id].value;
   itemwiseQty[id].itemqty=parseInt(inputQty,10);;
   itemwiseQty[id].price=parseInt(price,10);
   displyOrdersummary();   
   document.getElementById("orderItems").innerHTML=++cartQty +" Items";   
}

function increaseQty(id) {
    let inputQty=document.getElementsByTagName("input")[id].value;
    document.getElementsByTagName("input")[id].value=++inputQty;   
    price=document.getElementsByClassName("price")[id].textContent;
    price=parseInt(price,10); 
    updateQty(inputQty, id,price);
}

function reduceQty(id){
    let inputQty=document.getElementsByTagName("input")[id].value;      
    if(inputQty>0) {        
        document.getElementsByTagName("input")[id].value=--inputQty;  
        price=document.getElementsByClassName("price")[id].textContent;
        price=parseInt(price,10); 
        updateQty(inputQty, id,price);
    }
}

function updateQty(inputQty, id,price) {
   // console.log("itemqty Before "+itemwiseQty[id].itemqty);
   
    let item = {};
    item.itemqty = inputQty;
    item.price =price;
    itemwiseSum=(item.itemqty * item.price);
    item.price = itemwiseSum;  
    itemwiseQty[id] = item;
    displyOrdersummary();  
}

function displyOrdersummary() {
    sumAmount = itemwiseQty.map(element => element.price).reduce((a, b) => a + b, 0);
   // console.log("sumAmount====="+sumAmount); // 600 = 0 + 100 + 200 + 300    
   totalQty = itemwiseQty.map(element => element.itemqty).reduce((a, b) => a + b, 0);
  //  console.log("sumQuantity====="+tempQty); // 600 = 0 + 100 + 200 + 300
    // itemwiseQty.forEach((element,index) => {
    //     console.log("itemwiseQty===="+element.itemqty);
    //     console.log("itemwisePrice===="+element.price);
    // });
    document.getElementById("totalOrder").innerHTML = "(" + totalQty + " Items )";
    document.getElementById("totalAmount").innerHTML = "$" + sumAmount;
}

