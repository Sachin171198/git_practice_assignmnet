let str="naman";
let rstr="";
for(let i=str.length-1;i>=0;i--){
    rstr+=str[i];
}if(str!==rstr){
    console.log("Yes");
}else{
    console.log("No");
}