var neo4j = require('neo4j-driver').v1;

var driver = neo4j.driver("bolt://" + 'neo4j_db', {});
var async = require('async');
// Register a callback to know if driver creation was successful:
driver.onCompleted = function () {
    console.log('Connected to neo4j_db');
};

// Register a callback to know if driver creation failed.
// This could happen due to wrong credentials or database unavailability:
driver.onError = function (error) {
    console.log('Driver instantiation failed', error);
    console.log('Driver instantiation failed', error);
};

exports.run = function (query, parameter, next) {
    var session = driver.session();
    var results = []
    session.run(query, parameter).
        subscribe({
            onNext: function (record) {
                results.push(record);
            },
            onCompleted: function () {
                session.close();
                next(null, results);
            },
            onError: function (error) {
                session.close();
                next(error);
            }
        });
}

execute = function (query, next) {
    var session = driver.session();
    var transaction = session.beginTransaction();
    var rollback = false;
    var errorDetails = {}
    var results = [];
    transaction.
        run(query.get(), query.parameter()).
        subscribe({
            onNext: function (record) {
                if (query.transform) {
                    var transformed = query.transform(record);
                    results.push(transformed);
                } else {
                    results.push(record);
                }
            },
            onCompleted: function () { },
            onError: function (error) {
                errorDetails = error;
                rollback = true;
            }
        });

    if (rollback) {

        transaction.rollback();
        session.close();
        next({
            error: errorDetails,
            message: "transaction failed!"
        })
    } else {

        transaction.commit().then(function () {
            session.close();
            next(null, results);

        }).catch(function (error) {
            session.close();
            next(error);
        })
    }
}

module.exports.execute = execute;

