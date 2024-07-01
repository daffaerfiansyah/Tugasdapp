var s = "";
var i;
var j;
var k;
var l;
for(i=1;i<=7;i++) {
    for(j=1;j<=i;j++) {
        s = s + "*";
    }
    s = s +"\n";
}
for(k=7;k>0;k--){
    for(l=1;l<k;l++){
        s = s + "*";
    }
    s = s +"\n";
}
console.log(s); 