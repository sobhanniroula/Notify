import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main(event, context) {
    const params = {
        TableName: 'notify-notes',
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        }
    };

    try {
        const result = await dynamoDbLib.call('get', params);
        if(result.Item) {
            console.log('success');
            return success(result.Item);
        } else {
            console.log('failure 1');
            return failure({ status: false, error: "Item not found." });
        }
    } catch (e) {
        console.log('exception: ' + e);
        return failure({ status:false });
    }
}