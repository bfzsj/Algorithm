/**
 * Created by xiaodong.shi on 2019/10/11.
 */
class HashTable{
    constructor(){
        this.table=new Array(137);
    }

    simpleHash(data){
        let total=0;
        for(let i=0;i<data.length;++i){
            total+=data.charCodeAt(i);
        }
        return total%this.table.length;
    }
    showDistro(){
        let n=0;
        for(let i=0;i<this.table.length;++i){
            if(this.table[i]!=undefined){
                console.log(i+":"+this.table[i]);
            }
        }
    }
    betterHash(data){
        const H=31;
        let total=0;
        for(let i=0;i<data.length;++i){
            total+=H*total+data.charCodeAt(i);
        }
        total=total%this.table.length;
        if(total<0){
            total+=(this.table.length-1);
        }
        console.log("Hash value: " + data + " -> " + total)
        return parseInt(total)
    }
    put(data){
        let pos=this.betterHash(data);
        this.table[pos]=data;
    }
}
//整型化api
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genStuData(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let num = "";
        for (let j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}
//散列化字符串
let someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
let hTable=new HashTable();
for(let i=0;i<someNames.length;++i){
    hTable.put(someNames[i]);
}
hTable.showDistro();

//散列化整型键
let numStudents=10;
let arrSize=97;
let idLen=9;
let students=new Array(numStudents);
genStuData(students);
console.log("Student data:");
for(let i=0;i<students.length;++i){
    console.log(students[i].substring(0,8)+" "+students[i].substring(9));
}
console.log("Data distribution:");
for(let i=0;i<students.length;++i){
    hTable.put(students[i]);
}
hTable.showDistro()
console.log(hTable)

