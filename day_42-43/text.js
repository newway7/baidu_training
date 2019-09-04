var Singleton = function(name) {
    this.name = name;
};

Singleton.prototype.getName = function() {
    console.log('this.name'+this.name);
};

//利用闭包的特性创建单例,同时符合惰性单例的特性
Singleton.getInstance = (function() {
    var instance;
    
    return function(name){
        console.log('instance'+instance)
        if (!instance) {
            instance = new Singleton(name);
        }
        return instance; 
    }
})();

var a = Singleton.getInstance('seven1');

var b = Singleton.getInstance('seven2');
console.log(a);

console.log(b)


