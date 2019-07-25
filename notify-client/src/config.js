export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notify-uploads-bucket"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://bxq8l2ywq2.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_HyYTFeT6T",
    APP_CLIENT_ID: "468kpe2k4168vblebvvmu2eeu0",
    IDENTITY_POOL_ID: "us-east-1:4fa8354c-8baa-4c93-b31b-9520acd3d047"
  },
  social: {
    FB: "337406937182609"
  }
};