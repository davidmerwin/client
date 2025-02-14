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
import { EmbeddedModelSchema, ExportedDatabaseFormats } from './index';
/**
 *
 * @export
 * @interface ExportedDatabase
 */
export interface ExportedDatabase {
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    analyses: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    applications: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    assets: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    codeAnalyses: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    files: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    formatMetrics: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    formats: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    fragments: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    imageAnalyses: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    models: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    ocrAnalyses: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    persons: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    sensitives: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    tags: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    websites: Array<number>;
    /**
     *
     * @type {ExportedDatabaseFormats}
     * @memberof ExportedDatabase
     */
    values: ExportedDatabaseFormats;
    /**
     * This is the version of your os_server or cloud_server that we we exporting from.
     * @type {string}
     * @memberof ExportedDatabase
     */
    version: string;
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ExportedDatabase
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    relationships?: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    activities?: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    annotations?: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    hints?: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    anchors?: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    anchorPoints?: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    conversations?: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    conversationMessages?: Array<number>;
    /**
     *
     * @type {ExportedDatabaseFormats}
     * @memberof ExportedDatabase
     */
    messageValues?: ExportedDatabaseFormats;
}
export declare function ExportedDatabaseFromJSON(json: any): ExportedDatabase;
export declare function ExportedDatabaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportedDatabase;
export declare function ExportedDatabaseToJSON(value?: ExportedDatabase | null): any;
