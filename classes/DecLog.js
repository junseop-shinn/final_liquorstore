import CryptoJS from 'crypto-js';
class DecLog{
    constructor(uid,name=''){
        this.uid=uid;
        this.name=name;
    }
    store(uObj){
        uObj=JSON.stringify(uObj);
        let x=this.encrypt(uObj);
        sessionStorage.setItem(this.uid,x);
    }
    encrypt(data){
        return CryptoJS.AES.encrypt(data,'liquor').toString();
    }
    decrypt(encData){
        let decData = CryptoJS.AES.decrypt(encData,'liquor');
        return decData.toString(CryptoJS.enc.Utf8);
    }
    getItem(){
        return sessionStorage.getItem(this.uid);
    }
}
export default DecLog;