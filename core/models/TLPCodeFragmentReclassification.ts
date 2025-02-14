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
    TLPCodeFragmentReclassificationUpdates,
    TLPCodeFragmentReclassificationUpdatesFromJSON,
    TLPCodeFragmentReclassificationUpdatesFromJSONTyped,
    TLPCodeFragmentReclassificationUpdatesToJSON,
} from './index';

/**
 * Model for ML big query Reclassification.
 * @export
 * @interface TLPCodeFragmentReclassification
 */
export interface TLPCodeFragmentReclassification {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentReclassification
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    asset: string;
    /**
     * 
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    model: string;
    /**
     * 
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    created: string;
    /**
     * 
     * @type {TLPCodeFragmentReclassificationUpdates}
     * @memberof TLPCodeFragmentReclassification
     */
    updates: TLPCodeFragmentReclassificationUpdates;
    /**
     * this is the user that is reclassifying
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    user: string;
    /**
     * this is the application is which this is from.
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    context: string;
}

export function TLPCodeFragmentReclassificationFromJSON(json: any): TLPCodeFragmentReclassification {
    return TLPCodeFragmentReclassificationFromJSONTyped(json, false);
}

export function TLPCodeFragmentReclassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentReclassification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': json['asset'],
        'model': json['model'],
        'created': json['created'],
        'updates': TLPCodeFragmentReclassificationUpdatesFromJSON(json['updates']),
        'user': json['user'],
        'context': json['context'],
    };
}

export function TLPCodeFragmentReclassificationToJSON(value?: TLPCodeFragmentReclassification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': value.asset,
        'model': value.model,
        'created': value.created,
        'updates': TLPCodeFragmentReclassificationUpdatesToJSON(value.updates),
        'user': value.user,
        'context': value.context,
    };
}


