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
    FlattenedActivity,
    FlattenedActivityFromJSON,
    FlattenedActivityFromJSONTyped,
    FlattenedActivityToJSON,
} from './index';

/**
 * 
 * @export
 * @interface ReferencedActivity
 */
export interface ReferencedActivity {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedActivity
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedActivity
     */
    id: string;
    /**
     * 
     * @type {FlattenedActivity}
     * @memberof ReferencedActivity
     */
    reference?: FlattenedActivity;
}

export function ReferencedActivityFromJSON(json: any): ReferencedActivity {
    return ReferencedActivityFromJSONTyped(json, false);
}

export function ReferencedActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedActivity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedActivityFromJSON(json['reference']),
    };
}

export function ReferencedActivityToJSON(value?: ReferencedActivity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedActivityToJSON(value.reference),
    };
}


