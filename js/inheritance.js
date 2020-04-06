window.onload = function(){
    "use strict";
//Q1:
   let person = {
       name: "", 
       dateOfBirth: "",
       salary : 0,
       hireDate: new Date(),
       jobTitle:"",
       doJob: function(jobTitle){
        this.jobTitle=jobTitle;
       },
       getName: function(){
           return this.name;
       },
       setName: function(name){
            this.name=name;
       },

       getPersonInfo:function(){
        console.log(`The Person's name is ${this.name}`);
        console.log(`${this.name} was born on ${this.dateOfBirth}`);
       },
       getEmpInfo: function(){
        console.log(`${this.name} is a ${this.jobTitle} who earns $${this.salary}`);
        
       }
    };



let p1 = Object.create(person);
p1.setName("John");
p1.dateOfBirth = "December 10th, 1998";
p1.getPersonInfo();

// Q2:


let employee = Object.create(person);

employee.setName("Anna");
employee.salary = 249995.50;
employee.doJob("programmer")

employee.getEmpInfo();

//Q3:

function Person(name,dateOfBirth){
    this.name = name;
    this.dateOfBirth=dateOfBirth;
}
Person.prototype.toString = function(){
    console.log(`{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`);
    
}
let person1 = new Person("john","November 10, 1985");
person1.toString();

//Q4:
// see on the login and product form
}