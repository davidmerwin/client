"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLPCodeFragmentStatisticsToJSON = exports.TLPCodeFragmentStatisticsFromJSONTyped = exports.TLPCodeFragmentStatisticsFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function TLPCodeFragmentStatisticsFromJSON(json) {
    return TLPCodeFragmentStatisticsFromJSONTyped(json, false);
}
exports.TLPCodeFragmentStatisticsFromJSON = TLPCodeFragmentStatisticsFromJSON;
function TLPCodeFragmentStatisticsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'descriptive': !(0, runtime_1.exists)(json, 'descriptive') ? undefined : (0, index_1.TLPCodeFragmentDescriptiveStatisticsFromJSON)(json['descriptive']),
    };
}
exports.TLPCodeFragmentStatisticsFromJSONTyped = TLPCodeFragmentStatisticsFromJSONTyped;
function TLPCodeFragmentStatisticsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'descriptive': (0, index_1.TLPCodeFragmentDescriptiveStatisticsToJSON)(value.descriptive),
    };
}
exports.TLPCodeFragmentStatisticsToJSON = TLPCodeFragmentStatisticsToJSON;
