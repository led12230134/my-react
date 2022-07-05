class Storage{
  static getInstance(){
    if(!Storage.instance){
      Storage.instance=new Storage();
    }
    return Storage.instance;
  }
  getItem(key){
    return localStorage.getItem(key);
  }
  setItem(key,value){
    return localStorage.setItem(key,value);
  }
}
const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();
storage1.setItem('name', '李磊');
console.log(storage1.getItem('name'));
console.log(storage2.getItem('name'));
