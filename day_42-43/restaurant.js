function Restaurant(m){
    this.cash=m.cash;
    this.seats=m.seats;
    this.staff=m.staff;

}

Restaurant.prototype.hire=function(newStaff){
    this.staff.push(newStaff)
    

}

Restaurant.prototype.fire=function(staff){
    for(let i=0;i<this.staff.length;i++){
        if(this.staff[i]==staff){
            this.staff.splice(i,1)
        }
    }
}

function Staff(ID,name,salary){
    this.ID=ID;
    this.name=name;
    this.salary=salary;
}
Staff.prototype.work=function(){

}

function Waiter(ID,name,salary){
    Staff.call(this,ID,name,salary)
}
Waiter.prototype=Object.create(Staff.prototype);
Waiter.prototype.constructor=Waiter;
Waiter.prototype.completeJob=function(arr){
    if(arguments.length>1){

    }else if(arguments.length===1){

    }
}
function Cook(ID,name,salary){
    Staff.call(this,ID,name,salary)
}
Cook.prototype=Object.create(Staff.prototype);
Cook.prototype.constructor=Cook;
Cook.prototype.completeJob=function(){

}

function Customer(){

}
Customer.prototype.order=function(){

}
Customer.prototype.eat=function(){

}
function Food(name,cost,price){
    this.name=name;
    this.cost=cost;
    this.price=price
}
var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);


