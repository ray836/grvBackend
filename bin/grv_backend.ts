#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { GrvBackendStack } from '../lib/grv_backend-stack';

const app = new cdk.App();
new GrvBackendStack(app, 'GrvBackendStack', {
  env: {
    account: '475191662736',
    region: 'us-west-2',
  }
});