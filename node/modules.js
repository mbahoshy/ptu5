var customer = require('../node/models/customer'),
    _ = require("underscore");

function newCustomer (req, res) {
    // var nameFirst = req.param("nameFirst"),
    // 	nameLast = req.param("nameLast"),
    // 	email = req.param("email"),
    // 	street = req.param("street"),
    // 	city = req.param("city"),
    // 	zip = req.param("zip");

    var newCustomer = req.body;
    console.log(newCustomer);
    customer.add(newCustomer.nameLast, newCustomer.nameFirst, newCustomer.email, newCustomer.address.street, newCustomer.address.city, newCustomer.address.zip, res);

    // console.log(nameFirst);
    // res.json({'success':true});

}

function returnCustomers (req, res) {
    customer.find({}, '', function(err, data) {
        res.json(data);
    });
}


function getCustomer (req, res) {
    var id = req.param("id");

    console.log(id);
    customer.findById(id, function(err, data){
        var returnObject = {};
        if(req.param("property")) {
          returnObject = data[req.param("property")];
        } else {
          returnObject = data;
        }
        res.json(returnObject);
    });
}

function newEquipment (req, res) {
    var customerid = req.param("id"),
        equipment = req.body,
        equipmentCounter;

    customer.findById(customerid, function(err, data){
        equipmentCounter = data.equipmentCounter;
        console.dir(data.equipmentCounter);
        updateCustomer();
    });

    console.log("equipmentCounter");
    console.log(equipmentCounter);
    function updateCustomer () {

      equipment.equipmentid = equipmentCounter;

        equipmentCounter ++;

        var conditions = { _id: customerid },
            options = { multi: false },
            update = { $addToSet: { equipment: equipment }, $set: {equipmentCounter: equipmentCounter}};

        customer.update(conditions, update, options, callback);
    }

    function callback (err, numAffected) {
        if(err) throw err;
        res.end();
    }

}

function addpm (req, res) {
    console.dir(req.body);
    var customerid = req.body.customerid,
        ticket = req.body.ticket,
        t = new Date(),
        pmCounter;

    ticket.date = t;

    console.dir(ticket);

    customer.findById(customerid, function(err, data){
        pmCounter = data.pmCounter;
        ticket.pmid = pmCounter;
        pmCounter++;
        updateCustomer();
    });

    function updateCustomer() {
        var conditions = { _id: customerid },
            options = { multi: false },
            update = { $push: { pm: ticket }, $set: {pmCounter: pmCounter}};

        customer.update(conditions, update, options, callback);
    }

    function callback (err, numAffected) {
        if(err) throw err;
        res.end();
    }

}

function findPM (req, res) {

}

function customersearch (req, res){
    console.dir(req.body);

    // var action = {};
    // action[searchoptions] = searchterms;

    // console.dir(action);

    // console.dir(searchoptions);
    // console.dir(searchterms);

    customer.find(req.body, function (err, documents) {
        console.dir(documents);
        res.json(documents);
    });
}


exports.addpm = addpm;
exports.findPM = findPM;
exports.newCustomer = newCustomer;
exports.getCustomer = getCustomer;
exports.returnCustomers = returnCustomers;
exports.newEquipment = newEquipment;
exports.customersearch = customersearch;
