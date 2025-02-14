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
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    PlatformEnum,
    PlatformEnumFromJSON,
    PlatformEnumFromJSONTyped,
    PlatformEnumToJSON,
    ReferencedAnchor,
    ReferencedAnchorFromJSON,
    ReferencedAnchorFromJSONTyped,
    ReferencedAnchorToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './index';

/**
 * 
 * @export
 * @interface FlattenedAnchorPoint
 */
export interface FlattenedAnchorPoint {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAnchorPoint
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedAnchorPoint
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedAnchorPoint
     */
    verified?: boolean;
    /**
     * This is the text of the path.
     * @type {string}
     * @memberof FlattenedAnchorPoint
     */
    fullpath: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchorPoint
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchorPoint
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchorPoint
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {PlatformEnum}
     * @memberof FlattenedAnchorPoint
     */
    platform?: PlatformEnum;
    /**
     * 
     * @type {ReferencedAnchor}
     * @memberof FlattenedAnchorPoint
     */
    anchor: ReferencedAnchor;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedAnchorPoint
     */
    score?: Score;
}

export function FlattenedAnchorPointFromJSON(json: any): FlattenedAnchorPoint {
    return FlattenedAnchorPointFromJSONTyped(json, false);
}

export function FlattenedAnchorPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAnchorPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'verified': !exists(json, 'verified') ? undefined : json['verified'],
        'fullpath': json['fullpath'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'platform': !exists(json, 'platform') ? undefined : PlatformEnumFromJSON(json['platform']),
        'anchor': ReferencedAnchorFromJSON(json['anchor']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedAnchorPointToJSON(value?: FlattenedAnchorPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'verified': value.verified,
        'fullpath': value.fullpath,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'platform': PlatformEnumToJSON(value.platform),
        'anchor': ReferencedAnchorToJSON(value.anchor),
        'score': ScoreToJSON(value.score),
    };
}


