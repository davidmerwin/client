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
import { Application, ConversationGrounding, ConversationTypeEnum, EmbeddedModelSchema, FlattenedAnchors, FlattenedAnnotations, FlattenedAssets, FlattenedConversationMessages, GroupedTimestamp, ReferencedModel, Score } from './index';
/**
 * This is a flattend version of the Convsersation for DAG-Safety.
 *
 * This will hold together a conversation. Ie allthe message within a conversation.
 *
 * All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.
 *
 * model is a calculated property, and will be the model of the last message sent if applicable.
 * @export
 * @interface FlattenedConversation
 */
export interface FlattenedConversation {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedConversation
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof FlattenedConversation
     */
    id: string;
    /**
     * This is a name that is customized.
     * @type {string}
     * @memberof FlattenedConversation
     */
    name?: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversation
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversation
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversation
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {boolean}
     * @memberof FlattenedConversation
     */
    favorited?: boolean;
    /**
     *
     * @type {Application}
     * @memberof FlattenedConversation
     */
    application?: Application;
    /**
     *
     * @type {FlattenedAnnotations}
     * @memberof FlattenedConversation
     */
    annotations?: FlattenedAnnotations;
    /**
     *
     * @type {FlattenedConversationMessages}
     * @memberof FlattenedConversation
     */
    messages: FlattenedConversationMessages;
    /**
     *
     * @type {ReferencedModel}
     * @memberof FlattenedConversation
     */
    model?: ReferencedModel;
    /**
     *
     * @type {FlattenedAssets}
     * @memberof FlattenedConversation
     */
    assets?: FlattenedAssets;
    /**
     *
     * @type {FlattenedAnchors}
     * @memberof FlattenedConversation
     */
    anchors?: FlattenedAnchors;
    /**
     *
     * @type {ConversationTypeEnum}
     * @memberof FlattenedConversation
     */
    type: ConversationTypeEnum;
    /**
     *
     * @type {ConversationGrounding}
     * @memberof FlattenedConversation
     */
    grounding?: ConversationGrounding;
    /**
     *
     * @type {Score}
     * @memberof FlattenedConversation
     */
    score?: Score;
}
export declare function FlattenedConversationFromJSON(json: any): FlattenedConversation;
export declare function FlattenedConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedConversation;
export declare function FlattenedConversationToJSON(value?: FlattenedConversation | null): any;
