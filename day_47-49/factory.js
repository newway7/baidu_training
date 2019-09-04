function Car(options) {
    this.doors = options.door || 5;
}
Car.prototype.drive = function () {
    return this.doors;
}
var AbstractVehicleFactory = (function () { //抽象工厂
    var types = {};
    return {
        getVehicle: function (type, customizations) {
            var Vehicle = types[type];
            return (Vehicle) ? (new Vehicle(customizations)) : null;
        },
        registerVehicle: function (type, Vehicle) {
            var proto = Vehicle.prototype;
            if (proto.drive) {
                types[type] = Vehicle;
            }
            return AbstractVehicleFactory;
        }
    }
})();
AbstractVehicleFactory.registerVehicle("car", Car);
var car = AbstractVehicleFactory.getVehicle("car", {
    door: 4
});
console.log(car);