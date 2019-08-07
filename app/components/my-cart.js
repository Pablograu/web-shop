import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
  cart: service('cart'),
  price: null,
  didInsertElement() {
    this._super(...arguments);
    this.cart.get('cartProducts').forEach(el => {
      console.log('these is an item: ', el.name, el.quantity);
      console.log('importante',this.cart.cartProducts.length);
    });
  },
  actions: {
    remove(product) {
      console.log('item removed from cart');
      this.cart.remove(product);
    }
  }
});
