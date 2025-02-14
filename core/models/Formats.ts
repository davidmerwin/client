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
    Format,
    FormatFromJSON,
    FormatFromJSONTyped,
    FormatToJSON,
} from './index';

/**
 * A base class for a collection of formats and some additional meta properties.
 * @export
 * @interface Formats
 */
export interface Formats {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Formats
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Format>}
     * @memberof Formats
     */
    iterable: Array<Format>;
}

export function FormatsFromJSON(json: any): Formats {
    return FormatsFromJSONTyped(json, false);
}

export function FormatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Formats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(FormatFromJSON)),
    };
}

export function FormatsToJSON(value?: Formats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(FormatToJSON)),
    };
}


