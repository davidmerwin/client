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
} from './index';

/**
 * 
 * @export
 * @interface SeededTrackedInteractionEventIdentifierDescriptionPairs
 */
export interface SeededTrackedInteractionEventIdentifierDescriptionPairs {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedInteractionEventIdentifierDescriptionPairs
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof SeededTrackedInteractionEventIdentifierDescriptionPairs
     */
    assetsListRefreshed?: SeededTrackedInteractionEventIdentifierDescriptionPairsAssetsListRefreshedEnum;
}

/**
* @export
* @enum {string}
*/
export enum SeededTrackedInteractionEventIdentifierDescriptionPairsAssetsListRefreshedEnum {
    TheAssetsListWasRefreshedThroughUiElement = 'the_assets_list_was_refreshed_through_ui_element'
}

export function SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSON(json: any): SeededTrackedInteractionEventIdentifierDescriptionPairs {
    return SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}

export function SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedInteractionEventIdentifierDescriptionPairs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'assetsListRefreshed': !exists(json, 'assets_list_refreshed') ? undefined : json['assets_list_refreshed'],
    };
}

export function SeededTrackedInteractionEventIdentifierDescriptionPairsToJSON(value?: SeededTrackedInteractionEventIdentifierDescriptionPairs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'assets_list_refreshed': value.assetsListRefreshed,
    };
}


