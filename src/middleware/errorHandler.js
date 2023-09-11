const constants = {
  VALIDATION_ERROR: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        error: "Validation Failed",
        message: err.message,
        status_code: statusCode,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        error: "Not Found",
        message: err.message,
        status_code: statusCode,
      });
      break;

    case constants.SERVER_ERROR:
      res.json({
        error: "Server Error",
        message: err.message,
        status_code: statusCode,
      });
      break;

    default:
      console.log("No Errors");
      break;
  }
};

export default errorHandler;
