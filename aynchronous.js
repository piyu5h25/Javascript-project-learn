// sync and aynchronous kya hota hai?
// 1->2->3->4->5->6->7->8->9->10
//  saare paralle me chlege usse aynchronous kehte hai

//  js is not asynchronus
//  js is a single threaded language
//  js is a synchronous language
 console.log("hello");
 console.log("hello2");
 setTimeout(function(){
    console.log("hello3");
    
 },0);
 console.log("hello4");