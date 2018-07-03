window.addEventListener("load",init);

function init(){
    // document.querySelector("#add").addEventListener("click",addItem);
    // document.querySelector("#add").addEventListener("click",showItems);
    document.querySelector("#btnFirstPwd").addEventListener("click",changePwd);
}

function changePwd(){
    var pwd=document.querySelector("#firstPassword").value;
    id=1;
    var pr=productOperations.checkFirstPwd(id);
    pr.then(data=>{
        console.log("data for passowrd is ",data);
        if(pwd==data.password){
           location.href="newPwd.html";
        document.querySelector("#adminChangePwd").className='show';
        }
    }).catch(err=>{
        console.log("Error is",err);
    });
    

}


function showItems(id){
    var pr=productOperations.showItems();
   
    pr.then(data=>{
      
        document.querySelector("#result").innerHTML=data.id+" "+data.name+"     "+data.price+"    "+data.url;
    }).catch(err=>{
        console.log("error is",err);
    });

}