/**
 * Created by xiaodong.shi on 2019/10/11.
 */
class Dictionary{
    constructor(){
        this.datastore=new Array();
    }
    add(key,value){
        this.datastore[key]=value;
    }
    find(key){
        return this.datastore[key];
    }
    remove(key){
        delete this.datastore[key];
    }
    showAll(){
        /*for(let key in Object.keys(this.datastore)){
            console.log(key+"->"+this.datastore[key])
        }*/
        let data=this.datastore;
        Object.keys(this.datastore).sort().forEach(function (key) {
            console.log(key+"->"+data[key])
        })
    }
    count(){
        return Object.keys(this.datastore).length;
    }
    clear(){
        let data=this.datastore;
        Object.keys(this.datastore).forEach(function (key) {
            delete data[key]
        })
    }

}
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
console.log(pbook.count())
pbook.clear();
console.log(pbook.count())

pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showAll();