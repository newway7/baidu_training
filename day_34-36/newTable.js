document.getElementById('product').addEventListener('click', allChecked);
document.getElementById('region').addEventListener('click', allChecked);
document.getElementById('product').addEventListener('click', main);
document.getElementById('region').addEventListener('click', main);
//var txt = '';
var table = document.getElementById('table'); //
var oldCellIndex = 0;
var arr = [];

function allChecked(ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    var checkboxAll = target.parentNode.querySelector('.all');
    var ocheckbox = target.parentNode.querySelectorAll('input');
    var num = 0;

    if (target == checkboxAll) {
        if (target.checked == true) {
            for (let i = 1; i < ocheckbox.length; i++) {
                ocheckbox[i].checked = true;

                //a.push(ocheckbox[i].value); //oCheckbox[i].getAttribute("value")一样的效果
            }
            // console.log(a);

        }


    } else {
        for (let i = 1; i < ocheckbox.length; i++) {
            if (ocheckbox[i].checked == true) {
                num++;
                // a.push(ocheckbox[i].value);
            }

        }
        if (num == 3) {
            checkboxAll.checked = true;
        }
        if (num < 1) {
            target.checked = true;
        }
        if (target.checked == false) {

            checkboxAll.checked = false;

        }
    }


}

function main() {
    newTable(getValue());
    var m = 0;
    autoColSpan();
    table.onmouseover = mouseOver;



    function mouseOver(ev) {
        var arr=[];
        var rowsCount = table.rows.length;
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        var cellIndex;
        if (target.nodeName.toLowerCase() == 'td') {
            cellIndex = target.cellIndex;
            for (let i = 2; i < rowsCount; i++) {
                table.rows[i].cells[oldCellIndex].style.backgroundColor = '';
                table.rows[i].cells[cellIndex].style.backgroundColor = 'red';
                arr.push(table.rows[i].cells[cellIndex].innerText);
            }
            oldCellIndex = cellIndex;
            return arr;
        } 
        //console.log(arr);
        

    }

}










function getValue() {
    var txt = '';
    aInput = document.getElementsByTagName('input');
    //console.log(aInput[0].value);
    for (let i = 0; i < aInput.length; i++) {
        if (aInput[i].checked) {
            //console.log(aInput[i].value);
            txt += aInput[i].value;
        }
    }
    //console.log(txt);
    var newData = [];
    for (let i = 0; i < sourceData.length; i++) {
        if (txt.indexOf(sourceData[i].region) != -1 && txt.indexOf(sourceData[i].product) != -1) {
            //console.log(sourceData[i].region + ',' + sourceData[i].product);
            newData.push(sourceData[i]);
        }
    }
    return newData;
}

function newTable(x) {
    var table = document.getElementById('table');
    table.innerHTML = '';
    var product = document.getElementById('product');
    var region = document.getElementById('region');
    let tab = document.getElementById('table');
    var newArray = ['商品', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    var proNum = product.querySelectorAll("input[name='productName']:checked"); //商品勾选的数量
    var regNum = region.querySelectorAll("input[name='regionName']:checked"); //地区勾选的数量
    if (regNum.length == 1 && proNum.length > 1) {
        newArray.splice(0, 0, '地区');
    } else {
        newArray.splice(1, 0, '地区');
    }
    for (let i = 0; i < newArray.length; i++) {
        table.innerHTML += `<tr><th>${newArray[i]}</th></tr>`
    }
    var tr = table.getElementsByTagName('tr');
    let tdPro = document.createElement('td');

    for (let i = 0; i < x.length; i++) {
        let tdPro = document.createElement('td');

        tdPro.textContent = x[i].product;
        let tdReg = document.createElement('td');
        tdReg.textContent = x[i].region;
        if (newArray[0] == '地区') {
            tr[0].appendChild(tdReg);
            tr[1].appendChild(tdPro);
        } else {
            tr[1].appendChild(tdReg);
            tr[0].appendChild(tdPro);
        }
        for (let j = 2; j < tr.length; j++) {
            let td = document.createElement('td');
            td.textContent = x[i].sale[j - 2];
            tr[j].appendChild(td);

        }

    }

    //console.log(table);
    //console.log(table.rows[2].cells[2].innerHTML);
    // document.body.appendChild(tab);
}

function autoColSpan1(startRow) {
    var table = document.getElementById('table');
    var lastValue = '';
    var value = '';
    var pos = 1;
    for (var i = startRow; i < table.rows[0].cells.length; i++) {
        value = table.rows[0].cells[i].innerText;
        if (lastValue == value) {
            table.rows[0].cells[i].style.display = 'none';
            table.rows[0].cells[i - pos].colSpan = table.rows[0].cells[i - pos].colSpan + 1;
            pos++;
        } else {
            lastValue = value;
            pos = 1;
        }
    }
}


function autoColSpan() {
    table = document.getElementById('table');
    var lastValue = '';
    var startRow = 0;

    while (startRow < table.rows[0].cells.length) {
        var value = table.rows[0].cells[startRow].innerText;
        //console.log(value);
        //console.log(lastValue);
        if (lastValue == value) {
            table.rows[0].deleteCell(startRow);
            table.rows[0].cells[startRow - 1].colSpan += 1;
        } else {
            startRow++;
            lastValue = value;
        }
    }
}


var table = document.getElementById('table'); //
console.log(table.innerHTML)
table.onmouseover = mouseOver;

var rowsCount = table.rows.length;
var oldCellIndex = 0;
//console.log(table.rows[1]);

function mouseOver(ev) {
    //console.log(oldCellIndex)
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    var cellIndex;
    if (target.nodeName.toLowerCase() == 'td') {
        cellIndex = target.cellIndex;
        // console.log(cellIndex);
        for (let i = 0; i < rowsCount; i++) {
            //console.log(table.rows[i].cells[cellIndex].innerText);
            table.rows[i].cells[oldCellIndex].style.backgroundColor = '';
            //console.log(table.rows[i].cells[oldCellIndex].innerText);
            table.rows[i].cells[cellIndex].style.backgroundColor = 'red';

        }
        oldCellIndex = cellIndex;
    }
    // console.log(oldCellIndex);


}














