class Publisher{
  constructor(){
    this.observers=[];
    console.log('Publisher created');
  }
  add(observer){
    console.log('Publisher.add invoked');
    this.observers.push(observer)
  }
  remove(observer){
    console.log('Publisher.remove invoked');
    this.observers.forEach((item,i) => {
      if(item === observer){
        this.observers.splice(i,1);
      }
    })
  }
  notify(){
    console.log('Publisher.notify invoked');
    this.observers.forEach((observer) => {
      observer.update(this);
    })
  }
}

class Observer{
  constructor(){
    console.log('Observer created');
  }
  update(){
    console.log('Observer.update invoked');
  }
}

class PrdPublisher extends Publisher{
  constructor(){
    super();
    this.prdState=null;
    this.observers=[];
    console.log('PrdPublisher created');
  }
  getState(){
    console.log('PrdPublisher.getState invoked');
    return this.prdState;
  }
  setState(state){
    console.log('PrdPublisher.setState invoked');
    this.prdState=state;
    this.notify();
  }
}

class DeveloperObserver extends Observer{
  constructor(){
    super();
    this.prdState={};
    console.log('DeveloperObserver created');
  }
  update(publisher){
    console.log('DeveloperObserver.update invoked');
    this.prdState=publisher.getState();
    this.work();
  }
  work(){
    const prd=this.prdState;
    console.log('996 begins...');
  }
}

const liLei = new DeveloperObserver();
const A = new DeveloperObserver();
const B = new DeveloperObserver();
const hanMeiMei = new PrdPublisher();
const prd={};
hanMeiMei.add(liLei);
hanMeiMei.add(A);
hanMeiMei.add(B);
hanMeiMei.setState(prd);