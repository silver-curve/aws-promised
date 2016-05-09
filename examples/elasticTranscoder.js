'use strict';

var awsParams = {
  region: 'us-east-1'
};

var awsPromised = require('../index');
var elasticTranscoder = awsPromised.elasticTranscoder(awsParams);

var createPipelineParams = {  
  "Name":"Default",
  "InputBucket":"salesoffice.example.com-source",
  "Role":"arn:aws:iam::123456789012:role/Elastic_Transcoder_Default_Role",
  "AwsKmsKeyArn":"base64-encoded key from KMS",
  "ContentConfig":{
    "Bucket":"salesoffice.example.com-public-promos",
    "Permissions":[
      {
        "GranteeType":"Email",
        "Grantee":"marketing-promos@example.com",
        "Access":[
          "FullControl"
        ]
      }
    ],
    "StorageClass":"Standard"
  },
  "Notifications":{
    "Progressing":"",
    "Completed":"",
    "Warning":"",
    "Error":"arn:aws:sns:us-east-1:111222333444:ET_Errors"
  },
  "ThumbnailConfig":{
    "Bucket":"salesoffice.example.com-public-promos-thumbnails",
    "Permissions":[
      {
        "GranteeType":"Email",
        "Grantee":"marketing-promos@example.com",
        "Access":[
          "FullControl"
        ]
      }
    ],
    "StorageClass":"ReducedRedundancy"
  }
}

elastictranscoder.createPipePromised(params)
  .then(printContents)
  .catch(console.error);

function printContents(data) {
  console.log(data);
}
