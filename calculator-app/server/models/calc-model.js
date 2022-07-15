/**
 * Travis Rosen
 * 07/12/22
 * calc-model.js
 * Mongoose schema for Calculator
 */


//Defining mongoose and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Calculator Schema
let calculatorSchema = new Schema ({
  title: { type: String },
  description: { type: String },
  isDisabled: { type: Boolean, default: false },
}, { collection: 'calculator'})
//Export
module.exports = mongoose.model('Calculator', calculatorSchema);

