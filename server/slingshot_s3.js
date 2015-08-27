Slingshot.createDirective('myFileUploads', Slingshot.S3Storage, {
  bucket: 'web-campus',
  region: 'sa-east-1',

  acl: 'public-read',

  authorize: function () {
    return true
  },

  key: function (file) {
    return file.name
  }
})

// We use rainhaven:s3 to delete files from s3, as Slingshot lacks this feature
// s3 = new S3('web-campus')

