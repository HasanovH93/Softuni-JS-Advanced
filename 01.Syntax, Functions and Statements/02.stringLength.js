function strLength(str1,str2,str3){
 
    let sum = str1.length + str2.length + str3.length;
    let avarage = sum / 3;
    console.log(sum);
    console.log(Math.floor(avarage));
}
strLength('chocolate', 'ice cream', 'cake')