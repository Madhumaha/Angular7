interface UserInterface
{
    username:string;
    city:string;
    age:number;
    register();
    display();
}


class UserData implements UserInterface
{
    username:string;
    city:string;
    age:number;
   constructor(name:string,city:string,age:number)
    {
        this.username=name;
        this.city=city;
        this.age=age;
    }

     register()
    {
        console.log(name +" is registered");
    }
    display()
    {
        console.log(" User details are  \n Name : "+this.username+"\n City : "+this.city+" \n Age : "+this.age+"\n");
    }
}

class Emp extends UserData
{
    empid:number;
    constructor(roll:number,username:string,city:string,age:number)
    {
        super(username,city,age);
        this.empid=roll;
    }
    display()
    {
        console.log(" Emp details are  \n Empid : "+this.empid+"\n Name : "+this.username+"\n City : "+this.city+" \n Age : "+this.age+"\n");
    }
}

let ud1:UserData=new UserData("Peter","Bangalore",25);

let user2:UserData=new Emp(1,"Smith","Mysore",30);

let e1=new Emp(2,"John","Kolar",45);

ud1.display();
user2.display();
e1.display();

