class CoffeeMaker{
  constructor(){
    this.state='init';
    this.leftMilk='500ml';
  }
  stateToProcessor={
    that:this,
    american(){
      console.log('咖啡机现在的牛奶存储量是：', this.that.leftMilk);
      console.log('我只吐黑咖啡');
    },
    latte(){
      this.american();
      console.log('加点奶');
    },
    vanillaLatte(){
      this.latte();
      console.log('再加香草糖浆');
    },
    mocha(){
      this.latte();
      console.log('再加巧克力');
    }
  }
  changeState(state){
    this.state=state;
    if(!this.stateToProcessor[state]){
      return;
    }
    this.stateToProcessor[state]();
  }
}
const mk = new CoffeeMaker();
mk.changeState('latte');