window.addEventListener("click",init);

function init(){
    document.querySelector("#add").addEventListener("click",addItems);
    document.querySelector("#search").addEventListener("click",searchItems);
    // document.querySelector("#table").className='hide';
    // document.querySelector("#searchResultDiv").style.display="none";
    document.querySelector("#savedItems").addEventListener("click",allData);
    document.querySelector("#showAll").addEventListener("click",allData);
    document.querySelector("#update").addEventListener("click",addItems);
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
function clear(){
    document.querySelector("#NAVContent").innerHTML="";
}
function displayHome(){
             document.querySelector("#home").style.display="block";

}

function addItems(){
    var id=document.querySelector("#itemId").value;
    var name=document.querySelector("#itemName").value;
    var price=document.querySelector("#itemPrice").value;
    var url=document.querySelector("#itemUrl").value;
    if(id && name && price && url !==null){
    var productObject=new Product(id,name,price,url);
    productOperations.addProduct(productObject);
    printItems(productObject);
    }
    else(alert("Please fill all the inputs"));
}


function printItems(productObject){
    document.querySelector("#table").className='show';

    var tbody = document.querySelector("#productList");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in productObject){
        if(key !== 'url'){
            tr.insertCell(index).innerHTML = productObject[key];
            index++;
            }
            if (key =='url'){
                tr.insertCell(index).appendChild(createImage(productObject[key]));
                index++;
            }
    }
    //tr.insertCell(index).innerHTML = "<img src='/images/delete.png' pid="+productObject.id+" onclick="+>";
    tr.insertCell(index).appendChild(createIcon(productObject.id));
    
}
function createImage(url){
    var img=document.createElement('img');
    img.src=url;
    console.log("Image created");
    return img;
}

function createIcon(id){
    var img=document.createElement("img");
    img.setAttribute("itemId",id);
    img.src="images/delete1.png";
    img.className='icon';
    img.addEventListener("click",deleteRecord);
    return img;
}


function deleteRecord(){
    var id = this.getAttribute("pid");
    console.log("Id for Deletion is ",id);
    var pr = productOperations.deleteRecord(id);
    pr.then(object=>{
        // console.log("After Delete Records are ",object);
        printTable(object);
    }).catch(err=>console.log("Error is ",err));
    
}
function printTable(object){
    document.querySelector("#productList").innerHTML='';
for(let key in object){
    // console.log("Key ",key);
   printItems(object[key]);
}
}

function searchItems(){
    console.log("searching...");
    document.querySelector("#productList").innerHTML="";
    var id=document.querySelector("#itemId").value;
    var pr=productOperations.searchById(id);
    pr.then(data=>{
        console.log("data found is",data);
        document.querySelector("#searchResultDiv").style.display="block";
         var parent = document.querySelector("#searchResult").innerHTML="Item Id="+data.id+"   Item Name="+data.name+"    Item Price is"+data.price;
        searchImage(data.url);
    }).catch(err=>{
        console.log("error is",err);
    })

}
function searchImage(url){
      document.querySelector("#resultIMAGE").innerHTML="";
      var img=  document.createElement('img');
      img.src=url;
      var div=document.querySelector("#resultIMAGE");
      div.appendChild(img);

}
function allData(){
    var pr=productOperations.fetchAllData();
    pr.then(object=>{
        printTable(object);
}).catch(err=>console.log("error is",err));
}