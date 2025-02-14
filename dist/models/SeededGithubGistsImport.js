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
exports.SeededGithubGistsImportToJSON = exports.SeededGithubGistsImportFromJSONTyped = exports.SeededGithubGistsImportFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function SeededGithubGistsImportFromJSON(json) {
    return SeededGithubGistsImportFromJSONTyped(json, false);
}
exports.SeededGithubGistsImportFromJSON = SeededGithubGistsImportFromJSON;
function SeededGithubGistsImportFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'application': json['application'],
        '_public': !(0, runtime_1.exists)(json, 'public') ? undefined : json['public'],
    };
}
exports.SeededGithubGistsImportFromJSONTyped = SeededGithubGistsImportFromJSONTyped;
function SeededGithubGistsImportToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'application': value.application,
        'public': value._public,
    };
}
exports.SeededGithubGistsImportToJSON = SeededGithubGistsImportToJSON;
