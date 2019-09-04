
    var print=[];
    for (var i = 1; i < 101; i++) {
        if(i%3 ===0 || String(i).indexOf('3') !== -1){
            print[i-1]='PA';
        }
        else{
            print[i-1]=i;
        }
    }
    var out=print.join(',');
    console.log(out);
