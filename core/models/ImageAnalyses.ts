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
    ImageAnalysis,
    ImageAnalysisFromJSON,
    ImageAnalysisFromJSONTyped,
    ImageAnalysisToJSON,
} from './index';

/**
 * 
 * @export
 * @interface ImageAnalyses
 */
export interface ImageAnalyses {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ImageAnalyses
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ImageAnalysis>}
     * @memberof ImageAnalyses
     */
    iterable: Array<ImageAnalysis>;
}

export function ImageAnalysesFromJSON(json: any): ImageAnalyses {
    return ImageAnalysesFromJSONTyped(json, false);
}

export function ImageAnalysesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageAnalyses {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ImageAnalysisFromJSON)),
    };
}

export function ImageAnalysesToJSON(value?: ImageAnalyses | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ImageAnalysisToJSON)),
    };
}


