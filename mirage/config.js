export default function() {
  this.namespace = '/api';

  this.get('/products', function() {
    return {
      data: [{
        type: 'product',
        id: 'GR1',
        attributes: {
          name: 'Green Tea',
          price: 3.11,
        }
      }, 
      {
        type: 'product',
        id: 'SR1',
        attributes: {
          name: 'Strawberries',
          price: 5,
        }        
      },
      {
        type: 'product',
        id: 'CF1',
        attributes: {
          name: 'Coffee',
          price: 11.23,
        }
      }]
    };
  });

}
