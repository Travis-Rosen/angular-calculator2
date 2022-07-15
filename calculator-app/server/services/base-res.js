/**
 * Travis Rosen
 * 7/12/2022
 * base-res.js
 * Base response for apis
 */


class BaseResponse{
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
//Export the BaseResponse.
module.exports = BaseResponse;
