const productOperations={
    
    fetchAllData(){
        var pr=new Promise((resolve,reject)=>{
            var prodRef=firebase.database().ref('productList');
            prodRef.on('value',(snapshot)=>{
                var object=snapshot.val();
                resolve (object);
            });
        });
        return pr;
    },
    fetchTopSeller(){
        var pr=new Promise((resolve,reject)=>{
            var prodRef=firebase.database().ref('topSeller');
            prodRef.on('value',(snapshot)=>{
                var object=snapshot.val();
                resolve (object);
            });
        });
        return pr;
    },
    fetchNewArrival(){
        var pr=new Promise((resolve,reject)=>{
            var prodRef=firebase.database().ref('newArrival');
            prodRef.on('value',(snapshot)=>{
                var object=snapshot.val();
                resolve (object);
            });
        });
        return pr;
    },
    saveRegistration(registration){
        firebase.database().ref('UserRegistration/'+registration.email).set(registration);
        alert("Registration Successfull");
        
    }


}