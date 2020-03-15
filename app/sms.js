
/**
 * SMS Controller
 */

let request = require('request');
let config  = require('../config/sms');

let sendOTP = function(phone, otp){
	
	let content = 'Verification Code: ' + otp
	let urls = 'http://rest.esms.vn/MainService.svc/json/SendMultipleMessage_V4_get?Phone=' + phone + '&Content=' + content + '&ApiKey=27BAB667D3BC31ED46832EEF44B560&SecretKey=5A983F487937A97A46A5DF994C7259&SmsType=2&Brandname=Verify'
	request.get({
		url: urls,
		headers: {'Content-Type': 'application/json'}
	});
}

module.exports = {
	sendOTP: sendOTP,
}
