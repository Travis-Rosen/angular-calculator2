/**
 * Travis Rosen
 * 7/12/2022
 * calculator-api.js
 * Routes for calculator apis
 */

/**
 * Require Statements
 */
const express = require('express');
const Calculator = require('../models/calc-model');
const ErrorResponse = require('../services/error-res')
const BaseResponse = require('../services/base-res')

const router = express.Router();

//findAll
router.get('/', async(req,res) => {
  try {
    //Get request to find all calculator problems where 'isDisabled' is marked false
    Calculator.find({}).where('isDisabled').equals(false).exec(function(err, calculator) {
      if (err) {
        console.log(err);
        const findAllMongoDbErrorRes = new ErrorResponse('500', 'Internal Server Error', err);
        res.status(500).send(findAllMongoDbErrorRes.toObject());
      } else {
        console.log(calculator);
        const findAllRes = new BaseResponse('200', 'Query Successful', calculator);
        res.json(findAllRes.toObject());
      }
    })
  } catch (e) {
    console.log(e);
    const findAllCatchErrorRes = new ErrorResponse('500', 'Internal Server Error', e.message);
    res.status(500).send(findAllCatchErrorRes.toObject());
  }
});

//Create
router.post('/', async(req, res) => {
  try {
    //newCalculator requirements for post request to create new calculator problems
    let newCalculator = {
      title: req.body.title,
      description: req.body.description
    };
    Calculator.create(newCalculator, function(err, calculator) {
      if (err) {
        console.log(err);
        const createCalculatorMongoDbErrorRes = new ErrorResponse('500', 'Internal Server Error', err);
        res.status(500).send(createCalculatorMongoDbErrorRes.toObject());
      } else {
        console.log(calculator);
        const createCalculatorRes = new BaseResponse('200', 'Query Successful', calculator);
        res.json(createCalculatorRes.toObject());
      }
    })
  } catch(e) {
    console.log(e);
    const createCalculatorCatchErrorRes = new ErrorResponse('500', 'Internal Server Error', e.message);
    res.status(500).send(createCalculatorCatchErrorRes.toObject());
  }
});

//FindById
router.get('/:id', async(req, res) => {
  try {
    //Get request to find one calculator problem by id
    Calculator.find({'_id': req.params.id}, function(err, calculator) {
      if(err) {
        console.log(err);
        const findByIdMongoDbErrorRes = new ErrorResponse('500', 'Internal Server Error', err);
        res.status(500).send(findByIdMongoDbErrorRes.toObject());
      } else {
        console.log(calculator);
        const findByIdRes = new BaseResponse('200', 'Query Successful', calculator);
        res.json(findByIdRes.toObject());
      }
    })
  } catch(e) {
    console.log(e);
    const findByIdCatchErrorRes = new ErrorResponse('500', 'Internal Server Error', e.message);
    res.status(500).send(findByIdCatchErrorRes.toObject());
  }
})

//Update
router.put('/:id', async(req, res) => {
  try {
    //put request to update calculator problem by id
    Calculator.find({'_id': req.params.id}, function(err, calculator){
      if (err) {
        console.log(err);
        const updateMongoDbErrorRes = new ErrorResponse('500', 'Internal Server Error', err);
        res.status(500).send(updateMongoDbErrorRes.toObject());
      } else {
        console.log(calculator);
        calculator.set({
          title: req.body.title,
          description: req.body.description
        });
        //Saving the updated calculator problem
        calculator.save(function(err, updatedCalculator) {
          if(err) {
            console.log(err);
            const updatedCalculatorErrorRes = new ErrorResponse('500', 'Internal Server Error', err);
            res.status(500).send(updatedCalculatorErrorRes.toObject());
          } else {
            console.log(updatedCalculator);
            const updatedCalculatorRes = new BaseResponse('200', 'Query Successful', updatedCalculator);
            res.json(updatedCalculatorRes.toObject());
          }
        })
      }
    })
  } catch (e) {
    console.log(e);
    const updateCatchErrorRes = new ErrorResponse('500', 'Internal Server Error', e.message);
    res.status(500).send(updateCatchErrorRes.toObject());
  }
});

//Delete
router.delete('/:id', async(req, res) => {
  try {
    //Delete request to mark 'isDisabled' as true
    Calculator.findOne({'_id': req.params.id}, function(err, calculator) {
      if(err) {
        console.log(err);
        const deleteMongoDbErrorRes = new ErrorResponse('500', 'Internal Server Error', err);
        res.status(500).send(deleteMongoDbErrorRes.toObject());
      } else {
        console.log(calculator);
        calculator.set({
          isDisabled: true
        });
        //Saving the newly disabled calculator problem
        calculator.save(function (err, disabledCalculator) {
          if(err) {
            console.log(err);
            const disabledMongoDbErrorRes = new ErrorResponse('500', 'Internal Server Error', err);
            res.status(500).send(disabledMongoDbErrorRes.toObject());
          } else {
            console.log(disabledCalculator);
            const disabledCalculatorRes = new BaseResponse('200', 'Query Successful', err);
            res.json(disabledCalculatorRes.toObject());
          }
        })
      }
    })
  } catch (e) {
    console.log(e);
    const disabledCatchErrorRes = new ErrorResponse('500', 'Internal Server Error', e.message);
    res.status(500).send(disabledCatchErrorRes.toObject());
  }
});

module.exports = router
