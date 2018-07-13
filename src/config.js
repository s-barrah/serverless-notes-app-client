export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-west-2",
        BUCKET: "crs-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://0x54pjvjli.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_PD9tfAXVy",
        APP_CLIENT_ID: "2knr42b74cbmiiff3o823atbb2",
        IDENTITY_POOL_ID: "us-west-2:89bb28b8-7097-4b2e-8d0f-21838cb37b8b"
    }
};