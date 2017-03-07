'use strict';

var async = require('async');

async.series([
    function (callback) {
        callback(null, '1');
    }
], function(err) {
  if (err) console.error(err);
  console.info("DB populated with dummy data.");
});