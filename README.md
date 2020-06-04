# doorman

## Install and configure the Amplify CLI.

```bash
npm install -g @aws-amplify/cli
```

## amplify

```bash
amplify init
# app: doorman
# env: demo

amplify auth add
amplify analytics add
amplify push

amplify api add # users
amplify api add # history
amplify push

amplify hosting add
amplify publish
```

## amplify api add

```
$ amplify api add

? Please select from one of the below mentioned services: REST
? Provide a friendly name for your resource to be used as a label for this category in the project: users
? Provide a path (e.g., /items) /items
? Choose a Lambda source Create a new Lambda function
? Provide a friendly name for your resource to be used as a label for this category in the project: users
? Provide the AWS Lambda function name: doorman-users
? Choose the function template that you want to use: CRUD function for Amazon DynamoDB table (Integration with Amazon API Gateway and Amazon DynamoDB)
? Choose a DynamoDB data source option Create a new DynamoDB table

Welcome to the NoSQL DynamoDB database wizard
This wizard asks you a series of questions to help determine how to set up your NoSQL database table.

? Please provide a friendly name for your resource that will be used to label this category in the project: users
? Please provide table name: doorman-users

You can now add columns to the table.

? What would you like to name this column: user_id
? Please choose the data type: string
? Would you like to add another column? Yes
? What would you like to name this column: latest
? Please choose the data type: number
? Would you like to add another column? No

Before you create the database, you must specify how items in your table are uniquely organized. You do this by specifying a primary key. The primary key uniquely identifies each item in the table so that no two items can have the same key. This can be an individual column, or a combination that includes a primary key and a sort key.

To learn more about primary keys, see:
http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey

? Please choose partition key for the table: user_id
? Do you want to add a sort key to your table? Yes
? Please choose sort key for the table: latest

You can optionally add global secondary indexes for this table. These are useful when you run queries defined in a different column than the primary key.
To learn more about indexes, see:
http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.SecondaryIndexes

? Do you want to add global secondary indexes to your table? No
? Do you want to add a Lambda Trigger for your Table? No
Succesfully added DynamoDb table locally
? Do you want to access other resources created in this project from your Lambda function? No
? Do you want to edit the local lambda function now? No
Succesfully added the Lambda function locally
? Restrict API access Yes
? Who should have access? Authenticated and Guest users
? What kind of access do you want for Authenticated users? create, read, update, delete
? What kind of access do you want for Guest users? read
? Do you want to add another path? No
Successfully added resource users locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

## rewrite

```
</^[^.]+$|\.(?!(js|css|gif|ico|jpg|png|svg|txt|json|map|woff|ttf)$)([^.]+$)/>    /index.html    200
```
