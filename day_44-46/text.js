var singletonAccepter =(function(){
    //默认将instance赋予null
    var instance = null;
    //类：SupposeClass
    function SupposeClass( args ){
        var args = args || {};
        this.name = args.name || 'Monkey';
        this.age = args.age || 24;
    };
    SupposeClass.prototype = {
        constructor: SupposeClass,
        displayInfo: function(){
            console.log('name: ' + this.name + '   age: ' + this.age);
        }
    };
})();
console.log(singletonAccepter)
