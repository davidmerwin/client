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
    SeededConnectorAsset,
    SeededConnectorAssetFromJSON,
    SeededConnectorAssetFromJSONTyped,
    SeededConnectorAssetToJSON,
} from './index';

/**
 * A encompasing creation object that can be utilized to create either an asset or a format.
 * @export
 * @interface SeededConnectorCreation
 */
export interface SeededConnectorCreation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededConnectorCreation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededConnectorAsset}
     * @memberof SeededConnectorCreation
     */
    asset?: SeededConnectorAsset;
}

export function SeededConnectorCreationFromJSON(json: any): SeededConnectorCreation {
    return SeededConnectorCreationFromJSONTyped(json, false);
}

export function SeededConnectorCreationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededConnectorCreation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': !exists(json, 'asset') ? undefined : SeededConnectorAssetFromJSON(json['asset']),
    };
}

export function SeededConnectorCreationToJSON(value?: SeededConnectorCreation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': SeededConnectorAssetToJSON(value.asset),
    };
}


