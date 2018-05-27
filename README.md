# stockup-gql
GraphQL API for stock management, built with the Serverless framework and hosted on AWS Lambda. [Here's a walkthrough]()

## Getting Started
### Prerequisites
- Node.js v6.10.0 or greater
- An AWS account. You can sign up for a free account [here](http://aws.amazon.com/free)

1. Install the serverless framework: `npm install -g serverless`
2. Run `serverless install --url https://github.com/shalvah/stockup-gql` to install the service
3. Install dependencies: `cd stockup-gql && npm install`
4. Deploy: `serverless deploy` (You'll need to configure the serverless CLI with your AWS credentials; follow [these instructions](https://www.youtube.com/watch?v=HSd9uYj2LJA))

## Built With

* [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) - serverless cloud provider
* [The serverless framework](https://serverless.com/) - CLI tool for building serverless apps
* [Node.js](nodejs.org)
