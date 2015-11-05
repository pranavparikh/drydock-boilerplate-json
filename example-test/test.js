var request = require("request");

// create a new instance of the mock on port 12000
var mock = require("../mock/main")({
  port: 12000
});

mock.start();

request("http://localhost:12000/api/person", function (error, data, body) {
  console.log("body:");
  console.log(body);

  // Tell the get-info endpoint to fail next time we make a request
  mock
    .route("get-info")
    .setHandler("get-person-error");

  // Request the person details again, hoping to get an error
  request("http://localhost:12000/api/person", function (error, data, body) {
    console.log("body:");
    console.log(body);

    process.exit(0);
  });

});