class Restaurant {
    constructor({
        cash = 0,
        seats = 0,
        staffList = []
    } = {}) {

        this.cash = cash;

        this.seats = seats;

        this.staffList = staffList;

        this.dom = new restaurantDomOp();

        this.dom.updateCash(this.cash); //更新金钱；     
    }
    //单例接口
    static getInstance(param) {
        if (!this.instance) {
            this.instance = new Restaurant(param);
        }
        return this.instance;
    }
    //雇佣
    hire(newStaff) {
        this.staffList.push(newStaff)
    }
    //解雇
    fire(newStaff) {
        this.staffList = this.staffList.filter((item) => {
            return item.id !== staff.id;
        })
    }
}

class Customer {
    constructor(baseTime = 3) {

        this.baseTime = baseTime

        this.order

        this.dom = new CustomerDomOp()

    }
    async _order(menu){
        let num=Math.ceil(6*Math.random());
        let orderList = [];
        for(let i=0;i<num;i++){
            const index = Math.round((Object.keys(menu).length - 1)* Math.random());
             
        }
    }
}