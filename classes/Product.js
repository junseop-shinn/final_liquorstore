class Product{
    constructor(pid,pname,price,amount=1,imgsrc){
        this.pid = pid;
        this.pname = pname;
        this.price = price;
        this.amount = amount;
        this.imgsrc = imgsrc;
    }
    calTotal(){
        return (this.price * this.amount).toFixed(2);
    }
}
export default Product;