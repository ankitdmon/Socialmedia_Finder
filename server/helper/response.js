exports.successResponse = (req, res, data = {}) => {
  res.send({
    error: false,
    success: true,
    data: {
      successResult: data,
    },
  });
};

exports.failResponse = (req, res, data = {}, extra) => {
  res.send({
    error: false,
    success: false,
    data: {
      errorResult: data,
      data: extra,
    },
  });
};

exports.errorResponse = (req, res, errorDesc, errorKey, resCode = 500) => {
  console.log(">>>>>>>>>>>>> ERROR\n", errorDesc);
  try {
    res.status(resCode).send({
      error: true,
      errorKey,
      errorDesc: errorDesc,
      errorMessage: errorDesc.message,
      errorStack: errorDesc.stack,
    });
  } catch (error) {
    console.log(error);
  }
};
