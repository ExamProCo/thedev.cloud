#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { StaticSite } from '../stacks/static-site';

/*
 You need to set theses
*/
const account = '072319143516'
const region  = 'us-east-1'

class MyStaticSiteStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);
    new StaticSite(this, 'StaticSite', {
      domainName: this.node.tryGetContext('domain'),
      siteSubDomain: this.node.tryGetContext('subdomain'),
    });
 }
}

const app = new cdk.App();

new MyStaticSiteStack(app, 'MyStaticSite', { env: {
  // Stack must be in us-east-1, because the ACM certificate for a
  // global CloudFront distribution must be requested in us-east-1.
  account: account,
  region: region
}});

app.synth();
