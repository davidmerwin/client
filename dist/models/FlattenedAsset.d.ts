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
import { EmbeddedModelSchema, FlattenedActivities, FlattenedAnchors, FlattenedAnnotations, FlattenedConversations, FlattenedFormats, FlattenedHints, FlattenedPersons, FlattenedPreview, FlattenedSensitives, FlattenedShares, FlattenedTags, FlattenedWebsites, GroupedTimestamp, MechanismEnum, Score } from './index';
/**
 * An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats. [DAG Compatible - Directed Acyclic Graph Data Structure]
 *
 * FlattenedAsset prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 *
 * i.e. FlattenedFormat.formats is Type String[] or List\<String\>, FlattenedFormat.preview is Type String, and
 * FlattenedFormat.original is Type String
 * @export
 * @interface FlattenedAsset
 */
export interface FlattenedAsset {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * The globally available UID representing the asset in the Database, both locally and in the cloud.
     * @type {string}
     * @memberof FlattenedAsset
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof FlattenedAsset
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof FlattenedAsset
     */
    creator: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    synced?: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {FlattenedFormats}
     * @memberof FlattenedAsset
     */
    formats: FlattenedFormats;
    /**
     *
     * @type {FlattenedPreview}
     * @memberof FlattenedAsset
     */
    preview: FlattenedPreview;
    /**
     * An identifier of the format that is a reference to the original.
     * @type {string}
     * @memberof FlattenedAsset
     */
    original: string;
    /**
     *
     * @type {FlattenedShares}
     * @memberof FlattenedAsset
     */
    shares?: FlattenedShares;
    /**
     *
     * @type {MechanismEnum}
     * @memberof FlattenedAsset
     */
    mechanism: MechanismEnum;
    /**
     *
     * @type {FlattenedWebsites}
     * @memberof FlattenedAsset
     */
    websites?: FlattenedWebsites;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    interacted?: GroupedTimestamp;
    /**
     *
     * @type {FlattenedTags}
     * @memberof FlattenedAsset
     */
    tags?: FlattenedTags;
    /**
     *
     * @type {FlattenedSensitives}
     * @memberof FlattenedAsset
     */
    sensitives?: FlattenedSensitives;
    /**
     *
     * @type {FlattenedPersons}
     * @memberof FlattenedAsset
     */
    persons?: FlattenedPersons;
    /**
     * This is an optional boolean that will flag that this asset came from a currated collection.
     * @type {boolean}
     * @memberof FlattenedAsset
     */
    curated?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof FlattenedAsset
     */
    discovered?: boolean;
    /**
     *
     * @type {FlattenedActivities}
     * @memberof FlattenedAsset
     */
    activities?: FlattenedActivities;
    /**
     *
     * @type {Score}
     * @memberof FlattenedAsset
     */
    score?: Score;
    /**
     *
     * @type {boolean}
     * @memberof FlattenedAsset
     */
    favorited?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof FlattenedAsset
     */
    pseudo?: boolean;
    /**
     *
     * @type {FlattenedAnnotations}
     * @memberof FlattenedAsset
     */
    annotations?: FlattenedAnnotations;
    /**
     *
     * @type {FlattenedHints}
     * @memberof FlattenedAsset
     */
    hints?: FlattenedHints;
    /**
     *
     * @type {FlattenedAnchors}
     * @memberof FlattenedAsset
     */
    anchors?: FlattenedAnchors;
    /**
     *
     * @type {FlattenedConversations}
     * @memberof FlattenedAsset
     */
    conversations?: FlattenedConversations;
}
export declare function FlattenedAssetFromJSON(json: any): FlattenedAsset;
export declare function FlattenedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAsset;
export declare function FlattenedAssetToJSON(value?: FlattenedAsset | null): any;
