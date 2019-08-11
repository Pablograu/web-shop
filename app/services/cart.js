import Service from '@ember/service';
import { A } from '@ember/array'
import { set } from '@ember/object'

export default Service.extend({
  cartProducts: null,
  totalPrice: null,

  init() {
    this._super(...arguments);
    this.set('cartProducts', A([]));
  },

  add(product) {
    console.log(this.get('cartProducts'),'cartProducts')
    if(this.cartProducts.includes(product)){
      this.get('cartProducts').removeObject(product);
      this.get('cartProducts').pushObject(product);
      this.getTotal();
    }else{
      this.get('cartProducts').pushObject(product);
      this.getTotal();
    }
  },

  remove(product) {
    this.get('cartProducts').removeObject(product);
    this.getTotal();
  },

  empty() {
    this.get('cartProducts').clear();
    this.getTotal();
  },

  getTotal(){
    let totalPrice = this.get('cartProducts').reduce((acc, curr) => {
      return acc + (curr.quantity * curr.price);
    },0);
    this.set('totalPrice', totalPrice);
  },

  // getTotal(){
  //   let totalPrice = 0
  //   for (let i = 0; i < this.get('cartProducts'); i++){
  //     totalPrice = this.get('cartProducts')[i].quantity*this.get('cartProducts')[i].price
  //   }
  //   console.log('totalPrice:', totalPrice)
  //   this.set('totalPrice', totalPrice)
  // }

});

