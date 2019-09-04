
        
        var table = document.getElementById('table');//
        table.onmouseover = mouseOver;
     
        var rowsCount = table.rows.length;
        var oldCellIndex=0;
        //console.log(table.rows[1]);
  
        function mouseOver(ev) {
            //console.log(oldCellIndex)
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            var cellIndex;
            if(target.nodeName.toLowerCase() == 'td'){
                cellIndex=target.cellIndex;
               // console.log(cellIndex);
                for(let i=0;i<rowsCount;i++){
                    //console.log(table.rows[i].cells[cellIndex].innerText);
                    table.rows[i].cells[oldCellIndex].style.backgroundColor='';
                    //console.log(table.rows[i].cells[oldCellIndex].innerText);
                    table.rows[i].cells[cellIndex].style.backgroundColor='red';
                    
                }
                oldCellIndex=cellIndex;
            }
           // console.log(oldCellIndex);


        }
  