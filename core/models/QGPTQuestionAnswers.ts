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
    QGPTQuestionAnswer,
    QGPTQuestionAnswerFromJSON,
    QGPTQuestionAnswerFromJSONTyped,
    QGPTQuestionAnswerToJSON,
} from './index';

/**
 * This is the plural of QGPTQuestionAnswer
 * @export
 * @interface QGPTQuestionAnswers
 */
export interface QGPTQuestionAnswers {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTQuestionAnswers
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<QGPTQuestionAnswer>}
     * @memberof QGPTQuestionAnswers
     */
    iterable: Array<QGPTQuestionAnswer>;
}

export function QGPTQuestionAnswersFromJSON(json: any): QGPTQuestionAnswers {
    return QGPTQuestionAnswersFromJSONTyped(json, false);
}

export function QGPTQuestionAnswersFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTQuestionAnswers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(QGPTQuestionAnswerFromJSON)),
    };
}

export function QGPTQuestionAnswersToJSON(value?: QGPTQuestionAnswers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(QGPTQuestionAnswerToJSON)),
    };
}


