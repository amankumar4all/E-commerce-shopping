window.addEventListener("load",init);
 function init(){
    document.querySelector("#confirmPwd").addEventListener("click",newPwd);

 }

 function newPwd(){
    var uniqueNo=document.querySelector("#uniqueNo").value;
   var adminName= document.querySelector("#adminName").value;
   var adminPwd=document.querySelector("#adminPwd").value;
   var newObject=new NewPwd(uniqueNo,adminName,adminPwd);
   productOperations.newPassword(newObject);

}