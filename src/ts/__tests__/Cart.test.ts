import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});
test('cart should add movie items', () => {
  const cart = new Cart();
  cart.add(new Movie('Мстители', 2012, 1234, 'USA', 'Avengers Assemble!', ['test', 'test2'], '137', 150));
  expect(cart.items[0]).toEqual({
    name: 'Мстители',
    year: 2012,
    id: 1234,
    country: 'USA',
    tagline: 'Avengers Assemble!',
    genre: ['test', 'test2'],
    duration: '137',
    price: 150
  })
});

test('method should return a correct sum', () => {
  const cart = new Cart();
  cart.add({ name: 'test', id: 123, price: 1000 });
  cart.add({ name: 'test2', id: 234, price: 1000 });
  cart.add({ name: 'test3', id: 456, price: 1000 });
  expect(cart.getWholeAmmount()).toBe(3000);
});

test('method should return a right value with a discount value (in percent) passed', () => {
  const cart = new Cart();
  cart.add({ name: 'test', id: 123, price: 1000 });
  cart.add({ name: 'test2', id: 234, price: 1000 });
  cart.add({ name: 'test3', id: 456, price: 1000 });
  expect(cart.getDiscountedAmmount(50)).toBe(1500);
})