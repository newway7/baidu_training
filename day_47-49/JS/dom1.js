class CookDomOp {
    constructor() {
        this.position
        this.CookDom
        this.cookDomFather
        this.cookState
        this.timeLeft


    }
    createrCook(fatherObj) {
        let divOvj = document.createElement('div')
        divOvj.setAttribute('style', 'display:flex;justify-content: space-between;'); ///父元素

        let listObj = document.createElement('div')
        listObj.setAttribute('class', 'cook-list'); //需要做的菜的序列；


        let stateObj = document.createElement('div');

        stateObj.setAttribute('class', 'cook-state'); //厨师状态；

        let svgObj = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        svgObj.setAttribute('class', 'icon cook');

        svgObj.setAttribute('free', '');

        svgObj.innerHTML = '<use xlink:href="#icon-kaoyan"></use>';

        this.cookDom = svgObj;

        divOvj.appendChild(svgObj);

        divOvj.appendChild(listObj);

        divOvj.appendChild(stateObj)

        this.cookDomFather = divOvj;

        fatherObj.appendChild(divOvj);

        this.position = fatherObj.childElementCount * 80;
        //childElementCount只读属性返回一个无符号长整型数字,表示给定元素的子元素数
    }



    addCookingList(order) {

        let listObj = this.cookDomFather.getElementsByClassName('cook-list')[0];

        order.forEach(item=>{

            let itemObj = document.createElement('li')

            itemObj.innerText = item.name;

            itemObj.setAttribute('name',item.name)

            listObj.appendChild(itemObj);

        })

    } 
    removeItem(meal) {

        let target = this.cookDomFather.querySelector(`li[name=${meal.name}]`);

        this.cookDomFather.getElementsByClassName('cook-list')[0].removeChild(target);

        return meal

    }

    addState(meal) {

        let stateObj = document.createElement('li');

        stateObj.innerHTML = `正在做${meal.name}`;

        let time = document.createElement('li');

        this.timeLeft = meal.takeTime;

        time.innerHTML = `还剩${this.timeLeft}s`

        this.cookState = this.cookDomFather.getElementsByClassName('cook-state')[0];

        this.cookState.appendChild(stateObj);

        this.cookState.appendChild(time);

    }
    // 更新时间
    updateTime() {

        this.timeLeft -= 1;

        this.cookState.lastElementChild.innerHTML = `还剩${this.timeLeft}s`;

    }

    removeState() {

        let target = this.cookState.lastElementChild;

        if(target.innerHTML === '还剩0s') {

            this.cookState.innerHTML = '';

        }

    }

}

class CustomerDomOp{
    constructor(){
        this.emptySeat
        this.seatIndex
        this.state
    }
    //创建队列图标
    createQueueItem(fatherEle){
        let svgObj = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        svgObj.setAttribute('class', 'icon customer');

        svgObj.innerHTML = '<use xlink:href="#icon-liyi"></use>';

        fatherEle.appendChild(svgObj); 
    }
    getEmptySeat() {

        let diningArea = document.getElementsByClassName('dining-area')[0];

        let children = [...diningArea.children];

        for (x of children) {

            if (x.hasAttribute('empty')) return x

        }

    }
    sitDown() {

        this.emptySeat = this.getEmptySeat();

        this.emptySeat.innerHTML = `<svg class="icon customer-eat" aria-hidden="true">

                                        <use xlink:href="#icon-zixi"></use>

                                    </svg>`

        this.emptySeat.removeAttribute('empty');

        this.seatIndex = this.emptySeat.getAttribute('index');

        // 创建空状态列表

        this.state = document.createElement('div');

        this.state.setAttribute('class', 'customer-state');

        this.emptySeat.appendChild(this.state);

    }

    // 腾出空位

    seatEmpty() {

        this.emptySeat.innerHTML = ''; 

        this.emptySeat.setAttribute('empty','');

    }

    updateOrderState(time) {

        this.state.innerHTML = `点餐${time}s`;

    }
    addOrderList(order) {

        this.state.innerHTML = '';

        order.forEach(item=>{

            let li = document.createElement('li');

            li.setAttribute('name', item.name);

            li.innerHTML = item.name;

            this.state.appendChild(li);

        })

    }

    // 更新上菜状态

    updateOrderList(meal, mode, time) {

        if (mode === 'eat'){

            let li = this.state.querySelector(`li[name=${meal.name}]`);

            li.setAttribute('style','color:red');

            let child = li.firstElementChild;

            if(child)li.removeChild(li.firstElementChild);

            let timeObj = document.createElement('i');

            timeObj.innerHTML = `${time}s`

            li.appendChild(timeObj);

        }

        else if (mode === 'over') {

            this.state.removeChild(this.state.querySelector(`li[name=${meal.name}]`));

        }   

    }

}

class WaiterDomOp {

    constructor(){

        this.defaultPosition = 'left:185px;top:226px;'

        this.customerPsoition

        this.waiterDom

    }

    // 初始化

    createWaiter() {

        let mainContentObj = document.getElementsByClassName('main-content')[0];

        let svgObj = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        svgObj.setAttribute('class', 'icon waiter');

        svgObj.innerHTML = '<use xlink:href="#icon-kongcheng"></use>';

        this.waiterDom = svgObj;

        mainContentObj.appendChild(svgObj);

        this.undo();

    }

    // 恢复默认位置

    undo() {

        this.waiterDom.setAttribute('style', this.defaultPosition);

    }

    // 去到顾客身边

    byCustomer(customerSeat) {

        switch (customerSeat) {

            case '1':

                this.waiterDom.setAttribute('style', 'left: 275px;top: 196px;')

                break;

            case '2':

                this.waiterDom.setAttribute('style', 'left: 446px;top: 196px;')

                break;

            case '3':

                this.waiterDom.setAttribute('style', 'left: 618px;top: 196px;')

                break;

            case '4':

                this.waiterDom.setAttribute('style', 'left: 275px;top: 258px;')            

                break;

        }

    }

    // 到厨师边上

    byCook(mode, cook) {

        // 传递菜单 找free属性的cook

        // 传菜，找complete属性

        // mode === 'order'-> removeAttribute('free')

        // mode === 'pass' -> removeAttribute('complete')

        let kitchenObj = document.getElementsByClassName('kitchen')[0];

        if(mode === 'order') {

            let cookObj = kitchenObj.querySelector('svg[free=""]');

            if(cookObj) {

                return {left: 187, top: Number(cook.dom.position)}  

            }

        }

        else if (mode === 'pass') {

            let cookObj = kitchenObj.querySelector('svg[complete=""]');

            if(cookObj) {

                return {left: 187, top: Number(cook.dom.position)}  

            }

        }

        else {

            alert('参数有错');

        }

    }

}






