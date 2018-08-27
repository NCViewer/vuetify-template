# Starter

[![buddy pipeline](https://app.buddy.works/ncviewer/vuetify-template/pipelines/pipeline/149366/badge.svg?token=4d4f956fe9310ed3b01cc7b6cc3924881a27986ce8be0cb12ed95b24ee83d5b7 "buddy pipeline")](https://app.buddy.works/ncviewer/vuetify-template/pipelines/pipeline/149366)


A [Nuxt.js](https://github.com/nuxt/nuxt.js) + [Vuetify.js](https://github.com/vuetifyjs/vuetify) starter project template without the distraction of a complicated development environment.

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ vue init ncviewer/vuetify-template my-project
$ cd my-project
                   
# run dev server
$ npm run dev
# OR
$ npx nuxt
```

> Make sure to use a version of vue-cli >= 2.1 (`vue -V`).

## Usage

### Development

``` bash
# serve with hot reloading at localhost
$ npm run dev
```

Go to [http://localhost](http://localhost)

### Production

``` bash
# build for production and launch the server
$ npm run build
$ npm start
```

### Generate

``` bash
# generate a static project
$ npm run generate
```

## Continous Integration

Buddy works is used to automate our code tests. Currently this runs eslint and check if the site successfully builds. 

PR's adding additional tests through the use of a tool like jest are welcomed.

[![buddy pipeline](https://assets.buddy.works/automated-blue.svg "Automated by Buddy")](https://buddy.works)

### Local Testing

To test locally, clone this repo and install dependancies through npm.

- After dependancies are installed, simply run: `npm test`

- A new folder `test-build` will be created with an instance of your template and settings as defined by `/scenarios/full.json`

- Then simply `cd test-build` and install the template dependancies with `npm ci`.

- Lastly run `npm run build` to generate the site (automatically runs linter). 

- You can then Use `npm start` to start the server and verify any changes are functional as expected.

### CI Server

In order to setup a CI server to run tests, create a configuration that clones the repo and automates the above tests.
