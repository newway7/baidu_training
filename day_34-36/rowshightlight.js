
        var table = document.getElementById('myTable');
        var oldRowIndex = 0;
        table.onmouseover = mouseOver;
        //table.rows[1].style.backgroundColor='red';
        function mouseOver(ev) {
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            var rowIndex;
            
            if (target.nodeName.toLowerCase() == 'td') {
                rowIndex = target.parentNode.rowIndex;
                //console.log(oldRowIndex);
                //console.log(rowIndex);
                //console.log(table.rows[oldRowIndex]);
                //console.log(table.rows[rowIndex]);
                table.rows[oldRowIndex].style.backgroundColor = '';
                table.rows[rowIndex].style.backgroundColor = 'red';
                oldRowIndex = rowIndex;
            }
            
        }
