/* eslint-disable no-unused-vars, no-undef, handle-callback-err */
'use strict'
const AppRoot = require('app-root-path')
const should = require('chai').should()
const ClassUnderTest = require(`${AppRoot}/app/utils/validators/artObjectControllerValidator`)

describe('art object validator tests', function () {
  describe('get', function () {
    let req
    beforeEach(function () {
      req = {
        query: {
          value: '2500'
        }
      }
    })
    it('base', function () {
      // adjust
      // act
      let validation_errors = ClassUnderTest.get(req)
      // assert
      validation_errors.should.deep.equal([])
    })
    it('should add a specific error message if req.query.value is not included', function () {
      // adjust
      delete req.query.value
      // act
      let validation_errors = ClassUnderTest.get(req)
      // assert
      validation_errors[0].should.equal('value must be included in query string')
    })
    it('should add a specific error message if req.query.value is not a valid value', function () {
      // adjust
      req.query.value = 45
      // act
      let validation_errors = ClassUnderTest.get(req)
      // assert
      validation_errors[0].should.equal('value must be one of the following values: 25, 250, 750, 2500, 7500')
    })
  })
})
