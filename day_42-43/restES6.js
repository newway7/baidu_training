class Restaurant {
    constructor(m) {
        this.cash = m.cash;
        this.seats = m.seats;
        this.staff = m.staff;
    }
    hire(newStaff) {
        this.staff.push(newStaff)
    }
    fire(staff) {
        this.staff.filter(function (element) {
            return element != staff

        })

    }
}

class Staff {
    constructor(ID, name, salary) {
        this.ID = ID;
        this.name = name;
        this.salary = salary;
    }
    work() {

    }
}

class Waiter extends Staff {
    constructor(ID, name, salary) {
        super(ID, name, salary);
    }
    work() {
        super.work();
    }
    completeJob(arr) {
        if (arguments.length > 1) {

        } else if (arguments.length === 1) {

        }
    }
}

class Cook extends Staff {
    constructor(ID, name, salary) {
        super(ID, name, salary);
    }
    work() {
        super.work();
    }
    completeJob(){

    }
}

class Customer{

    constructor(){

    }
    eat(){

    }
    order(){

    } 
}
class Food{
    constructor(name,cost,price){
        this.name=name;
        this.cost=cost;
        this.price=price
    }

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





