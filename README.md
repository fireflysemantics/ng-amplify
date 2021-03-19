# AWS Amplify Angular Resources 

This package contains the following Angular specific resources updated to work with AWS Amplify:
- tsconfig.app.json
- polyfills.ts
- index.html
- main.ts

# Overview

As [detailed here](https://developer.fireflysemantics.com/tasks/tasks--angular--getting-angular-ready-for-aws-amplify) Angular needs to have some resources updated when using [AWS Amplify](https://aws.amazon.com/amplify/).

So we could followed the [steps detailed here](https://developer.fireflysemantics.com/tasks/tasks--angular--getting-angular-ready-for-aws-amplify) and do these updates manually, but it's much easier to just copy in updated versions from this package.

# Usage

This project also has AWS Amplify as a dependency with a `*` version, so `npm i @fireflysemantics/ng-amplify` will also install the latest version of AWS Amplify.

Within the Angular project run:

```
npm i @fireflysemantics/ng-amplify
cd node_modules/@fireflysemantics/ng-amplify/ && npm i && cd ../..
node node_modules/@fireflysemantics/ng-amplify/cp.js
```
The node script `cp.js` will copy over the relevant resources.

# The Catch

You'll notice that inside `index.html` the `title` is set to `CHANGE THIS TITLE`.  So update the title and any other SEO properties that need updating.