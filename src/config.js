exports.config = {
  interest: 0.1,
  dateFormat: 'DD/MM/YYYY',
  intervals: {
    amountInterval: {
      min: 100,
      max: 1000,
      defaultValue: 100,
      step: 50,
    },
    termInterval: {
      min: 10,
      max: 31,
      defaultValue: 10,
      step: 1,
    },
  },
};
