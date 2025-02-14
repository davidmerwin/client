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
exports.WebsiteToJSON = exports.WebsiteFromJSONTyped = exports.WebsiteFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function WebsiteFromJSON(json) {
    return WebsiteFromJSONTyped(json, false);
}
exports.WebsiteFromJSON = WebsiteFromJSON;
function WebsiteFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'assets': !(0, runtime_1.exists)(json, 'assets') ? undefined : (0, index_1.FlattenedAssetsFromJSON)(json['assets']),
        'url': json['url'],
        'name': json['name'],
        'created': (0, index_1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, index_1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, index_1.GroupedTimestampFromJSON)(json['deleted']),
        'mechanisms': !(0, runtime_1.exists)(json, 'mechanisms') ? undefined : ((0, runtime_1.mapValues)(json['mechanisms'], index_1.MechanismEnumFromJSON)),
        'interactions': !(0, runtime_1.exists)(json, 'interactions') ? undefined : json['interactions'],
        'persons': !(0, runtime_1.exists)(json, 'persons') ? undefined : (0, index_1.FlattenedPersonsFromJSON)(json['persons']),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, index_1.ScoreFromJSON)(json['score']),
    };
}
exports.WebsiteFromJSONTyped = WebsiteFromJSONTyped;
function WebsiteToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'assets': (0, index_1.FlattenedAssetsToJSON)(value.assets),
        'url': value.url,
        'name': value.name,
        'created': (0, index_1.GroupedTimestampToJSON)(value.created),
        'updated': (0, index_1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, index_1.GroupedTimestampToJSON)(value.deleted),
        'mechanisms': value.mechanisms === undefined ? undefined : ((0, runtime_1.mapValues)(value.mechanisms, index_1.MechanismEnumToJSON)),
        'interactions': value.interactions,
        'persons': (0, index_1.FlattenedPersonsToJSON)(value.persons),
        'score': (0, index_1.ScoreToJSON)(value.score),
    };
}
exports.WebsiteToJSON = WebsiteToJSON;
