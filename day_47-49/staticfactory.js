var Interface = function (name, methods) { //name：接口名字
    if (arguments.length < 2) {
        alert("必须是两个参数")
    }
    this.name = name;
    this.methods = []; //定义一个空数组装载函数名
    for (var i = 0; i < methods.length; i++) {
        if (typeof methods[i] != "string") {
            alert("函数名必须是字符串类型");
        } else {
            this.methods.push(methods[i]);
        }
    }
};
Interface.ensureImplement = function (object) {
    if (arguments.length < 2) {
        throw new Error("参数必须不少于2个")
        return false;
    }
    for (var i = 1; i < arguments.length; i++) {
        var inter = arguments[i];
        //如果是接口就必须是Interface类型
        if (inter.constructor != Interface) {
            throw new Error("如果是接口类的话，就必须是Interface类型");
        }
        //判断接口中的方法是否全部实现
        //遍历函数集合
        for (var j = 0; j < inter.methods.length; j++) {
            var method = inter.methods[j]; //接口中所有函数

            //object[method]传入的函数
            //最终是判断传入的函数是否与接口中所用函数匹配
            if (!object[method] || typeof object[method] != "function") { //实现类中必须有方法名字与接口中所用方法名相同
                throw new Error("实现类中没有完全实现接口中的所有方法")
            }
        }
    }
}

/*创建extend函数为了程序中所有的继承操作*/
//subClass:子类  superClass：超类
function extend(subClass, superClass) {
    //1，使子类原型属性等于父类的原型属性

    //初始化一个中间空对象，目的是为了转换主父关系
    var F = function () {};
    F.prototype = superClass.prototype;
    //2， 让子类继承F
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    //3，为子类增加属性 superClass ==》原型链的引用
    subClass.superClass = superClass.prototype;
    //4，增加一个保险，就算你的原型类是超类（Object）那么也要把你的构造函数级别降下来
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}


(function () {
    //(2)接口调用
    var Pet=new Interface("Pet",["eat","run","sing","register"]);

    //（1）基类  分析后有共同的提出来作为基类
    function basePet() {
        this.register=function () {
            document.write("宠物登记。。。。<br>");
        };
        this.eat=function () {
            document.write("宠物吃饭。。。。<br>");
        }
    }
    //（3）实现类  继承基类+接口实现
    function Dog() {
        Dog.superClass.constructor.call(this);//继承父类
        //实现接口
        this.run=function () {
            document.write("小狗跑......<br>")
        }
        this.sing=function () {
            document.write("小狗唱歌......<br>")
        }
    }
    function Cat() {
        Cat.superClass.constructor.call(this);//继承父类
        //实现接口
        this.run=function () {
            document.write("小猫跑......<br>")
        }
        this.sing=function () {
            document.write("小猫唱歌......<br>")
        }
    }
    function Pig() {
        Pig.superClass.constructor.call(this);//继承父类
        //实现接口
        this.run=function () {
            document.write("小猪跑......<br>")
        }
        this.sing=function () {
            document.write("小猪唱歌......<br>")
        }
    }
    function Bird() {
        Bird.superClass.constructor.call(this);//继承父类
        //实现接口
        this.run=function () {
            document.write("小鸟跑......<br>")
        };
        this.sing=function () {
            document.write("小鸟唱歌......<br>")
        }
    }
     //继承
    extend(Dog,basePet);//宠物的继承
    extend(Cat,basePet);
    extend(Pig,basePet);
    extend(Bird,basePet);

    //（4）把核心商店抽取出来
    var petShop=function () {};
       petShop.prototype={//模拟抽象类  需要被子类覆盖
           getPet:function (kind){
               var pet=this.getpet(kind);
               pet.eat();
               pet.register();
               return pet;
           },
           getpet:function (model){
             throw  new Error("该类是抽象类，不能实例化")

           }
       };
         //（5）商店1 利用子类来满足之前的需求（多态）
    var oneShop=function () { }
       extend(oneShop,petShop);//继承
        //覆写方法
      oneShop.prototype.getpet=function (model) {
          //宠物对象
          var pet;
          //宠物种类
          switch (model){
              case  'dog':
                  pet=new Dog();
                  break;
              default:
                  pet=new Bird();
          }
          //验证接口
          Interface.ensureImplement(pet,Pet);//判断pet对象是否全部实行接口Pet里面全部的方法
          pet.eat();
          pet.register();
          return pet;
      };

        //（5）商店2
    twoShop=function () {};
    extend(twoShop,petShop);//商店的继承
    //覆写方法
      twoShop.prototype.getPet=function (model) {
          //宠物对象
          var pet;
          //宠物种类
          switch (kind){
              case  'pig':
                  pet=new Pig();
                  break;
              default:
                  pet=new Bird();
          }
          //验证接口
          Interface.ensureImplement(pet,Pet);//判断pet对象是否全部实行接口Pet里面全部的方法
          pet.eat();
          pet.register();
          return pet;
      };
      //（6）使用  子类对父类的实例化
    var jim=new oneShop();//开宠物店
     var pig= jim.getpet("dog");//从宠物店得到宠物
        pig.run();//宠物功能
        pig.sing()

})();

















