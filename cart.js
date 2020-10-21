// let itemwiseQty = [
//     {"item":0,"qty":0},
//     {"item":1,"qty":0},
//     {"item":2,"qty":0},
//     {"item":3,"qty":0}
// ];
//let itemwiseQty = {};
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

// function increaseQty(id) {
//     let inputQty=document.getElementsByTagName("input")[id].value;
//     document.getElementsByTagName("input")[id].value=++inputQty;
//     // alert(inputQty);
//     itemwiseQty.item=id;
//     itemwiseQty.qty=inputQty;
//     // itemwiseQty.push(inputQty);
//     console.log(itemwiseQty);
// }

// function reduceQty(id){
//     let inputQty=document.getElementsByTagName("input")[id].value; 
//     delete itemwiseQty.item[id];
//     delete itemwiseQty.qty[inputQty];       
//     console.log('inputQty===='+inputQty);
        
//     console.log(itemwiseQty);
//     document.getElementsByTagName("input")[id].value=--inputQty;        
//     console.log(itemwiseQty);
// }

function increaseQty(id) {
    let inputQty=document.getElementsByTagName("input")[id].value;
    document.getElementsByTagName("input")[id].value=++inputQty;    
    //console.log("itemqty Before "+itemwiseQty[id].itemqty);
    let item={};    
   // item.id=id;
    item.itemqty=inputQty;
    console.log(item);
    itemwiseQty[id]=item;
    // console.log("itemqty After "+itemwiseQty[id].itemqty);    
    // itemwiseQty.forEach(element => {
    //     console.log(element);
    // });
}

function reduceQty(id){
    let inputQty=document.getElementsByTagName("input")[id].value; 
    document.getElementsByTagName("input")[id].value=--inputQty;   
  //  console.log("itemqty Before "+itemwiseQty[id].itemqty);
    let item={};    
    // item.id=id;
     item.itemqty=inputQty;
     console.log(item);
     itemwiseQty[id]=item;
    // console.log("itemqty After "+itemwiseQty[id].itemqty);    
    // itemwiseQty.forEach(element => {
    //     console.log(element);
    // });
}