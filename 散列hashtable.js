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
let someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
let hTable=new HashTable();
for(let i=0;i<someNames.length;++i){
    hTable.put(someNames[i]);
}
hTable.showDistro();