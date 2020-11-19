// function calculate(param1,param2,callback){
//     //default operation
//     result = param1 + param2
    
//     // callback is function ?
//     if (typeof callback == 'function'){
//      result= callback(param1,param2)
//     }
    
//     return result
//   }
// let a = calculate(2000,4000, function(x,y){return "$ " + (x + y) }) 
// let b = calculate(7000,2000, function(x,y){return "Rp " + (x * y) }) 
// console.log(a) // $ 6000
// console.log(b) // $ 14000

// ======
// contoh callback pada ajax
// function requestAjax(callback){

//     // inisialisasi library XML Http Request
//     var xhr = new XMLHttpRequest();
  
//     // set target request
//     xhr.open('GET','https://jsonplaceholder.typicode.com/users/1')
  
//     // terapkan callback
//     xhr.onload = function(){
//       if(xhr.status === 200){
//         callback(xhr.responseText)
//       }else{
//         callback('Failed')
//       }
//     }
  
//     // mulai request
//     xhr.send()
    
//   }
  
//   function showResult(data){
//     if (data != 'Failed'){
//       //tampilkan Data
//       data=JSON.parse(data)
//       console.log(data)
//     }
//   }
  
//   requestAjax(showResult)

//   =====
// contoh membeca file secara asynchronous
function readFileCallback(err,data){
    if (err){
      console.log('Error Read File :' + err);
    }else{
      console.log(data.toString())
    }
  }
  var data = fs.readFile('hello.md',readFileCallback)