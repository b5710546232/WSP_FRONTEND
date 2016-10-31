var AWS = require('aws-sdk')
var bucketName = 'naturedrink-seoul';
var bucketRegion = 'ap-northeast-2';
var IdentityPoolId = 'ap-northeast-2_GYu2SAmVA';
AWS.config.loadFromPath = './config.json';
AWS.config.update({
  region: bucketRegion
});
AWS.config.accessKeyId="AKIAIVQQUCANBBWXYIGA"
AWS.config.secretAccessKey="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"
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
});

export const uploadImage = (name,file) => {
  console.log(AWS.config);
  console.log(file,name);
  s3.upload({
    ACL:'public-read' ,
    Key: name,
    Body: file,
    Bucket: bucketName
  }, function (err,data) {
    if (err) { throw err; }
    else {
      console.log(data);
      return data
    }
  });
}
