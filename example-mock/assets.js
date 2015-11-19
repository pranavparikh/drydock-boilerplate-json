var path = require("path");
var Drydock = require("drydock");

var initialState = {
  birthday: null
};

var routes = [
  {
    name: "set-info",
    method: "POST",
    path: "/api/person",
    handlers: {
      "set-person-success": {
        description: "Save the person's info.",
        handler: function (request) {
          this.state.birthday = request.payload.birthday;
          this.cookies.hasBirthday = "true";
          return { status: "OK" };
        }
      }
    }
  },

  {
    name: "get-info",
    method: "GET",
    path: "/api/person",
    handlers: {
      "get-person-success": {
        description: "Return info about the person.",
        handler: function (request) {
          var birthday = this.state.birthday;

          this.cookies.msg = "1";

          return { birthday: birthday };
        }
      },
      "get-person-default-birthday": {
        description: "Return info about the person, but set a default birthday if one isn't already set",
        handler: function (request) {
          if (!this.state.birthday) {
            this.state.birthday = "7/15/2014";
          }

          var birthday = this.state.birthday;

          this.cookies.msg = "1";

          return { birthday: birthday };
        }
      },
      "get-person-error": {
        description: "Return an error instead of the person's info.",
        handler: function () {
          throw new Drydock.Errors.HttpError(401, "<html>can't do that right now...</html>");
        }
      }
    }
  }
];

var directories = [
  {
    filePath: path.join(__dirname, "static-assets"),
    urlPath: "/static/"
  }
];

module.exports = {
  routes: routes,
  directories: directories
};