
let itemwiseQty = [
    {itemqty:1},
    {itemqty:1},
    {itemqty:1},
    {itemqty:1}
];
let totalQty = [];

function delItems(id){   
     document.getElementById(id).style.color="blue";
}

function addItems (id) {    
   let targetCart = document.getElementsByClassName("cart")[id];
   targetCart.style.display="none";
   let targertRibbon= document.getElementsByClassName("ribbon")[id];
   targertRibbon.style.display="block";
}

function increaseQty(id) {
    let inputQty=document.getElementsByTagName("input")[id].value;
    document.getElementsByTagName("input")[id].value=++inputQty;    
    updateQty(inputQty, id);   
}

function reduceQty(id){
    let inputQty=document.getElementsByTagName("input")[id].value;      
    if(inputQty>0) {
        updateQty(inputQty, id);   
        document.getElementsByTagName("input")[id].value=--inputQty;    
    }
}

function updateQty(inputQty, id) {
     console.log("itemqty Before "+itemwiseQty[id].itemqty);
    let item = {};
    item.itemqty = inputQty;
    console.log(item);
    itemwiseQty[id] = item;
    // console.log("itemqty After "+itemwiseQty[id].itemqty);    
    // itemwiseQty.forEach(element => {
    //     console.log(element);
    // });
}
