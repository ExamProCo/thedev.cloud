#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkTestStack } from '../lib/cdk-test-stack';

const app = new cdk.App();
new CdkTestStack(app, 'CdkTestStack');
