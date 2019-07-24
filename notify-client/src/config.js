export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notify-uploads"
  },
  // apiGateway: {
  //   REGION: "us-east-1",
  //   URL: "https://x0pbyub7ya.execute-api.us-east-1.amazonaws.com/prod"
  // },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://jdnakm8zd3.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_JEebIEi7r",
    APP_CLIENT_ID: "7ov4mfia5a0vtdcif020mbp0d7",
    IDENTITY_POOL_ID: "us-east-2:1a4a1f47-602a-4b3e-988d-51b170705a94"
  }
};