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

            if(this.table[i][0]!=undefined){
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
    /*put(data){
        let pos=this.betterHash(data);
        this.table[pos]=data;
    }
    put(key,data){
        let pos=this.betterHash(key);
        this.table[pos]=data;
    }*/
    put(key,data){
        let pos=this.betterHash(key);
        let index=0;
        if(this.table[pos][index]==undefined){
            this.table[pos][index]=key
            this.table[pos][index+1]=data;
        }
        else {
            while (this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index]=key
            this.table[pos][index + 1] = data;
        }
    }
    /*get(key){
        return this.table[this.betterHash(key)]
    }*/
    get(key){
        let index=0;
        let pos=this.betterHash(key);
        if(this.table[pos][index]==undefined){
            return undefined;
        }else{
            while (this.table[pos][index] != key) {
                index += 2;
            }
            return this.table[pos][index+1]
        }
    }
    buildChains() {
        for (let i = 0; i < this.table.length; ++i) {
            this.table[i] = new Array();
        }
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
//开链法
let hTable=new HashTable();
hTable.buildChains();
hTable.put("Donnie",15234);
hTable.put("zs","123");
hTable.put("Jonathan","67");
console.log(hTable.get("sxd"))
hTable.showDistro()