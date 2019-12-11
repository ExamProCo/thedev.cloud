# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


# Directory

bin    - only contains the index.ts. Used for boostapping the stacks
stacks - contains the indivual CDK stacks
public - the static website contents which will get uploaded to S3

# Getting Started

You have to be using at least Node10.

## Install Lang
```
nvm install 10
nvm use 10
```

## Install Global CLI
You'll need to install the CDK CLI globally
```
npm install -g aws-cdk
```

## Install Deps
Install all required dependecies
```
npm i

```


## Configuration
Configure the context in `cdk.json` with your requirements:
```
   "context": {
     "domain": "thedev.cloud",
     "subdomain": "www"
   }

```

Set Varibales in `bin/index.ts` before transpiling
```
const account = '072319143516'
const region  = 'us-east-1'
```


## Transpile
Transpile Typescript files to Javascript
```
npm run build
```


## Synthesize
Create an the CloudFormatione template which is then used to deploy
```
cdk synth --profile thedevcloud
```
The generated CloudFormation template will be outputed into `cdk.out/` directory

## Boostrap CloudFormation Template Stacks to S3

Before you can deploy your generated CloudFormation template it needs to
be uploaded to S3 along with addtional assets. So we'll boostrap before
we deploy
```
cdk bootstrap --profile thedevcloud
```

## Deploy CloudFormation Template Stacks to S3

Ensure the credentailas via your profile you are using has access to create roles.
You may want to have a user with AdmistrativeAccess


Then we can go ahead and deploy
```
cdk deploy --profile thedevcloud
```
