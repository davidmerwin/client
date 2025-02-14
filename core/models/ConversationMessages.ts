/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ConversationMessage,
    ConversationMessageFromJSON,
    ConversationMessageFromJSONTyped,
    ConversationMessageToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './index';

/**
 * This is a plural version of ConversationMessage.
 * @export
 * @interface ConversationMessages
 */
export interface ConversationMessages {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ConversationMessages
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ConversationMessage>}
     * @memberof ConversationMessages
     */
    iterable: Array<ConversationMessage>;
    /**
     * This is a Map<String, int> where the the key is an ConversationMessage id.
     * @type {{ [key: string]: number; }}
     * @memberof ConversationMessages
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof ConversationMessages
     */
    score?: Score;
}

export function ConversationMessagesFromJSON(json: any): ConversationMessages {
    return ConversationMessagesFromJSONTyped(json, false);
}

export function ConversationMessagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationMessages {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ConversationMessageFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function ConversationMessagesToJSON(value?: ConversationMessages | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ConversationMessageToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}


