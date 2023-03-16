import Product from "./Product.js";
class ProductList{
    constructor(uid,fname,lname){
        this.uid = uid;
        this.fname = fname;
        this.lname = lname;
    }
    pList=new Map();
    addCart(uid,pObj){
        // "uid_pid" Map index : to save specific loginuser+pid info inside shopping cart
        if(this.pList.has(uid+"_"+pObj.pid)){
            this.pList.get(uid+"_"+pObj.pid).amount += pObj.amount;
        }else{
            let product = new Product(pObj.pid,pObj.pname,pObj.price,pObj.amount,pObj.imgsrc);
            this.pList.set(uid+"_"+pObj.pid,product);
        }
    }
    setCart(idx,pObj){
        let product = new Product(pObj.pid,pObj.pname,pObj.price,pObj.amount,pObj.imgsrc);
        this.pList.set(idx,product);
    }    
    toArray(){
        let arr = [];
        this.pList.forEach((val)=>{
            arr.push(val);
        })
        return arr;
    }    
    delCart(key){
        this.pList.delete(key);
    }
    clearCart(id){
        this.pList.forEach((product,idx)=>{
            let key = id+"_"+product.pid;
            if(key==idx){
                this.pList.delete(idx);
            }
        });
    }
    editCart(type,key){
        if(type=="+"){
            this.pList.get(key).amount++;
        }else{
            // when item become zero then delete
            if(this.pList.get(key).amount==1){
                this.pList.delete(key);
            }else{
                this.pList.get(key).amount--;
            }
        }
    }
    getTotalAmt(){
        let sum = 0;
        this.pList.forEach((product)=>{
            sum += parseInt(product.amount);
        });
        return sum;
    }
    getTotalPrice(){
        let sum = 0;
        this.pList.forEach((product)=>{
            sum += parseFloat(product.calTotal());
        });
        return sum.toFixed(2);
    }
}
export default ProductList;