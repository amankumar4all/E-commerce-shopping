const productOperations={
    addProduct(productObject){
        firebase.database().ref('productList/'+productObject.id).set(productObject);
        alert("Record Added Successfully");
    },
    checkFirstPwd(id){                                                    //aman-------------
        var pr=new Promise((resolve,reject)=>{
            var prodRef=firebase.database().ref('adminFirstLogin/'+id);
            prodRef.on('value',(snapshot)=>{
                var object=snapshot.val();
                resolve(object);
                // console.log("pwd object is",object);
            })
        })
        return pr;
    },
    newPassword(newObject){                                                //aman------------
        console.log("before db here");
        firebase.database().ref('adminfinalPwd/'+newObject.uniqueNo).set(newObject);
        alert("password changed succfully");
        // location.href="adminLogin.html";
        location.href="dashBoard.html";
     
    },
    searchById(id){
        // console.log("id is",id);
        var pr=new Promise((resolve,reject)=>{
            var itemRef =firebase.database().ref('productList/'+id);
            itemRef.on('value',(snapshot)=>{
                var data=snapshot.val();
                resolve(data);
                // console.log("search id is ",data);
            })
        })
        return pr;

    },

     // top  seller
    topProduct(productObject){
        firebase.database().ref('topSeller/'+productObject.id).set(productObject);
        alert("Data saved for Top Seller");
    },

    deleteRecord(id){
        var prodRef = firebase.database().ref('productList/'+id);
        prodRef.remove();
        return this.fetchAll();
    },
    newArrival(productObject){
        firebase.database().ref('newArrival/'+productObject.id).set(productObject);
        alert("Data saved for Top Seller");

    },
    fetchAllData(){
        var pr=new Promise((resolve,reject)=>{
            var prodRef=firebase.database().ref('productList');
            prodRef.on('value',(snapshot)=>{
                var object=snapshot.val();
                resolve (object);
            });
        });
        return pr;
    }

 }




    