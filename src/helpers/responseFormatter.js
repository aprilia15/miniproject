module.exports = function(res, data, statusCode) {
  let result = {}
  
  result.success = data[0];
  if (data[0]) {
    result.data = data[1];
  } else {
    result.errors = data[1];
  }

  res.status(statusCode).json(result);
}
