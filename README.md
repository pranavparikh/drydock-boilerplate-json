A JSON API variant of [the drydock boilerplate](https://github.com/TestArmada/drydock-boilerplate).

#### Quick Start

In one shell:

```console
$ git clone git@github.com:TestArmada/drydock-boilerplate-json.git
$ cd drydock-boilerplate-json
$ rm -rf .git
$ npm install
$ node example-mock/main.js
```

In another shell:

```console
$ curl http://127.0.0.1:1337/api/person; echo
{}

$ curl -H "Content-Type: application/json" -X POST -d '{"birthday":"01/02/1925"}' http://127.0.0.1:1337/api/person; echo 
{"status":"OK"}

$ curl http://127.0.0.1:1337/api/person; echo
{"birthday":"01/02/1925"}
```