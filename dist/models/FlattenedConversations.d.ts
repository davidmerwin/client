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
import { EmbeddedModelSchema, ReferencedConversation, Score } from './index';
/**
 * Flattened version of conversations.
 * @export
 * @interface FlattenedConversations
 */
export interface FlattenedConversations {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedConversations
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedConversation>}
     * @memberof FlattenedConversations
     */
    iterable: Array<ReferencedConversation>;
    /**
     * This is a Map<String, int> where the the key is an Conversation id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedConversations
     */
    indices?: {
        [key: string]: number;
    };
    /**
     *
     * @type {Score}
     * @memberof FlattenedConversations
     */
    score?: Score;
}
export declare function FlattenedConversationsFromJSON(json: any): FlattenedConversations;
export declare function FlattenedConversationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedConversations;
export declare function FlattenedConversationsToJSON(value?: FlattenedConversations | null): any;
