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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AnchorsApi extends runtime.BaseAPI {
    /**
     * This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.
     * /anchors/create [POST]
     */
    async anchorsCreateNewAnchorRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/anchors/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededAnchorToJSON)(requestParameters.seededAnchor),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnchorFromJSON)(jsonValue));
    }
    /**
     * This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.
     * /anchors/create [POST]
     */
    async anchorsCreateNewAnchor(requestParameters) {
        const response = await this.anchorsCreateNewAnchorRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will delete a specific anchor!
     * /anchors/{anchor}/delete [POST]
     */
    async anchorsDeleteSpecificAnchorRaw(requestParameters) {
        if (requestParameters.anchor === null || requestParameters.anchor === undefined) {
            throw new runtime.RequiredError('anchor', 'Required parameter requestParameters.anchor was null or undefined when calling anchorsDeleteSpecificAnchor.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/anchors/{anchor}/delete`.replace(`{${"anchor"}}`, encodeURIComponent(String(requestParameters.anchor))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will delete a specific anchor!
     * /anchors/{anchor}/delete [POST]
     */
    async anchorsDeleteSpecificAnchor(requestParameters) {
        await this.anchorsDeleteSpecificAnchorRaw(requestParameters);
    }
    /**
     * This will get a snapshot of all your anchors.
     * /anchors [GET]
     */
    async anchorsSnapshotRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/anchors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnchorsFromJSON)(jsonValue));
    }
    /**
     * This will get a snapshot of all your anchors.
     * /anchors [GET]
     */
    async anchorsSnapshot(requestParameters) {
        const response = await this.anchorsSnapshotRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will update both the asset and the anchor reference, that will remove a anchor from an asset(only the references).  This will NOT remove the anchor. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.
     * /anchors/{anchor}/assets/delete/{asset} [POST]
     */
    async removeAnchorReferenceFromAssetRaw(requestParameters) {
        if (requestParameters.anchor === null || requestParameters.anchor === undefined) {
            throw new runtime.RequiredError('anchor', 'Required parameter requestParameters.anchor was null or undefined when calling removeAnchorReferenceFromAsset.');
        }
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling removeAnchorReferenceFromAsset.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/anchors/{anchor}/assets/delete/{asset}`.replace(`{${"anchor"}}`, encodeURIComponent(String(requestParameters.anchor))).replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will update both the asset and the anchor reference, that will remove a anchor from an asset(only the references).  This will NOT remove the anchor. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.
     * /anchors/{anchor}/assets/delete/{asset} [POST]
     */
    async removeAnchorReferenceFromAsset(requestParameters) {
        await this.removeAnchorReferenceFromAssetRaw(requestParameters);
    }
}
exports.AnchorsApi = AnchorsApi;
