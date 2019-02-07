var exec = require('cordova/exec');



exports.initPayment = function(occ, success, error){
    exec(success, error, "Onepay", "initPayment", [occ]);
};
