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
exports.SeededTrackedFormatEventToJSON = exports.SeededTrackedFormatEventFromJSONTyped = exports.SeededTrackedFormatEventFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function SeededTrackedFormatEventFromJSON(json) {
    return SeededTrackedFormatEventFromJSONTyped(json, false);
}
exports.SeededTrackedFormatEventFromJSON = SeededTrackedFormatEventFromJSON;
function SeededTrackedFormatEventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'identifierDescriptionPair': (0, index_1.TrackedFormatEventIdentifierDescriptionPairsFromJSON)(json['identifier_description_pair']),
        'format': (0, index_1.ReferencedFormatFromJSON)(json['format']),
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : (0, index_1.TrackedFormatEventMetadataFromJSON)(json['metadata']),
    };
}
exports.SeededTrackedFormatEventFromJSONTyped = SeededTrackedFormatEventFromJSONTyped;
function SeededTrackedFormatEventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'identifier_description_pair': (0, index_1.TrackedFormatEventIdentifierDescriptionPairsToJSON)(value.identifierDescriptionPair),
        'format': (0, index_1.ReferencedFormatToJSON)(value.format),
        'metadata': (0, index_1.TrackedFormatEventMetadataToJSON)(value.metadata),
    };
}
exports.SeededTrackedFormatEventToJSON = SeededTrackedFormatEventToJSON;
