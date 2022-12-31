function getFullName(){
    return this.firstName + " " + this.lastName;
    

}
var obj1 ={
    firstName: "Syed",
    lastName: "Alyan"
};
var obj2 = {
    firstName: "Muhammad",
    lastName: "Alyan"
}
console.log(getFullName.apply(obj2))
console.log(getFullName.apply(obj1))
