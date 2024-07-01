var s = "";
var i;
var j;
for( i=5;i>0;i-- ) {
    for(j=0;j<i;j++) {
        s = s + "*";
    }
    s = s +"\n";
} 
console.log(s);