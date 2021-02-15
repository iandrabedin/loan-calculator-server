const moment = require('moment');
const {config} = require('./config');
const {query} = require('express-validator');

const createOffer = (amount, term) => {
  const interest = amount * config.interest;
  const totalAmount = amount + interest;
  const dueDate = moment().add(term, 'days').format(config.dateFormat);

  return {
    principalAmount: amount,
    interestAmount: interest,
    totalAmount,
    dueDate,
  };
};

function attachDefaultValidations(req) {
  query(req.amount).toInt();
  query(req.term).toInt();
  //   req
  //     .checkQuery(
  //       'amount',
  //       `Amount should be an integer between ${config.intervals.amountInterval.min} and ${config.intervals.amountInterval.max}`,
  //     ) // eslint-disable-line max-len
  //     .isInt({
  //       min: config.intervals.amountInterval.min,
  //       max: config.intervals.amountInterval.max,
  //     })
  //     .notEmpty()
  //     .withMessage('Amount cannot be empty');
  //   req
  //     .checkQuery(
  //       'term',
  //       `Term should be an integer between ${config.intervals.termInterval.min} and ${config.intervals.termInterval.max}`,
  //     ) // eslint-disable-line max-len

  //     .isInt({
  //       min: config.intervals.termInterval.min,
  //       max: config.intervals.termInterval.max,
  //     })
  //     .notEmpty()
  //     .withMessage('Term cannot be empty');
}

exports.createOffer = createOffer;
exports.attachDefaultValidations = attachDefaultValidations;
