// function hello 
// (){
//     console.log( "  how are you")

// }
// setTimeout(hello,5000)



// setTimeout(()=>{

//     console.log("  fine bro")
// }
// , 10000

// )


// // let user = prompt( " enter your user name");
// let user_ =[ prompt( " enter your user name"), prompt(" enter your pasword "),
//      prompt(" enter your email id")];
// let user_ =[  " enter your user name", "enter your pasword ",
//     " enter your email id"];
 
  
//      function user_data (ab,user,nextinfo){

// setTimeout(() => {
//     document.write(ab+"===", user,"<br/>");



//     if (nextinfo) 
//         {
//             nextinfo();
        
//     }

    
// }, 1000);


//      }

//      user_data ("its your id",user_[0],()=>{

//         user_data("its your paswood",user_[1],()=>{
    
//             user_data("its your email",user_[2] )
        
//         } );
    
    
//     });
    
//      console.log(user_)
     
    //  setTimeout(() => {
    //     // Collect and print all user data at once
    //     let allData = [
    //         "It's your ID: " + user_[0],
    //         "It's your password: " + user_[1],
    //         "It's your email: " + user_[2]
    //     ];

    //     // document.write("<br/><br/>All User Data:<br/>");
    //     document.write(allData.join("<br/>"));
    // }, 1000);
    // //  document.write(all_data[])

//     let input = prompt("enter data")


//     function data(input) {
       
//         return new Promise((resolve, reject) => {

//             setTimeout(()=>{
                    

// console.log("your input is ==",input)
//  resolve(" resolve sucsees full")

        
        
//             } ,5000)
            
//         })
      


//     }
//     let rp = data();
//     rp.then((res)=>{
// console.log("i am ten statement of last")

// console.log(res)


//     })


// let user_3 =[  " enter your user name", "enter your pasword ",
//     " enter your email id"];
 
//   let data1 = user_3[0];
//   let data2 = user_3[1]
//      function user_data (ab,user,nextinfo){

//         return new Promise ((resolve,reject)=>{


//             setTimeout(() => {

             
//                console.log(ab+"===", user,"<br/>");
            
//             resolve=(" resolved sucess")
            
//                 if (nextinfo) 
//                     {
//                         nextinfo();
                    
//                 }
            
                
//             }, 1000);
            
            


//         })


//      }
//      function user_data2(user11){
//     return new Promise((resolve, reject) => {
        
//         setTimeout (()=>{

// console.log("user",user11)
// resolve("sucsees 2nmd resolve")

//         })
//         ,2000
//     })

//      }


//      let prom = user_data();
//      let prom2 = user_data2();
    
//      prom.then((res)=>{
//         console.log(data1);
//         console.log(res) ; 

//         prom.then((res)=>{

//             console.log(res) ; 
//             console.log(data2);

//         })

        

      
       


//      })


// let user_3 =[  " enter your user name", "enter your pasword ",
//     " enter your email id"];
 
// //   let data1 = user_3[0];
// //   let data2 = user_3[1]
//      function user_data (){

//         return new Promise ((resolve,reject)=>{


//             setTimeout(() => {

//            let  data1 =   user_3[0];
//              console.log(data1)
             
            
//             resolve(" resolved sucess")
            
            
                
//             }, 5000);
            
            


//         })


//      }
//      function user_data2(){
//     return new Promise((resolve, reject) => {
        
//         setTimeout (()=>{
//          let  data5 =  user_3[1];
//       console.log(data5)


// resolve("sucsees md resolve")

//         }   ,5000  );
       
//     })

//      }


//      user_data().then((res1)=>{
//         console.log(res1)
    
//         return user_data2();
//     }).then((res2)=>{
//             console.log(res2)
        
        
//         }).catch((error) => {
//         console.error("An error occurred:", error);
//     });
        
    







// let user_3 =[prompt(  " enter your user name"),prompt( "enter your pasword "),
//     " enter your email id"];
 
// //   let data1 = user_3[0];
// //   let data2 = user_3[1]
//      function user_data (){

//         return new Promise ((resolve,reject)=>{


//             setTimeout(() => {

//            let  data1 =   user_3[0];
//              console.log(data1)
             
            
//             resolve(" resolved sucess")
            
            
                
//             }, 5000);
            
            


//         })


//      }
//      function user_data2(){
//     return new Promise((resolve, reject) => {
        
//         setTimeout (()=>{
//          let  data5 =  user_3[1];
//       console.log(data5)


// resolve("sucsees md resolve")

//         }   ,5000  );
       
//     })

//      }

// async function upload() {
    
//     await user_data();
//     await user_data2();
// }


// upload();






















       
     
// let user_3 = [
//     "enter your user name",
//     "enter your password",
//     "enter your email id"
// ];

// function user_data() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data1 = user_3[0];
//             console.log(data1);
//             resolve("resolved success"); // Correctly call resolve with a string argument
//         }, 5000);
//     });
// }

// function user_data2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data5 = user_3[1];
//             console.log(data5);
//             resolve("success 2nd resolve"); // Correctly call resolve with a string argument
//         }, 5000); // Adjusted to be the same as user_data for clarity
//     });
// }

// user_data()
//     .then((res1) => {
//         console.log(res1); // Logs the result from user_data
//         return user_data2(); // Return the promise from user_data2
//     })
//     .then((res2) => {
//         console.log(res2); // Logs the result from user_data2
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });





let url = "https://jsonplaceholder.typicode.com/posts"


  const get_api = async ()=>{

    let api = await fetch(url);
    document.write(api)
  }
  get_api();



