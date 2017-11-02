var express = require('express');
var router = express.Router();
var os = require("os");


/* GET home page. */
router.get('/', function(req, res, next) {
  var hostname = os.hostname();
  var os_type = os.type();
  var os_release = os.release();
  var interfaces = os.networkInterfaces();
  
  var addresses = [];
  for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

  
  res.render('index', { title: 'Sphinx Project',
   hostn: hostname,
   ipadd: addresses,
   ostype: os_type,
   osrelease: os_release,
 });
  // res.render('index', { hostn: hostname });

});



module.exports = router;

