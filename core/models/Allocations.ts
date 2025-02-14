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
    AllocationCloud,
    AllocationCloudFromJSON,
    AllocationCloudFromJSONTyped,
    AllocationCloudToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './index';

/**
 * 
 * @export
 * @interface Allocations
 */
export interface Allocations {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Allocations
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<AllocationCloud>}
     * @memberof Allocations
     */
    iterable: Array<AllocationCloud>;
}

export function AllocationsFromJSON(json: any): Allocations {
    return AllocationsFromJSONTyped(json, false);
}

export function AllocationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Allocations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(AllocationCloudFromJSON)),
    };
}

export function AllocationsToJSON(value?: Allocations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(AllocationCloudToJSON)),
    };
}


