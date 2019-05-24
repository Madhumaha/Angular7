function showuser(user:{name:string,city:string,age:number}):string
{
    return "User details are \n"+"name : "+user.name+"\n city : "+user.city+"\n age : "+user.age;
}

let user1={name:"John",city:"Mysore",age:50};

console.log(showuser(user1));

interface userdetails
{
    name:string;
    city:string;
    age:number;
}

let showPerson=function(user:userdetails):string
{
    return "User details are \n"+"name : "+user.name+"\n city : "+user.city+"\n age : "+user.age;
}

let person={name:"Peter",city:"Bangalore",age:56};

console.log(showPerson(person));