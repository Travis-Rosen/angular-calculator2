/**
 * Travis Rosen
 * 7/12/2022
 * error-res.js
 * Error class for api response
 */


class ErrorResponse{
  constructor(httpCode, message, data){
    this.httpCode = httpCode;
    this.message = message;
    this.data = data;
  }
    //return object literal with those fields
    toObject(){
      return {
        'httpCode': this.httpCode,
        'message': this.message,
        'data': this.data,
        'timestamp': new Date().toLocaleDateString()
      }
    }
}
//Export the ErrorResponse.
module.exports = ErrorResponse;
