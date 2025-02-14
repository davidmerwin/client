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
    SeededAssetMetadata,
    SeededAssetMetadataFromJSON,
    SeededAssetMetadataFromJSONTyped,
    SeededAssetMetadataToJSON,
    SeededFile,
    SeededFileFromJSON,
    SeededFileFromJSONTyped,
    SeededFileToJSON,
    SeededFragment,
    SeededFragmentFromJSON,
    SeededFragmentFromJSONTyped,
    SeededFragmentToJSON,
    TLPDirectedDiscoveryFilters,
    TLPDirectedDiscoveryFiltersFromJSON,
    TLPDirectedDiscoveryFiltersFromJSONTyped,
    TLPDirectedDiscoveryFiltersToJSON,
} from './index';

/**
 * 
 * @export
 * @interface DiscoveredAsset
 */
export interface DiscoveredAsset {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededFile}
     * @memberof DiscoveredAsset
     */
    file?: SeededFile;
    /**
     * 
     * @type {SeededFragment}
     * @memberof DiscoveredAsset
     */
    fragment?: SeededFragment;
    /**
     * 
     * @type {string}
     * @memberof DiscoveredAsset
     */
    directory?: string;
    /**
     * 
     * @type {SeededAssetMetadata}
     * @memberof DiscoveredAsset
     */
    metadata?: SeededAssetMetadata;
    /**
     * 
     * @type {TLPDirectedDiscoveryFilters}
     * @memberof DiscoveredAsset
     */
    filters?: TLPDirectedDiscoveryFilters;
}

export function DiscoveredAssetFromJSON(json: any): DiscoveredAsset {
    return DiscoveredAssetFromJSONTyped(json, false);
}

export function DiscoveredAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'file': !exists(json, 'file') ? undefined : SeededFileFromJSON(json['file']),
        'fragment': !exists(json, 'fragment') ? undefined : SeededFragmentFromJSON(json['fragment']),
        'directory': !exists(json, 'directory') ? undefined : json['directory'],
        'metadata': !exists(json, 'metadata') ? undefined : SeededAssetMetadataFromJSON(json['metadata']),
        'filters': !exists(json, 'filters') ? undefined : TLPDirectedDiscoveryFiltersFromJSON(json['filters']),
    };
}

export function DiscoveredAssetToJSON(value?: DiscoveredAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'file': SeededFileToJSON(value.file),
        'fragment': SeededFragmentToJSON(value.fragment),
        'directory': value.directory,
        'metadata': SeededAssetMetadataToJSON(value.metadata),
        'filters': TLPDirectedDiscoveryFiltersToJSON(value.filters),
    };
}


