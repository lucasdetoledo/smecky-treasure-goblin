/* eslint-disable no-unused-vars, no-undef, handle-callback-err, no-useless-escape */
'use strict'
const AppRoot = require('app-root-path')
const should = require('chai').should()
const Sinon = require('sinon')
const Promise = require('bluebird')
require('sinon-as-promised')(Promise)
const ClassUnderTest = require(`${AppRoot}/app/controllers/gemstoneController`)
const Validate = require(`${AppRoot}/app/utils/validators/gemstoneControllerValidator`)
const Models = require(`${AppRoot}/app/models`)
const Gemstone = Models.gemstone
describe('gemstone controller tests', function () {
  describe('get', function () {
    let req,
      validation_stub,
      find_all_list,
      find_all_stub
    beforeEach(function () {
      req = {
        query: {
          value: '1000'
        }
      }
      find_all_list = [
        {
          dataValues: {
            description: 'foo description',
            value: '1'
          }
        }
      ]
      validation_stub = Sinon.stub(Validate, 'get').returns([])
      find_all_stub = Sinon.stub(Gemstone, 'findAll').resolves(find_all_list)
    })
    afterEach(function () {
      validation_stub.restore()
      find_all_stub.restore()
    })
    it('base', function (done) {
      // adjust
      // act
      ClassUnderTest.get(req, {
        status: (status_code) => {
          status_code.should.equal(200)
          return {
            json: (payload) => {
              payload.description.should.equal('foo description')
              payload.value.should.equal('1')
              done()
            }
          }
        }
      })
    })
    it('should return a 400 if validation fails', function (done) {
      // adjust
      validation_stub.returns(['foo error'])
      // act
      ClassUnderTest.get(req, {
        status: (status_code) => {
          // assert
          status_code.should.equal(400)
          return {
            json: (payload) => {
              payload[0].should.equal('foo error')
              done()
            }
          }
        }
      })
    })
    it('should return a 500 if the find all promise rejects', function (done) {
      // adjust
      find_all_stub.restore()
      find_all_stub = Sinon.stub(Gemstone, 'findAll').rejects(new Error('foo error'))
      // act
      ClassUnderTest.get(req, {
        status: (status_code) => {
          // assert
          status_code.should.equal(500)
          return {
            json: (payload) => {
              payload.should.equal('an unexpected error occurred')
              done()
            }
          }
        }
      })
    })
  })
})

