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
    TrackedAssetsEventSearchMetadata,
    TrackedAssetsEventSearchMetadataFromJSON,
    TrackedAssetsEventSearchMetadataFromJSONTyped,
    TrackedAssetsEventSearchMetadataToJSON,
} from './index';

/**
 * Additional Metadata as Neeeded i.e. Search + Query, etc
 * @export
 * @interface SeededTrackedAssetsEventMetadata
 */
export interface SeededTrackedAssetsEventMetadata {
    /**
     * 
     * @type {TrackedAssetsEventSearchMetadata}
     * @memberof SeededTrackedAssetsEventMetadata
     */
    search?: TrackedAssetsEventSearchMetadata;
}

export function SeededTrackedAssetsEventMetadataFromJSON(json: any): SeededTrackedAssetsEventMetadata {
    return SeededTrackedAssetsEventMetadataFromJSONTyped(json, false);
}

export function SeededTrackedAssetsEventMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedAssetsEventMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'search': !exists(json, 'search') ? undefined : TrackedAssetsEventSearchMetadataFromJSON(json['search']),
    };
}

export function SeededTrackedAssetsEventMetadataToJSON(value?: SeededTrackedAssetsEventMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'search': TrackedAssetsEventSearchMetadataToJSON(value.search),
    };
}


