/**
 * Created by xiaodong.shi on 2019/11/29.
 */
let name={
    sxd:23
}
function k(name,value) {
    name.sxd=value
}
k(name,46)
console.log(name)
let arr=[3,2,1,9,10];
function quick(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2);
    let pivot=arr.splice(mid,1)[0];
    let left=[],right=[];
    let len=arr.length;
    for(let i=0;i<len;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return quick(left).concat([pivot],quick(right));
}
console.log(quick(arr))
console.log(['0','1','2','3','4'].map(parseInt))






