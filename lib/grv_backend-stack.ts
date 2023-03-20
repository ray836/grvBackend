import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class GrvBackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Pipeline', {
      pipelineName: 'GrvBackendPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('ray836/grvBackend', 'main'),
        commands: ['npm ci',
                   'npm run build',
                   'npx cdk synth'
                  ]
      }),
    });
  }
}
