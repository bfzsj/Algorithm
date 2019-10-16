/**
 * Created by xiaodong.shi on 2019/10/15.
 */
class Set{
    constructor(){
        this.dataStore=[];

    }
    add(data){
        if(this.dataStore.indexOf(data)<0){
            this.dataStore.push(data);
            return true;
        }else{
            return false;
        }
    }
    remove(data){
        let pos=this.dataStore.indexOf(data);
        if(pos>-1){
            this.dataStore.splice(pos,1);
            return true;
        }else {
            return false;
        }
    }
    show(){
        return this.dataStore;
    }
    contains(data) {
        if(this.dataStore.indexOf(data) > -1) {
            return true;
        }
        else {
            return false;
        }
    }
    union(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; ++i) {
            tempSet.add(this.dataStore[i]);
        }
        for (let i = 0; i < set.dataStore.length; ++i) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }
    intersect(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; ++i) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
    size() {
        return this.dataStore.length;
    }
    subset(set) {
        if (this.size() > set.size()) {
            return false;
        }
        else {
            for(let i=0;i<this.size();i++){
                if (!set.contains(this.dataStore[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    difference(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
}
//测试基本操作
let names = new Set();
names.add("Cynthia");
names.add("Clayton");
names.add("Jennifer");
names.add("Danny");
names.add("Jonathan");
names.add("Terrill");
names.add("Raymond");
names.add("Mike");
console.log("测试基本操作")
console.log(names.show(),names.add("Mike"));
//测试并集操作
let dmp = new Set();
/*dmp.add("sxd")*/
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");

let it = new Set();
it = names.union(dmp);
console.log("测试并集操作")
console.log(it.show());
//测试交集
let inter = names.intersect(dmp);
console.log("测试交集操作")
console.log(inter.show())
//判断一个集合是否是另一个集合的子集
console.log("测试子集操作")
if(dmp.subset(names)){
    console.log("dmp是names的子集")
}else{
    console.log("names不是dmp的子集")
}
//测试补集
let cis = new Set();
let is = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
is.add("Bryan");
is.add("Clayton");
is.add("Jennifer");
let diff = new Set();
diff = cis.difference(is);
console.log("[" + cis.show() + "] difference [" + is.show()
    + "] -> [" + diff.show() + "]");
