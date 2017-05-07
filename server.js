var express = require("express")

var mongo = require("mongodb").MongoClient

var url = process.env.MONGOLAB_URI

mongo.connect(url, function (err, db) {
    if(err) {
        return console.log('Unable to connect to the mongoDB server. Error: ', err)
    }
    console.log('Connection established to remote database')
    db.close()
})