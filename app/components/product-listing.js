import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
  cart: service(),
  quantity: null,
  actions: {
    addToCart(product, quantity){
      console.log('pelele',this.cart.cartProducts);
      let prevQuantity = 0;
      this.cart.get('cartProducts').forEach(el => {
        prevQuantity = parseInt(el.quantity);
      })
      product.set('quantity', parseInt(quantity) + parseInt(prevQuantity))
      if(quantity >= 1){
        this.cart.add(product)
        console.log('added', product.name, quantity);
      }else alert('you need to add at least 1 item');
    },
    newQuantity(val){
      this.set('quantity', val)
    }
  }

});
