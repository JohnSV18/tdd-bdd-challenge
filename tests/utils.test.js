const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect
const assert = chai.assert

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================
it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})
// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area", function() {
  const area = utils.area(10, 5)
  expect(area).to.be.a("number")
  expect(area).to.equal(50)
})

it("should return the perimeter", function() {
  const perimeter =  utils.perimeter(10, 5)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(30)
})

it("should return the area of a circle", function() {
  const area = utils.circleArea(5)
  expect(area).to.be.a("number")
  expect(area).to.equal(78.53981633974483)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
})

it("Should add a new item to the shopping cart", function() {
  // const cartSize = utils.getNumItemsInCart()
  const list = utils.getShoppingCart()
  assert.lengthOf(list, 0)

  const item = utils.createItem("apple", 0.99)
  const cart = utils.addItemToCart(item)
  const newCartSize = utils.getNumItemsInCart()

  expect(cart).to.be.a("array")
  expect(newCartSize).to.equal(1)

})
  

it("Should return the number of items in the cart", function() {
  const cartSize = utils.getNumItemsInCart()
  return cartSize
})

it("Should remove items from cart", function() {
  const item = utils.createItem("apple", 0.99)
  const cart = utils.addItemToCart(item)
  const list = utils.getShoppingCart()
  assert.lengthOf(list, 1)

  const updatedCart = utils.removeItemFromCart(item)
  const newList= utils.getShoppingCart()
  assert.lengthOf(newList, 0)

  expect(cart).to.be.a("array")
  expect(updatedCart).to.be.a("array")
  

})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
