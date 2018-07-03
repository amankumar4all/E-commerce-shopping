window.addEventListener("click",init);

function init(){
    document.querySelector("#add").addEventListener("click",addItems);
    document.querySelector("#savedItems").addEventListener("click",allData);
    document.querySelector("#update").addEventListener("click",addItems);


    document.querySelector("#homeLink").addEventListener("click",()=>{
        location.href="dashBoard.html";
    });
    document.querySelector("#topsellerLink").addEventListener("click",()=>{
        location.href="topSeller.html";
    });
    document.querySelector("#newarrivalLink").addEventListener("click",()=>{
        location.href="newArrival.html";
    });
    document.querySelector("#outdatedLink").addEventListener("click",()=>{
        location.href="outDated.html";
    });
    document.querySelector("#logout").addEventListener("click",()=>{
        location.href="logout.html";
    });
}

function addItems(){
    var id=document.querySelector("#itemId").value;
    var name=document.querySelector("#itemName").value;
    var price=document.querySelector("#itemPrice").value;
    var url=document.querySelector("#itemUrl").value;
    if(id && name && price && url !==null){
    var productObject=new Product(id,name,price,url);
    productOperations.topProduct(productObject);
    printRecord(productObject);
    }
    else (alert("Please fill all the value"));
}

function printRecord(productObject){
    var tbody = document.querySelector("#productlist");
    var tr = tbody.insertRow();
    var index = 0;
    
    for(let key in productObject){
       // console.log("key is",key);
       // console.log("url is",productObject[url]);
        if(key !== 'url'){
        tr.insertCell(index).innerHTML = productObject[key];
        index++;
        }
        if(key == 'url'){
            tr.insertCell(index).appendChild(createImage(productObject[key]));
            index++;
        }
        }
    //tr.insertCell(index).innerHTML = "<img src='/images/delete.png' pid="+productObject.id+" onclick="+>";
    tr.insertCell(index).appendChild(deleteImg(productObject.id));
    
}

function createImage(url){
    console.log("img called");
    //var div=document.createElement("div");
    //div.innerHTML="";
    var img=document.createElement("img");
    img.src=url;
    //div.appendChild(img);
    return img;
    
}

function deleteImg(id){
    var img = document.createElement("img");
    img.setAttribute("pid",id);
    img.src="images/delete1.png";
    img.className = 'icon';
    // img.style.width="10px";
    // img.style.height="10px";
    img.addEventListener("click",deleteRecord);
    return img;
}
function deleteRecord(){
    var id = this.getAttribute("pid");
    console.log("Id for Deletion is ",id);
    var pr = productOperations.deleteRecord(id);
    pr.then(object=>{
        console.log("After Delete Records are ",object);
        printTable(object);
    }).catch(err=>console.log("Error is ",err));
    
}
function printTable(object){
    document.querySelector("#productlist").innerHTML='';
for(let key in object){
    // console.log("Key ",key);
   printRecord(object[key]);
}
}
function allData(){
    var pr=productOperations.fetchAllData();
    pr.then(object=>{
        printTable(object);
}).catch(err=>console.log("error is",err));
}