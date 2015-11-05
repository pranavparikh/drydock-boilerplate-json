var Drydock = require("drydock");
var assets = require("./assets");

var createMock = function (options) {
  options = options ? options : {};

  var mock = new Drydock({
      port: options.port || 1337,
      ip: "0.0.0.0",
      verbose: options.verbose || false,
      initialState: assets.initialState ? assets.initialState : undefined,
      cors: true
    });

  if (assets.routes) {
    assets.routes.forEach(function (route) {
      mock.jsonRoute(route);
    });
  }


  if (assets.directories) {
    assets.directories.forEach(function (directory) {
      mock.staticDir(directory);
    });
  }

  return mock;
};

if (require.main === module) {
  var mock = createMock(require("yargs").argv);
  mock.start();
} else {
  module.exports = createMock;
}
