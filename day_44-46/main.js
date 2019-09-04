function Restaurant(obj){

    this.cash=obj.cash

    this.seats=obj.seats || null

    this.staff=obj.staff

}



Restaurant.prototype.hire = function(employee){

    this.staff.push(employee)

}



Restaurant.prototype.fire = function(employee){

    var index = this.staff.indexOf(employee);

    if (index >= 0) {

        this.staff.splice(index, 1);

    }

}


var Employee = function (obj) {
    this.name = obj.name;
    this.salary = obj.salary;
    this.id = obj.id;
}
var dishes = [{
    name: '鸡',
    price: 20
}, {
    name: '鸭',
    price: 15
}, {
    name: '鹅',
    price: 30
}]
var Customer = function () {

}
Customer.prototype.order = function () {
    return dishes[Math.floor(Math.random() * dishes.length)]
}
Customer.prototype.eat = function (dish) {
    console.log('顾客吃了' + '-----' + dish.name)
}
var Waiter = (function () {
    var instance = null;

    function Waiter(obj) {
        Employee.call(this, obj)
    }
    Waiter.prototype.getOrder = function (customer) {
        var dish = customer.order();
        console.log('服务员下单' + '-----' + dish.name)
        Cook.getInstance().cook(dish)
    }
    Waiter.prototype.sendFood = function (dish) {
        console.log('服务员上菜' + '-----' + dish.name)
        restaurant.seats.eat(dish)
    }
    return {
        name: 'Waiter',
        getInstance: function (obj) {
            if (instance===null) {
                instance = new Waiter(obj);
            }
            return instance
        }

    }
})()

var Cook = (function () {
    var instance = null;

    function Cook(obj) {
        Employee.call(this, obj)

    }
    Cook.prototype.cook = function (dish) {
        console.log('厨师做菜' + '-----' + dish.name)
        Waiter.getInstance().sendFood(dish)
    }
    return {
        name:'Cook',
        getInstance:function(obj){
            if (instance===null) {
                instance = new Cook(obj);
            }
            return instance
        
        }
    }
})()

var restaurant = new Restaurant({

    cash:1000,

    seats:1,

    staff:[Waiter.getInstance({id:1,name:'yeung',salary:2000}),Cook.getInstance({id:2,name:'hoo',salary:3000})]

})

var customers = []

for(var i=0;i<10;i++) customers.push(new Customer())

setInterval(()=>{

    if(customers.length!=0){

        restaurant.seats = customers.shift()
        console.log(restaurant.seats)
        dish = Waiter.getInstance().getOrder(restaurant.seats)

    }

},1000)





