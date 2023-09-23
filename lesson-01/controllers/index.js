const awesomeFunction = (req, res, next) => {
  res.json('Marie Antoinette');
};

const GenerateAnotherEntry = (req, res, next) => {
    res.json('Very important person');
  };

module.exports = { awesomeFunction, GenerateAnotherEntry };