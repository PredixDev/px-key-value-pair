# px-key-value-pair [![Build Status](https://travis-ci.org/PredixDev/px-key-value-pair.svg?branch=master)](https://travis-ci.org/PredixDev/px-key-value-pair)

## Overview

`Px-key-value-pair` is a Predix UI component that allows you to prominently display information in a dashboard.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

## Getting Started

First, install the component via bower on the command line:

```
bower install px-key-value-pair --save
```

Second, import the component in your application with the following tag in your head:

```
<link rel="import" href="/bower_components/px-key-value-pair/px-key-value-pair.html"/>
```

Finally, use the component in your application:

```
<px-key-value-pair
  label="Lorem Ipsum"
  value="12345"
  size="alpha">
</px-key-value-pair>
```

<br />
<hr />

## Documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-key-value-pair).

The documentation in this repository is supplemental to the official Predix documentation, which is continuously updated and maintained by the Predix documentation team. Go to [http://predix.io](http://predix.io)  to see the official Predix documentation.


## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-key-value-pair/issues) to submit any bugs you might find.
