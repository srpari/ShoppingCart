
let itemwiseQty = [
    {itemqty:0,price:0,discount:0},
    {itemqty:0,price:0,discount:0},
    {itemqty:0,price:0,discount:0},
    {itemqty:0,price:0,discount:0}
];
let totalQty = 0;
let inputQty =0;
let sumAmount=0;
let price=0;
let itemwiseSum=0;
let cartQty =0;

//calculate discounts
let discount=0;
let totalDiscount=0;
let itemwiseDiscount=0;
let tempdiscount=0;

function delItems(id){   
   let targetCart = document.getElementsByClassName("cart")[id];
   targetCart.style.display="block";
   let targertRibbon= document.getElementsByClassName("ribbon")[id];
   targertRibbon.style.display="none"; 
   document.getElementsByTagName("input")[id].value="1"; 
     itemwiseQty[id].itemqty=0;
     itemwiseQty[id].price=0;  
     itemwiseQty[id].discount=0;   
    displyOrdersummary();   
    document.getElementById("orderItems").innerHTML=--cartQty +" Items";   
}

function addItems (id) {   
   let targetCart = document.getElementsByClassName("cart")[id];
   targetCart.style.display="none";
   let targertRibbon= document.getElementsByClassName("ribbon")[id];
   targertRibbon.style.display="block";      
   price=document.getElementsByClassName("price")[id].textContent;
   inputQty=document.getElementsByTagName("input")[id].value;
   discount=document.getElementsByClassName("discount")[id].textContent;
   discount = isNaN(parseInt(discount)) ? 0 : parseInt(discount);
    tempdiscount = parseInt(price,10)*(discount/100);
    console.log("The tempdiscount===>"+tempdiscount);
    
   itemwiseQty[id].itemqty=parseInt(inputQty,10);;
   itemwiseQty[id].price=parseInt(price,10);
   itemwiseQty[id].discount=tempdiscount;

   displyOrdersummary();   
   document.getElementById("orderItems").innerHTML=++cartQty +" Items";   
}

function increaseQty(id) {
    inputQty=document.getElementsByTagName("input")[id].value;
    document.getElementsByTagName("input")[id].value=++inputQty;   
    price=document.getElementsByClassName("price")[id].textContent;
    price=parseInt(price,10); 
    discount=document.getElementsByClassName("discount")[id].textContent;
    discount = isNaN(parseInt(discount)) ? 0 : parseInt(discount);
   
    updateQty(inputQty, id,price,discount);
}

function reduceQty(id){
    inputQty=document.getElementsByTagName("input")[id].value;      
    if(inputQty>0) {        
        document.getElementsByTagName("input")[id].value=--inputQty;  
        price=document.getElementsByClassName("price")[id].textContent;
        price=parseInt(price,10); 
        discount=document.getElementsByClassName("discount")[id].textContent;
        discount = isNaN(parseInt(discount)) ? 0 : parseInt(discount);
        updateQty(inputQty, id,price,discount);
    }
}

function updateQty(inputQty, id,price,discount) {
   // console.log("itemqty Before "+itemwiseQty[id].itemqty);
   
    let item = {};
    item.itemqty = inputQty;    
    // price = parseInt(price,10) - item.discount;
    item.price =price;   
    itemwiseSum=(item.itemqty * item.price);

    item.discount = discount;
    
   let tempdisc = Math.floor(item.price*(item.discount/100));
    item.discount = tempdisc;
    itemwiseDiscount =(item.itemqty * item.discount);
    
    console.log("tempdisc ===="+  tempdisc);
    console.log("Itemwise total===="+  itemwiseDiscount);

    item.discount = itemwiseDiscount;      
    item.price = itemwiseSum;  
    
    itemwiseQty[id] = item;
    
    displyOrdersummary();  
}

function displyOrdersummary() {
   sumAmount = itemwiseQty.map(element => element.price).reduce((a, b) => a + b, 0);
   // console.log("sumAmount====="+sumAmount); // 600 = 0 + 100 + 200 + 300    
   totalQty = itemwiseQty.map(element => element.itemqty).reduce((a, b) => a + b, 0);
  //  console.log("sumQuantity====="+tempQty); // 600 = 0 + 100 + 200 + 300
  totalDiscount = itemwiseQty.map(element => element.discount).reduce((a, b) => a + b, 0);
   //  console.log("sumQuantity====="+tempQty); // 600 = 0 + 100 + 200 + 300
    // itemwiseQty.forEach((element,index) => {
    //     console.log("itemwiseQty===="+element.itemqty);
    //     console.log("itemwisePrice===="+element.price);
    // });
    document.getElementById("totalOrder").innerHTML = "( " + totalQty + " Items )";
    document.getElementById("totalAmount").innerHTML = "$" + sumAmount;
    document.getElementById("totalDiscount").innerHTML ="$" + totalDiscount;
    document.getElementById("yourPayment").innerHTML = "$" + (sumAmount-totalDiscount);
}

