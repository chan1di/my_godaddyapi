# This package uses axios to call the api, You can install it via below command

npm install axios

# Uses with MeteorJs


const { availableDomain } = require('my_godaddyapi');

const Settings = require(./settings.js) 

Meteor.methods({

    checkDomain: function(domainName, checkType){

        var params = {}

        return availableDomain(params, Settings.key, Settings.secret, domainName, checkType);
    }

})


# For the api documentation you can visit the below URL

=> https://developer.godaddy.com/doc/endpoint/domains#/v1/available

