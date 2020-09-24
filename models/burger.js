var orm = require('../config/orm.js');

var burger_call = {
    all: function(cb) {
        orm.all(function(res) {
            cb(res);
        });
    },

    create: function(name, cb) {
        orm.create(name, function(res) {
            cb(res);
        });
    },


    update: function(newID, cb) {
        console.log("Update Models", newID);
        orm.update(newID, function(res) {
            cb(res);
        });
    },
    delete: function(newID, cb) {
        orm.delete(newID, function(res) {
            cb(res);
        });
    }


};

module.exports = burger_call;