
let itemwiseQty = [
    {itemqty:1,price:0},
    {itemqty:1,price:0},
    {itemqty:1,price:0},
    {itemqty:1,price:0}
];
let totalQty = 0;
let sumAmount=0;
let price=0;


function delItems(id){   
     document.getElementById(id).style.color="blue";
}

function addItems (id) {     
    totalQty++;   
   let targetCart = document.getElementsByClassName("cart")[id];
   targetCart.style.display="none";
   let targertRibbon= document.getElementsByClassName("ribbon")[id];
   targertRibbon.style.display="block";      
   price=document.getElementsByClassName("price")[id].textContent;
   document.getElementById("totalOrder").innerHTML="( "+totalQty+" Items )";
   document.getElementById("totalAmount").innerHTML="$"+price;
}

function increaseQty(id) {
    ++totalQty;
    let inputQty=document.getElementsByTagName("input")[id].value;
    document.getElementsByTagName("input")[id].value=++inputQty;   
    updateQty(inputQty, id);  
}

function reduceQty(id){
    let inputQty=document.getElementsByTagName("input")[id].value;      
    if(inputQty>1) {        
    --totalQty;   
        document.getElementsByTagName("input")[id].value=--inputQty;  
        updateQty(inputQty, id);    
    }
}

function updateQty(inputQty, id) {
    console.log("itemqty Before "+itemwiseQty[id].itemqty);
    let item = {};
    item.itemqty = inputQty;

    price=document.getElementsByClassName("price")[id].textContent;
    item.price = price;
    itemwiseQty[id] = item;
    
    // sumAmount=item.itemqty * 10;
    sumAmount=item.itemqty * item.price;
    console.log(item); 
    // console.log("itemqty After "+itemwiseQty[id].itemqty);    
    // itemwiseQty.forEach(element => {
    //     console.log(element);
    // });
    document.getElementById("totalOrder").innerHTML="( "+totalQty+" Items )";
    document.getElementById("totalAmount").innerHTML="$"+sumAmount;
}
