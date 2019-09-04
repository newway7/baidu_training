const table = document.getElementById('table');



function createTbody(data) {
    let tableHtml = '',

        tableRow = '',
        indexText = -1,

        indexCount = 1,

        len = data.length;
    for (let i = 0; i < len; i++) {
        tableRow = ``;
        for (let j = 0; j < 14; j++) {//
            if (j == 0) {
                if(indexText==-1 || data[i][j]!==data[indexText][0]){//indexText==-1是为了保证table[0][0]可以被写入；
                    tableHtml=tableHtml.replace(`rowspan${indexText}`,indexCount);//1
                    indexText=i;//2
                    indexCount=1;//3
                    tableRow += `<td rowspan=rowspan${indexText}>${data[i][j]}</td>`//4 保证一串相同值中的第一个占据n个；1,4分开保证indexText值一致；

                }else{
                    indexCount++;
                }
            }else{
                tableRow += `<td>${data[i][j]}</td>`
            }
        }
        tableHtml+=`<tr>${tableRow}</tr>`
    }
    tableHtml = tableHtml.replace(`rowspan${indexText}`, indexCount);

  return `<tbody>${tableHtml}</tbody>`;
}



function insertTable(node, data) {
    console.log(data.data);

    node.innerHTML = `<table><thead><th>${data.head[0]}</th><th>${data.head[1]}</th><th colspan=12>12月数据</th></thead>${createTbody(data.data)}</table>`
    //console.log(data.head[0]);

}

console.log(getFilterList(sourceData));
insertTable(table, getFilterList(sourceData));





