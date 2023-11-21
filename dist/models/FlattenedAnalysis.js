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
exports.FlattenedAnalysisToJSON = exports.FlattenedAnalysisFromJSONTyped = exports.FlattenedAnalysisFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function FlattenedAnalysisFromJSON(json) {
    return FlattenedAnalysisFromJSONTyped(json, false);
}
exports.FlattenedAnalysisFromJSON = FlattenedAnalysisFromJSON;
function FlattenedAnalysisFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : (0, index_1.CodeAnalysisFromJSON)(json['code']),
        'id': json['id'],
        'format': json['format'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : (0, index_1.FlattenedImageAnalysisFromJSON)(json['image']),
    };
}
exports.FlattenedAnalysisFromJSONTyped = FlattenedAnalysisFromJSONTyped;
function FlattenedAnalysisToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'code': (0, index_1.CodeAnalysisToJSON)(value.code),
        'id': value.id,
        'format': value.format,
        'image': (0, index_1.FlattenedImageAnalysisToJSON)(value.image),
    };
}
exports.FlattenedAnalysisToJSON = FlattenedAnalysisToJSON;
