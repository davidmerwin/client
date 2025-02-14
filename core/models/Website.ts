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
    FlattenedAssets,
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
    FlattenedPersons,
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './index';

/**
 * This is a specific model for related websites to an asset.
 * @export
 * @interface Website
 */
export interface Website {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Website
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof Website
     */
    id: string;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof Website
     */
    assets?: FlattenedAssets;
    /**
     * this is the actual website url.
     * @type {string}
     * @memberof Website
     */
    url: string;
    /**
     * This is a name that is customized.
     * @type {string}
     * @memberof Website
     */
    name: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Website
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Website
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Website
     */
    deleted?: GroupedTimestamp;
    /**
     * This is a Map<String, MechanismEnum> where the the key is an asset id.
     * @type {{ [key: string]: MechanismEnum; }}
     * @memberof Website
     */
    mechanisms?: { [key: string]: MechanismEnum; };
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof Website
     */
    interactions?: number;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof Website
     */
    persons?: FlattenedPersons;
    /**
     * 
     * @type {Score}
     * @memberof Website
     */
    score?: Score;
}

export function WebsiteFromJSON(json: any): Website {
    return WebsiteFromJSONTyped(json, false);
}

export function WebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Website {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'url': json['url'],
        'name': json['name'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'mechanisms': !exists(json, 'mechanisms') ? undefined : (mapValues(json['mechanisms'], MechanismEnumFromJSON)),
        'interactions': !exists(json, 'interactions') ? undefined : json['interactions'],
        'persons': !exists(json, 'persons') ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function WebsiteToJSON(value?: Website | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'assets': FlattenedAssetsToJSON(value.assets),
        'url': value.url,
        'name': value.name,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'mechanisms': value.mechanisms === undefined ? undefined : (mapValues(value.mechanisms, MechanismEnumToJSON)),
        'interactions': value.interactions,
        'persons': FlattenedPersonsToJSON(value.persons),
        'score': ScoreToJSON(value.score),
    };
}


