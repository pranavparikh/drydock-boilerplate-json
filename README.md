A JSON API variant of [the drydock boilerplate](https://github.com/TestArmada/drydock-boilerplate).

#### Quick Start

In one shell:

Clone this boilerplate, nuke git artifacts, `npm install`:

```console
$ git clone git@github.com:TestArmada/drydock-boilerplate-json.git
$ cd drydock-boilerplate-json
$ rm -rf .git
$ npm install
```

Start the mock from the command line:

```console
$ node example-mock/main.js
```

**In another shell**, test the mock's default output at `GET` `/api/person`:

```console
$ curl http://127.0.0.1:1337/api/person; echo
{}
```

Change the birthday value with a `POST` of a JSON object to `/api/person`:

```console
$ curl -H "Content-Type: application/json" -X POST -d '{"birthday":"01/02/1925"}' http://127.0.0.1:1337/api/person; echo 
{"status":"OK"}
```

Test the mock's output at `GET` `/api/person`. The birthday has been updated.

```
$ curl http://127.0.0.1:1337/api/person; echo
{"birthday":"01/02/1925"}
```