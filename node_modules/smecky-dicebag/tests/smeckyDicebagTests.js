'use strict'
/* eslint-disable no-unused-vars, no-undef, handle-callback-err, no-useless-escape */
const should = require('chai').should()
const DataDriven = require('data-driven')
const Sinon = require('sinon')
const _ = require('lodash')
const ClassUnderTest = require('../lib/smeckyDicebag')()

describe('dicebag', function () {
  describe('roll', function () {
    it('base', function () {
      // adjust
      // act
      for (let i = 0; i < 100000; ++i) {
        // assert
        let result = ClassUnderTest.roll(4, 4)
        result.should.be.above(3).and.below(17)
      }
    })
    it('base contrived', function () {
      // arrange
      let random_stub
      random_stub = Sinon.stub(_, 'random')
      random_stub.onCall(0).returns(1)
      random_stub.onCall(1).returns(2)
      random_stub.onCall(2).returns(3)
      random_stub.onCall(3).returns(4)
      // adjust

      // act
      let result = ClassUnderTest.roll(4, 4)
      // assert
      random_stub.callCount.should.equal(4)
      result.should.equal(10)
      random_stub.restore()
    })
    DataDriven([{ arg: null }, { arg: undefined }, { arg: 0.12 }, { arg: '0' },
      { arg: [0, 1] }, { arg: { foo: 'bar' } }], function () {
      it('should return an error if die_type is not an integer {arg}', function (arg) {
        // adjust
        // act
        let result = ClassUnderTest.roll(arg, 1)
        // assert
        result.message.should.equal('die_type and die_count must be integers')
      })
    })
    DataDriven([{ arg: null }, { arg: undefined }, { arg: 0.12 }, { arg: '0' },
      { arg: [0, 1] }, { arg: { foo: 'bar' } }], function () {
      it('should return an error if die_count is not an integer {arg}', function (arg) {
        // adjust
        // act
        let result = ClassUnderTest.roll(4, arg)
        // assert
        result.message.should.equal('die_type and die_count must be integers')
      })
    })
    it('should return an error if die_type is less than 1', function () {
      // adjust
      // act
      let result = ClassUnderTest.roll(-1, 4)
      // assert
      result.message.should.equal('die_type and die_count must be greater than 0')
    })
    it('should return an error if die_count is less than 1', function () {
      // adjust
      // act
      let result = ClassUnderTest.roll(4, -1)
      // assert
      result.message.should.equal('die_type and die_count must be greater than 0')
    })
  })
  describe('d4', function () {
    it('base', function () {
      // adjust
      // act
      for (let i = 0; i < 100000; ++i) {
        // assert
        let result = ClassUnderTest.d4(4)
        result.should.be.above(3).and.below(17)
      }
    })
    it('base contrived', function () {
      // adjust
      let random_stub
      random_stub = Sinon.stub(_, 'random')
      random_stub.onCall(0).returns(1)
      random_stub.onCall(1).returns(2)
      random_stub.onCall(2).returns(3)
      random_stub.onCall(3).returns(4)
      // act
      let result = ClassUnderTest.d4(4)
      // assert
      random_stub.callCount.should.equal(4)
      result.should.equal(10)
      random_stub.restore()
    })
  })
  describe('d6', function () {
    it('base', function () {
      // adjust
      // act
      for (let i = 0; i < 100000; ++i) {
        // assert
        let result = ClassUnderTest.d6(4)
        result.should.be.above(3).and.below(25)
      }
    })
    it('base contrived', function () {
      // arrange
      let random_stub
      random_stub = Sinon.stub(_, 'random')
      random_stub.onCall(0).returns(3)
      random_stub.onCall(1).returns(4)
      random_stub.onCall(2).returns(5)
      random_stub.onCall(3).returns(6)
      // adjust

      // act
      let result = ClassUnderTest.d6(4)
      // assert
      random_stub.callCount.should.equal(4)
      result.should.equal(18)
      random_stub.restore()
    })
  })
  describe('d8', function () {
    it('base', function () {
      // adjust
      // act
      for (let i = 0; i < 100000; ++i) {
        // assert
        let result = ClassUnderTest.d8(4)
        result.should.be.above(3).and.below(33)
      }
    })
    it('base contrived', function () {
      // arrange
      let random_stub
      random_stub = Sinon.stub(_, 'random')
      random_stub.onCall(0).returns(5)
      random_stub.onCall(1).returns(6)
      random_stub.onCall(2).returns(7)
      random_stub.onCall(3).returns(8)
      // adjust

      // act
      let result = ClassUnderTest.d8(4)
      // assert
      random_stub.callCount.should.equal(4)
      result.should.equal(26)
      random_stub.restore()
    })
  })
  describe('d10', function () {
    it('base', function () {
      // adjust
      // act
      for (let i = 0; i < 100000; ++i) {
        // assert
        let result = ClassUnderTest.d10(4)
        result.should.be.above(3).and.below(41)
      }
    })
    it('base contrived', function () {
      // arrange
      let random_stub
      random_stub = Sinon.stub(_, 'random')
      random_stub.onCall(0).returns(7)
      random_stub.onCall(1).returns(8)
      random_stub.onCall(2).returns(9)
      random_stub.onCall(3).returns(10)
      // adjust

      // act
      let result = ClassUnderTest.d10(4)
      // assert
      random_stub.callCount.should.equal(4)
      result.should.equal(34)
      random_stub.restore()
    })
  })
  describe('d12', function () {
    it('base', function () {
      // adjust
      // act
      for (let i = 0; i < 100000; ++i) {
        // assert
        let result = ClassUnderTest.d12(4)
        result.should.be.above(3).and.below(49)
      }
    })
    it('base contrived', function () {
      // arrange
      let random_stub
      random_stub = Sinon.stub(_, 'random')
      random_stub.onCall(0).returns(9)
      random_stub.onCall(1).returns(10)
      random_stub.onCall(2).returns(11)
      random_stub.onCall(3).returns(12)
      // adjust

      // act
      let result = ClassUnderTest.d12(4)
      // assert
      random_stub.callCount.should.equal(4)
      result.should.equal(42)
      random_stub.restore()
    })
  })
  describe('d20', function () {
    it('base', function () {
      // adjust
      // act
      for (let i = 0; i < 100000; ++i) {
        // assert
        let result = ClassUnderTest.d20(4)
        result.should.be.above(3).and.below(81)
      }
    })
    it('base contrived', function () {
      // arrange
      let random_stub
      random_stub = Sinon.stub(_, 'random')
      random_stub.onCall(0).returns(17)
      random_stub.onCall(1).returns(18)
      random_stub.onCall(2).returns(19)
      random_stub.onCall(3).returns(20)
      // adjust

      // act
      let result = ClassUnderTest.d12(4)
      // assert
      random_stub.callCount.should.equal(4)
      result.should.equal(74)
      random_stub.restore()
    })
  })
})
