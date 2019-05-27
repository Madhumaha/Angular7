var global_var = 20         //global variable 
class Numbers { 
   class_var:number = 30;             //class variable 
   static static_var:number = 100;         //static field 
   
   fun1():void { 
      var local_var:any = "Hello world";  
      console.log(local_var);  //local variable 
      console.log(global_var); //global variable is accessible here or any where throught the file
      
   }
   fun2():void{
       // local_var is not accessible here. 
     //  console.log(local_var); 
       
   }

} 
console.log("Global var: "+global_var)  
console.log(Numbers.static_var)   //static variable  
var obj = new Numbers(); 
console.log("class var: "+obj.class_var) //class variable is accessible with instance of the class
console.log(global_var); //global variable is accessible here or any where throught the file
obj.fun1();
