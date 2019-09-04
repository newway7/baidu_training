const region = document.getElementById('region');
const product = document.getElementById('product');

function getRegion(data) {
    return [...new Set(data.map(x => x.region))]
}

function getProduct(data) {
    return [...new Set(data.map(x => x.product))]
}

function getCheckBox(e, query) {

    return e.querySelectorAll(query);

}

function creatCheckbox(node, checkBoxTextList) {
    
    let listHtml = `<label for="all-${Node.id}"><input type="checkbox" all=true id="all-${Node.id}">全选</label>`;
    //console.log(checkBoxTextList.length)
    checkBoxTextList.forEach((element, index) => {
        listHtml += `<label for="${element}"><input type="checkbox" ${index===0?'checked':''} id="${element}" value="${element}">${element}</label>`
    });
    node.innerHTML = listHtml;
    node.addEventListener('change', (e) => {
        if (e.target.tagName === 'INPUT') {
            
            let checkedList = getCheckBox(e.path[2], "input[type='checkbox']:checked");
            let checkBoxList = getCheckBox(e.path[2], "input[type='checkbox']");
            if(e.target.getAttribute('all')){
                if(e.target.checked){
                    checkBoxList.forEach(x=>{x.checked=true});
                }else{
                    e.target.checked=true;
                }
            }else{
                if(e.target.checked){
                    if(checkedList.length===checkBoxTextList.length){
                        checkBoxList[0].checked=true;
                    }
                }else{
                    console.log(checkedList)
                    if(checkedList.length === checkBoxTextList.length){
                        
                        checkBoxList[0].checked=null;
                    }else if(checkedList.length==0){
                        e.target.checked=true;
                    }
                }
            }
        }
        insertTable(table,getFilterList(sourceData));
    })





}
creatCheckbox(region, getRegion(sourceData));
creatCheckbox(product, getProduct(sourceData));