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
 * If an asset was created from a clipboard event
 * @export
 * @interface TrackedAssetEventCreationMetadataClipboard
 */
export interface TrackedAssetEventCreationMetadataClipboard {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetEventCreationMetadataClipboard
     */
    schema?: EmbeddedModelSchema;
    /**
     * Whether the clipboard was utilized via the keyboard
     * @type {boolean}
     * @memberof TrackedAssetEventCreationMetadataClipboard
     */
    keyboard?: boolean;
    /**
     * Whether the clipboard was extracted through a button click
     * @type {boolean}
     * @memberof TrackedAssetEventCreationMetadataClipboard
     */
    interaction?: boolean;
}

export function TrackedAssetEventCreationMetadataClipboardFromJSON(json: any): TrackedAssetEventCreationMetadataClipboard {
    return TrackedAssetEventCreationMetadataClipboardFromJSONTyped(json, false);
}

export function TrackedAssetEventCreationMetadataClipboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventCreationMetadataClipboard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'keyboard': !exists(json, 'keyboard') ? undefined : json['keyboard'],
        'interaction': !exists(json, 'interaction') ? undefined : json['interaction'],
    };
}

export function TrackedAssetEventCreationMetadataClipboardToJSON(value?: TrackedAssetEventCreationMetadataClipboard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'keyboard': value.keyboard,
        'interaction': value.interaction,
    };
}


