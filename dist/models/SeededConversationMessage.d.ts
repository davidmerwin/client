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
import { ConversationMessageSentimentEnum, EmbeddedModelSchema, FragmentFormat, GroupedTimestamp, Model, QGPTConversationMessageRoleEnum, ReferencedConversation } from './index';
/**
 * This is a seeded version of a ConversationMessage.
 *
 * conversation is optional, this is because it can be used within the SeededConversation, however if this is passed into the /messages/create w/o a conversation uuid then we will throw an error.
 * @export
 * @interface SeededConversationMessage
 */
export interface SeededConversationMessage {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededConversationMessage
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof SeededConversationMessage
     */
    created?: GroupedTimestamp;
    /**
     *
     * @type {Model}
     * @memberof SeededConversationMessage
     */
    model?: Model;
    /**
     *
     * @type {FragmentFormat}
     * @memberof SeededConversationMessage
     */
    fragment: FragmentFormat;
    /**
     *
     * @type {ReferencedConversation}
     * @memberof SeededConversationMessage
     */
    conversation?: ReferencedConversation;
    /**
     *
     * @type {ConversationMessageSentimentEnum}
     * @memberof SeededConversationMessage
     */
    sentiment?: ConversationMessageSentimentEnum;
    /**
     *
     * @type {QGPTConversationMessageRoleEnum}
     * @memberof SeededConversationMessage
     */
    role: QGPTConversationMessageRoleEnum;
}
export declare function SeededConversationMessageFromJSON(json: any): SeededConversationMessage;
export declare function SeededConversationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededConversationMessage;
export declare function SeededConversationMessageToJSON(value?: SeededConversationMessage | null): any;
