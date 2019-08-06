import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'GR1',
      name: 'Green Tea',
      price: 3.11,
    }, 
    {
      id: 'SR1',
      name: 'Strawberries',
      price: '5',
    },
    {
      id: 'CF1',
      name: 'Coffee',
      price: 11.23,
    }];
  }
});
