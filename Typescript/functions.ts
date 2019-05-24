function add(n1:number,n2:number):number
{
    return n1+n2;
}

let sum=function(n1:any,n2:any):string
{
    if(typeof n1=='string')
    n1=parseInt(n1);
    if(typeof n2=='string')
    n2=parseInt(n2);
    return n1+n2;
}

//lambda function
let x=(y:number):any=>{
return y;
}
console.log(x(5));


console.log(add(21,3));

console.log(sum("45",'6'));