class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    console.log("Amit Called 1", this.statusCode, message);
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
