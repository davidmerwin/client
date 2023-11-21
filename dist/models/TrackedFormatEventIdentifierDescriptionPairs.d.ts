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
import { EmbeddedModelSchema } from './index';
/**
 * This is a model that allows us to send send over super specific format related events such as copied, deleted, downloaded, etc
 * @export
 * @interface TrackedFormatEventIdentifierDescriptionPairs
 */
export interface TrackedFormatEventIdentifierDescriptionPairs {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    schema?: EmbeddedModelSchema;
    /**
     * The key value pair for an asset being created.
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatCreated?: TrackedFormatEventIdentifierDescriptionPairsFormatCreatedEnum;
    /**
     * If a format was copied entirely
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatCopied?: TrackedFormatEventIdentifierDescriptionPairsFormatCopiedEnum;
    /**
     * If a format was copied partially
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatPartiallyCopied?: TrackedFormatEventIdentifierDescriptionPairsFormatPartiallyCopiedEnum;
    /**
     * If a format was downloaded
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatDownloaded?: TrackedFormatEventIdentifierDescriptionPairsFormatDownloadedEnum;
    /**
     * If an format was deleted
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatDeleted?: TrackedFormatEventIdentifierDescriptionPairsFormatDeletedEnum;
    /**
     * If a generic classification was changed on a format
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatGenericClassificationUpdated?: TrackedFormatEventIdentifierDescriptionPairsFormatGenericClassificationUpdatedEnum;
    /**
     * If a specific classification was changed on a format
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatSpecificClassificationUpdated?: TrackedFormatEventIdentifierDescriptionPairsFormatSpecificClassificationUpdatedEnum;
    /**
     * a format was updated, generic update.
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatUpdated?: TrackedFormatEventIdentifierDescriptionPairsFormatUpdatedEnum;
    /**
     * a format was inserted
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatInserted?: TrackedFormatEventIdentifierDescriptionPairsFormatInsertedEnum;
    /**
     * a format's value was update ie, the text, etc...
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatValueEdited?: TrackedFormatEventIdentifierDescriptionPairsFormatValueEditedEnum;
}
/**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatCreatedEnum {
    AFormatWasCreated = "a_format_was_created"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatCopiedEnum {
    IfAFormatWasEntirelyCopied = "if_a_format_was_entirely_copied"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatPartiallyCopiedEnum {
    IfAFormatWasPartiallyCopied = "if_a_format_was_partially_copied"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatDownloadedEnum {
    IfAFormatWasDownloaded = "if_a_format_was_downloaded"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatDeletedEnum {
    IfAFormatWasDeleted = "if_a_format_was_deleted"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatGenericClassificationUpdatedEnum {
    IfAGenericClassificationWasChangedOnAFormat = "if_a_generic_classification_was_changed_on_a_format"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatSpecificClassificationUpdatedEnum {
    IfASpecificClassificationWasChangedOnAFormat = "if_a_specific_classification_was_changed_on_a_format"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatUpdatedEnum {
    AFormatWasUpdated = "a_format_was_updated"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatInsertedEnum {
    AFormatWasInserted = "a_format_was_inserted"
} /**
* @export
* @enum {string}
*/
export declare enum TrackedFormatEventIdentifierDescriptionPairsFormatValueEditedEnum {
    AFormatValueWasEdited = "a_format_value_was_edited"
}
export declare function TrackedFormatEventIdentifierDescriptionPairsFromJSON(json: any): TrackedFormatEventIdentifierDescriptionPairs;
export declare function TrackedFormatEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedFormatEventIdentifierDescriptionPairs;
export declare function TrackedFormatEventIdentifierDescriptionPairsToJSON(value?: TrackedFormatEventIdentifierDescriptionPairs | null): any;
