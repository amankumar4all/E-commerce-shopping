window.addEventListener("load",init);


function init(){
    document.querySelector("#home").addEventListener("load",showAll());
    document.querySelector("#home").addEventListener("click",showAll);
    document.querySelector("#topSeller").addEventListener("click",showTopSeller)
    document.querySelector("#newArrival").addEventListener("click",showNewArrival);
    document.querySelector("#register").addEventListener("click",register);
    
}

function showAll(){
    document.querySelector("#blank").innerHTML="";
    console.log("Fetching Data");
    var pr=productOperations.fetchAllData();
    pr.then(object=>{
        printTable(object);
}).catch(err=>console.log("error is",err));
}
function showTopSeller(){
    document.querySelector("#blank").innerHTML="";

    console.log("Fetching data");
    var pr=productOperations.fetchTopSeller();
    pr.then(object=>{
        printTable(object);
}).catch(err=>console.log("error is",err));
}

function showNewArrival(){
    document.querySelector("#blank").innerHTML="";

    console.log("Fetching data");
    var pr=productOperations.fetchNewArrival();
    pr.then(object=>{
        printTable(object);
}).catch(err=>console.log("error is",err));
}


function printTable(object){
    // document.querySelector("#productList").innerHTML="";
    console.log("object is",object);
    for(let key in object){
    // console.log("Key ",key);
        printRecord(object[key]);
}

function printRecord(productObject){
    var tbody = document.querySelector(".productList");
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
    
    tr.insertCell(index).appendChild(cartImg(productObject.id));
    
}
function cartImg(){
    var img=document.createElement("img");
    img.src="images/cart.png";
    return img;
}

function createImage(url){
    var img=document.createElement('img');
    img.src=url;
    console.log("Image created");
    return img;
}

function register(){
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    var registration=new Registration(email,password);
    var pr= productOperations.saveRegistration(registration);
    pr.then()

}

}













