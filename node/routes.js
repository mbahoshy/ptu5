var mod = require('../node/modules');
// var Auth = require('./auth');


module.exports = function (app) {

    //responds with index.html
    app.get("/", function(req, res) {
        console.log('index');
        // res.redirect("/index.html");

    });

    app.post('/customer', mod.newCustomer);
    // app.post('/customer/:nameFirst/:nameLast/:email/:street/:city/:zip', mod.newCustomer);
    // app.post('/newcustomer', mod.newCustomer);

    app.get('/api/tech/customer', mod.returnCustomers);

    app.get('/api/tech/customer/:id/:property?', mod.getCustomer);

    app.post('/api/tech/equipment/:id', mod.newEquipment);

    app.post('/addpm', mod.addpm);
    app.get('/pm/:customerid/:pmid', mod.findPM);

    app.post('/api/tech/customersearch', mod.customersearch);

}
