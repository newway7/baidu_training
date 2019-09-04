/**

 * @file 主程序

 */



// 判断座位<--------------+

// 顾客入座               |

// 顾客点菜-------+       |

//                |       |

// 服务员记录点菜<-+       |

// 通知厨师               |

// 做菜                   |

// 完成做菜-------+       |  

//               |       |        

// 通知服务员<----+       |       

// 上菜                   |                  

// 顾客吃                 |                

// 顾客吃完               |

// 顾客队列pop------------+



// 开业餐厅


const restaurant=Restaurant.getInstance({
    cash:10000,
    seats:1,
    staffList:[]
});

const menu = Menu.getInstance([

    {

        name:'鱼香肉丝',

        cost:1,

        price:2,

        takeTime:1

    },

    {

        name:'宫保鸡丁',

        cost:1,

        price:3,

        takeTime:2

    },

    {

        name:'佛跳墙',

        cost:1,

        price:4,

        takeTime:3

    },

    {

        name:'火锅',

        cost:1,

        price:5,

        takeTime:4

    }

])
//单例厨师；
const cook_1 = Cook.getInstance({

    name:"范真香",

    wages:1

})
//单例服务生；
const waiter_1 = Waiter.getInstance({

    name:"福勿郝",

    wages:2

})

restaurant.hire(waiter_1);

restaurant.hire(cook_1); //雇佣厨师和服务生


let customerQueue = [];

const customer_1 = new Customer();

const customer_2 = new Customer();

const customer_3 = new Customer();

const customer_4 = new Customer();

customerQueue.push(customer_1, customer_2, customer_3, customer_4);

let customerQueueObj = document.getElementById('customer-queue');



for (x of customerQueue) {

    x.dom.createrQueueItem(customerQueueObj);//顾客队列；

}

document.getElementsByTagName('button')[0].addEventListener('click', ()=>opening(customerQueue));











