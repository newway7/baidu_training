function extend(subType, superType) {
    function F(){};
    F.prototype = superType.prototype;//将超类原型传递给空函数
 
    //var prototype = new F();//实例化空函数，减小内存。

    subType.prototype = new F();//实例化空函数，减小内存。;
    prototype.constructor = subType;

  }
 
  //超类方法
  function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  SuperType.prototype.sayName = function() {
    return this.name;
  }
 
  //子类方法
  function SubType(name, age) {
    SuperType.call(this, name);//属性方法的中转,不能继承SuperType的原型对象的成员
    this.age = age;
  }
 console.log(SubType.prototype.constructor)
  //继承超类的原型

  
 
  var instance1 = new SubType("Shelby");
  var instance2 = new SubType("Court", 28);
 
  instance1.colors.push('black');
 
  console.log(instance1.colors); //red,blue,green,black
  console.log(instance2.colors); //red,blue,green
 
  console.log(instance1.sayName); //true
  console.log(instance1 instanceof SuperType); //true