/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/search-config/typedef.graphql":
/*!*******************************************!*\
  !*** ./src/search-config/typedef.graphql ***!
  \*******************************************/
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"DateTime"},"directives":[]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SearchResponseCode"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"status"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"DocumentInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"title"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"abstract"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"description"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"contentType"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"operation"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"icon"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"uri"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"tags"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"timestamp"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"lastModifiedDate"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"createdDate"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"createdBy"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"lastModifiedBy"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"SearchInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"dataSource"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"documents"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentInput"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"DocumentType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"abstract"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"content_type"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"operation"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"icon"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"uri"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"tags"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"timestamp"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastModifiedDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdBy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastModifiedBy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ResponseHeaderType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"zkConnected"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"status"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"QTime"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ResponseType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"numFound"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"start"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"docs"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentType"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SearchResponseType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"responseHeader"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ResponseHeaderType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"response"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ResponseType"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","description":{"kind":"StringValue","value":"Universal Search endpoint","block":true},"name":{"kind":"Name","value":"search"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"query"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"start"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"rows"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchResponseType"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","description":{"kind":"StringValue","value":"Search index creation & updation","block":true},"name":{"kind":"Name","value":"manageIndex"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchResponseCode"}},"directives":[]},{"kind":"FieldDefinition","description":{"kind":"StringValue","value":"Search index deletion","block":true},"name":{"kind":"Name","value":"deleteIndex"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchResponseCode"}},"directives":[]}]}],"loc":{"start":0,"end":1315}};
    doc.loc.source = {"body":"scalar DateTime\n\ntype SearchResponseCode {\n  status: Int\n}\n\ninput DocumentInput {\n  id: String\n  title: String\n  abstract: String\n  description: String\n  contentType: String\n  operation: String\n  icon: String\n  uri: String\n  tags: [String]\n  timestamp: DateTime\n  lastModifiedDate: DateTime\n  createdDate: DateTime\n  createdBy: String\n  lastModifiedBy: String\n}\n\ninput SearchInput {\n  dataSource: String\n  documents: [DocumentInput]\n}\n\ntype DocumentType {\n  id: String\n  title: String\n  abstract: String\n  description: String\n  content_type: String\n  operation: String\n  icon: String\n  uri: String\n  tags: [String]\n  timestamp: DateTime\n  lastModifiedDate: DateTime\n  createdDate: DateTime\n  createdBy: String\n  lastModifiedBy: String\n}\n\ntype ResponseHeaderType {\n  zkConnected: Boolean\n  status: Int\n  QTime: Int\n}\n\ntype ResponseType {\n  numFound: Int\n  start: Int\n  docs: [DocumentType]\n}\n\ntype SearchResponseType {\n  responseHeader: ResponseHeaderType\n  response: ResponseType\n}\n\n\ntype Query {\n  \"\"\"\n  Universal Search endpoint\n  \"\"\"\n  search(query: String, start:Int, rows: Int): SearchResponseType\n}\n\ntype Mutation {\n  \"\"\"\n  Search index creation & updation\n  \"\"\"\n  manageIndex(input: SearchInput): SearchResponseCode\n  \"\"\"\n  Search index deletion\n  \"\"\"\n  deleteIndex(input: SearchInput): SearchResponseCode\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/search-mapping/typedef.graphql":
/*!********************************************!*\
  !*** ./src/search-mapping/typedef.graphql ***!
  \********************************************/
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"DateTime"},"directives":[]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"FieldType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"from"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"to"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ApiConfigType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"mode"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"apiUrl"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"query"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"param"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SearchMapPreferenceType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"iconUrl"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"urlTemplate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"urlParams"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"titleTemplate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"titleParams"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SearchMapType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"_id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"appId"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"apiConfig"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ApiConfigType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"fields"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FieldType"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"preferences"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapPreferenceType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdBy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdOn"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedBy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedOn"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"SearchMapPreferenceInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"iconUrl"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"urlTemplate"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"urlParams"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"titleTemplate"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"titleParams"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"ApiConfigInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"mode"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"apiUrl"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"authorizationHeader"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"query"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"param"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"FieldInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"from"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"to"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"SearchMapInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"_id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"appId"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"apiConfig"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ApiConfigInput"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"fields"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FieldInput"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"preferences"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapPreferenceInput"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"createdBy"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"createdOn"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"updatedBy"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"updatedOn"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SearchCronResponseCode"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"status"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","description":{"kind":"StringValue","value":"Fetch active fields and configs and maps","block":true},"name":{"kind":"Name","value":"listSearchMap"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapType"}}},"directives":[]},{"kind":"FieldDefinition","description":{"kind":"StringValue","value":"Fetch Specific search map with _id","block":true},"name":{"kind":"Name","value":"getSearchMap"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"_id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"triggerSearchMap"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapType"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","description":{"kind":"StringValue","value":"Add a new Search Map configuration in database","block":true},"name":{"kind":"Name","value":"createSearchMap"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapType"}},"directives":[]},{"kind":"FieldDefinition","description":{"kind":"StringValue","value":"update the Search Map configuration in database","block":true},"name":{"kind":"Name","value":"updateSearchMap"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapType"}},"directives":[]},{"kind":"FieldDefinition","description":{"kind":"StringValue","value":"Delete Search Map configuration from database","block":true},"name":{"kind":"Name","value":"deleteSearchMap"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"_id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchMapType"}},"directives":[]}]}],"loc":{"start":0,"end":1850}};
    doc.loc.source = {"body":"scalar DateTime\n\ntype FieldType {\n    from: String\n    to: String\n}\n\n\ntype ApiConfigType {\n    mode: String\n    apiUrl: String\n    query: String\n    param: String\n}\n\ntype SearchMapPreferenceType {\n    iconUrl: String,\n    urlTemplate: String\n    urlParams: [String]\n    titleTemplate: String\n    titleParams: [String]\n}\n\ntype SearchMapType {\n    _id: String\n    appId: String\n    apiConfig: ApiConfigType\n    fields: [FieldType]\n    preferences: SearchMapPreferenceType\n    createdBy: String\n    createdOn: DateTime\n    updatedBy: String\n    updatedOn: DateTime\n}\n\ninput SearchMapPreferenceInput {\n    iconUrl: String,\n    urlTemplate: String\n    urlParams: [String]\n    titleTemplate: String\n    titleParams: [String]\n}\n\ninput ApiConfigInput {\n    mode: String\n    apiUrl: String\n    authorizationHeader: String\n    query: String\n    param: String\n}\n\ninput FieldInput {\n    from: String\n    to: String\n}\n\ninput SearchMapInput {\n    _id: String\n    appId: String\n    apiConfig: ApiConfigInput\n    fields: [FieldInput]\n    preferences: SearchMapPreferenceInput\n    createdBy: String\n    createdOn: DateTime\n    updatedBy: String\n    updatedOn: DateTime\n}\n\ntype SearchCronResponseCode {\n  status: Int\n  name: String\n}\n\ntype Query {\n    \"\"\"\n    Fetch active fields and configs and maps\n    \"\"\"\n    listSearchMap: [SearchMapType]\n    \"\"\"\n    Fetch Specific search map with _id\n    \"\"\"\n    getSearchMap(_id: String!): SearchMapType\n    triggerSearchMap: SearchMapType\n}\n\ntype Mutation {\n    \"\"\"\n    Add a new Search Map configuration in database\n    \"\"\"\n    createSearchMap(input: SearchMapInput): SearchMapType\n    \"\"\"\n    update the Search Map configuration in database\n    \"\"\"\n    updateSearchMap(input: SearchMapInput): SearchMapType\n    \"\"\"\n    Delete Search Map configuration from database\n    \"\"\"\n    deleteSearchMap(_id: String!): SearchMapType\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./service.ts":
/*!********************!*\
  !*** ./service.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dotenv_safe_1 = __importDefault(__webpack_require__(/*! dotenv-safe */ "dotenv-safe"));
if (false) {}
else {
    dotenv_safe_1.default.config();
}
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const http_1 = __importDefault(__webpack_require__(/*! http */ "http"));
const mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const typedef_graphql_1 = __importDefault(__webpack_require__(/*! ./src/search-config/typedef.graphql */ "./src/search-config/typedef.graphql"));
const resolver_1 = __webpack_require__(/*! ./src/search-config/resolver */ "./src/search-config/resolver.ts");
const typedef_graphql_2 = __importDefault(__webpack_require__(/*! ./src/search-mapping/typedef.graphql */ "./src/search-mapping/typedef.graphql"));
const resolver_2 = __webpack_require__(/*! ./src/search-mapping/resolver */ "./src/search-mapping/resolver.ts");
const schedule = __importStar(__webpack_require__(/*! node-schedule */ "node-schedule"));
const cron_1 = __webpack_require__(/*! ./src/search-mapping/cron */ "./src/search-mapping/cron.ts");
/* Setting port for the server */
const port = process.env.PORT || 8080;
const app = express_1.default();
/* Configuring Mongoose */
mongoose_1.default.plugin((schema) => { schema.options.usePushEach = true; });
mongoose_1.default.set('useNewUrlParser', true);
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.set('useUnifiedTopology', true);
/* Establishing mongodb connection */
const dbCredentials = (process.env.DB_USER && process.env.DB_PASSWORD)
    ? `${process.env.DB_USER}:${process.env.DB_PASSWORD}@`
    : '';
const dbConnection = `mongodb://${dbCredentials}${process.env.DB_PATH}/${process.env.DB_NAME}`;
mongoose_1.default.connect(dbConnection, { useNewUrlParser: true, useCreateIndex: true }).catch(console.error);
mongoose_1.default.connection.on('error', error => {
    console.error(error);
});
/* Defining the Apollo Server */
const apollo = new apollo_server_express_1.ApolloServer({
    playground: "development" !== 'production',
    schema: apollo_server_express_1.mergeSchemas({
        schemas: [
            typedef_graphql_1.default,
            typedef_graphql_2.default
        ],
        resolvers: [
            resolver_1.SearchResolver,
            resolver_2.SearchMapResolver
        ],
    }),
    subscriptions: {
        path: '/subscriptions',
    },
    formatError: error => (Object.assign({ message: error.message, locations: error.locations, path: error.path }, error.extensions)),
    plugins: [
        {
            requestDidStart: (requestContext) => {
                var _a, _b;
                if ((_a = requestContext.request.http) === null || _a === void 0 ? void 0 : _a.headers.has('x-apollo-tracing')) {
                    return;
                }
                const query = (_b = requestContext.request.query) === null || _b === void 0 ? void 0 : _b.replace(/\s+/g, ' ').trim();
                const variables = JSON.stringify(requestContext.request.variables);
                console.log(new Date().toISOString(), `- [Request Started] { query: ${query}, variables: ${variables}, operationName: ${requestContext.request.operationName} }`);
                return;
            },
        },
    ]
});
/* Applying apollo middleware to express server */
apollo.applyMiddleware({ app });
/*  Creating the server based on the environment */
const server = http_1.default.createServer(app);
// Installing the apollo ws subscription handlers
apollo.installSubscriptionHandlers(server);
// Search
exports.default = server.listen({ port: port }, () => {
    console.log(`Microservice running on ${"development"} at ${port}${apollo.graphqlPath}`);
});
// Cron to sync the search data.
schedule.scheduleJob('0 0 * * *', () => {
    console.log(`Running Search sync cron on ${new Date().toISOString()}`);
    const searchMapCron = new cron_1.SearchMapCron();
    searchMapCron.searchMapTrigger();
});


/***/ }),

/***/ "./src/search-config/helpers.ts":
/*!**************************************!*\
  !*** ./src/search-config/helpers.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchIndexHelper = void 0;
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
const https_proxy_agent_1 = __webpack_require__(/*! https-proxy-agent */ "https-proxy-agent");
global.Headers = fetch.Headers;
class IndexHelper {
    constructor() { }
    static indexHelper() {
        if (!IndexHelper.SearchGroupHelperInstance) {
            IndexHelper.SearchGroupHelperInstance = new IndexHelper();
        }
        return IndexHelper.SearchGroupHelperInstance;
    }
    auth() {
        let headers = new Headers();
        let body = new URLSearchParams();
        body.append("grant_type", "client_credentials");
        body.append("client_id", `${process.env.CLIENT_ID}`);
        body.append("client_secret", `${process.env.CLIENT_SECRET}`);
        return fetch(`${process.env.SSO_URL}`, {
            method: `POST`,
            headers,
            body: body,
        }).then((response) => response.json())
            .then((result) => result)
            .catch((err) => {
            throw err;
        });
    }
    index(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const authData = yield this.auth();
            let headers = new Headers();
            headers.append(`Authorization`, `Bearer ${authData.access_token}`);
            headers.append(`Content-Type`, `application/json`);
            headers.append(`Accept`, `application/json`);
            return fetch(`${process.env.HYDRA_API}/index`, {
                method: `POST`,
                headers,
                body: JSON.stringify(body),
                agent:  true ? new https_proxy_agent_1.HttpsProxyAgent(`${process.env.AKAMAI_API}`) : 0,
            }).then((response) => {
                return { 'status': response.status };
            }).catch((err) => {
                throw err;
            });
        });
    }
    delete(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const authData = yield this.auth();
            let headers = new Headers();
            headers.append(`Authorization`, `Bearer ${authData.access_token}`);
            headers.append(`Content-Type`, `application/json`);
            headers.append(`Accept`, `application/json`);
            return fetch(`${process.env.HYDRA_API}/delete`, {
                method: `DELETE`,
                headers,
                body: JSON.stringify(body),
                agent:  true ? new https_proxy_agent_1.HttpsProxyAgent(`${process.env.AKAMAI_API}`) : 0,
            }).then((response) => {
                return { 'status': response.status };
            }).catch((err) => {
                throw err;
            });
        });
    }
    search(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const authData = yield this.auth();
            let headers = new Headers();
            headers.append(`Authorization`, `Bearer ${authData.access_token}`);
            headers.append(`Content-Type`, `application/json`);
            headers.append(`Accept`, `application/json`);
            return fetch(`${process.env.SEARCH_API}?q=${params.query}&start=${params.start}&rows=${params.rows}&sort=timestamp desc`, {
                method: `GET`,
                headers,
            }).then((response) => response.json())
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                result.response.docs = result.response.docs.map((doc) => {
                    Object.keys(doc).forEach((key) => {
                        if (key !== 'tags') {
                            doc[key] = doc[key].toString();
                        }
                    });
                    return doc;
                }) || [];
                return result;
            })).catch((err) => {
                throw err;
            });
        });
    }
}
exports.SearchIndexHelper = IndexHelper.indexHelper();


/***/ }),

/***/ "./src/search-config/resolver.ts":
/*!***************************************!*\
  !*** ./src/search-config/resolver.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchResolver = void 0;
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/search-config/helpers.ts");
exports.SearchResolver = {
    Query: {
        search(root, args, ctx) {
            return helpers_1.SearchIndexHelper.search(args);
        }
    },
    Mutation: {
        manageIndex(root, args, ctx) {
            return helpers_1.SearchIndexHelper.index(args.input);
        },
        deleteIndex(root, args, ctx) {
            return helpers_1.SearchIndexHelper.delete(args.input);
        }
    }
};


/***/ }),

/***/ "./src/search-mapping/cron.ts":
/*!************************************!*\
  !*** ./src/search-mapping/cron.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchMapCron = void 0;
const schema_1 = __webpack_require__(/*! ./schema */ "./src/search-mapping/schema.ts");
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/search-mapping/helpers.ts");
const helpers_2 = __webpack_require__(/*! ../search-config/helpers */ "./src/search-config/helpers.ts");
const _ = __importStar(__webpack_require__(/*! lodash */ "lodash"));
class SearchMapCron {
    searchMapTrigger() {
        return __awaiter(this, void 0, void 0, function* () {
            let mappedList = [];
            let statusList = [];
            const searchMapList = yield schema_1.SearchMap.find();
            const apps = yield helpers_1.TemplateHelper.listApps();
            yield searchMapList.map((searchMap, configIndex) => __awaiter(this, void 0, void 0, function* () {
                const apiResponse = yield helpers_1.TemplateHelper.fetchApi(searchMap.apiConfig.authorizationHeader, searchMap.apiConfig.apiUrl, searchMap.apiConfig.query, searchMap.apiConfig.param || null, searchMap.apiConfig.mode);
                yield apiResponse[Object.keys(apiResponse)[0]].map((data) => __awaiter(this, void 0, void 0, function* () {
                    let mappedField = {};
                    let mappedTitle = '';
                    let mappedUrl = '';
                    yield searchMap.fields.map((field, index) => __awaiter(this, void 0, void 0, function* () {
                        mappedField[field.to] = yield helpers_1.TemplateHelper.objectStringMapper(data, field.from);
                        if (searchMap.fields.length === index + 1) {
                            mappedField.tags = apps.filter((app) => app.id === searchMap.appId)[0].name;
                            ;
                            mappedField.contentType = apps.filter((app) => app.id === searchMap.appId)[0].name;
                            mappedField.icon = searchMap.preferences.iconUrl;
                            mappedTitle = searchMap.preferences.titleTemplate;
                            searchMap.preferences.titleParams.map((titleParam) => mappedTitle = mappedTitle.replace(titleParam, data[titleParam]));
                            mappedField.title = mappedTitle;
                            mappedUrl = searchMap.preferences.urlTemplate;
                            searchMap.preferences.urlParams.map((urlParam) => mappedUrl = mappedUrl.replace(urlParam, data[urlParam]));
                            mappedField.uri = process.env.CLIENT_URL + mappedUrl;
                            mappedList.push(mappedField);
                        }
                    }));
                }));
                const searchInput = {
                    dataSource: "oneportal",
                    documents: _.uniqBy(mappedList, 'id')
                };
                const response = yield helpers_2.SearchIndexHelper.index(searchInput);
                statusList.push({ status: response.status });
                if (searchMapList.length === configIndex + 1) {
                    console.info('Index Status -', statusList);
                }
            }));
        });
    }
}
exports.SearchMapCron = SearchMapCron;


/***/ }),

/***/ "./src/search-mapping/helpers.ts":
/*!***************************************!*\
  !*** ./src/search-mapping/helpers.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TemplateHelper = void 0;
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
global.Headers = fetch.Headers;
class APITemplateHelper {
    constructor() { }
    static templateHelper() {
        if (!APITemplateHelper.SearchGroupHelperInstance) {
            APITemplateHelper.SearchGroupHelperInstance = new APITemplateHelper();
        }
        return APITemplateHelper.SearchGroupHelperInstance;
    }
    objectStringMapper(object, param) {
        let indexProp = param.replace(/\[(\w+)\]/g, '.$1');
        indexProp = indexProp.replace(/^\./, '');
        let indexList = indexProp.split('.');
        indexList.forEach((element) => {
            if (element in object) {
                object = object[element] || '';
            }
            else {
                return;
            }
        });
        return object;
    }
    listApps() {
        let headers = new Headers();
        let body = JSON.stringify({
            query: `query Apps{
                        apps {
                            id
                            name
                        }
                    }`,
            variables: {}
        });
        headers.append(`Authorization`, `${process.env.GATEWAY_AUTH_TOKEN}`);
        headers.append(`Content-Type`, `application/json`);
        return fetch(`${process.env.API_GATEWAY}`, {
            method: `POST`,
            headers,
            body: body,
        }).then((response) => response.json())
            .then((result) => result.data.apps)
            .catch((err) => {
            throw err;
        });
    }
    fetchApi(authorizationHeader, apiUrl, query, param, mode) {
        let headers = new Headers();
        let body = JSON.stringify({
            query,
            param
        });
        headers.append(`Authorization`, `${authorizationHeader || process.env.GATEWAY_AUTH_TOKEN}`);
        headers.append(`Content-Type`, `application/json`);
        return fetch(apiUrl || process.env.API_GATEWAY, {
            method: mode || `POST`,
            headers,
            body: body,
        })
            .then((result) => result.json())
            .then((result) => result.data)
            .catch((err) => {
            throw err;
        });
    }
}
exports.TemplateHelper = APITemplateHelper.templateHelper();


/***/ }),

/***/ "./src/search-mapping/resolver.ts":
/*!****************************************!*\
  !*** ./src/search-mapping/resolver.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchMapResolver = void 0;
const schema_1 = __webpack_require__(/*! ./schema */ "./src/search-mapping/schema.ts");
const cron_1 = __webpack_require__(/*! ./cron */ "./src/search-mapping/cron.ts");
exports.SearchMapResolver = {
    Query: {
        listSearchMap(root, args, ctx) {
            return schema_1.SearchMap.find().exec().then((res) => res);
        },
        getSearchMap(root, args, ctx) {
            return schema_1.SearchMap.findById(args._id).exec();
        },
        triggerSearchMap(root, args, ctx) {
            const searchMapCron = new cron_1.SearchMapCron();
            searchMapCron.searchMapTrigger();
        }
    },
    Mutation: {
        createSearchMap(root, args, ctx) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = new schema_1.SearchMap(args.input);
                return data.save();
            });
        },
        updateSearchMap(root, args, ctx) {
            return schema_1.SearchMap.findByIdAndUpdate(args.input._id, args.input, { new: true }).exec();
        },
        deleteSearchMap(root, args, ctx) {
            return schema_1.SearchMap.findByIdAndRemove(args._id)
                .then((response) => response)
                .catch((error) => error);
        },
    }
};


/***/ }),

/***/ "./src/search-mapping/schema.ts":
/*!**************************************!*\
  !*** ./src/search-mapping/schema.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchMap = exports.SearchMapSchema = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
exports.SearchMapSchema = new mongoose_1.Schema({
    appId: String,
    fields: [{
            from: String,
            to: String
        }],
    apiConfig: {
        mode: String,
        authorizationHeader: String,
        apiUrl: String,
        query: String,
        param: String
    },
    preferences: {
        iconUrl: String,
        urlTemplate: String,
        urlParams: [String],
        titleTemplate: String,
        titleParams: [String]
    },
    createdBy: String,
    createdOn: { type: Date, default: Date.now },
    updatedBy: String,
    updatedOn: { type: Date, default: Date.now },
});
exports.SearchMap = mongoose_1.model('SearchMap', exports.SearchMapSchema);


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-express");;

/***/ }),

/***/ "dotenv-safe":
/*!******************************!*\
  !*** external "dotenv-safe" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv-safe");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "https-proxy-agent":
/*!************************************!*\
  !*** external "https-proxy-agent" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("https-proxy-agent");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");;

/***/ }),

/***/ "node-schedule":
/*!********************************!*\
  !*** external "node-schedule" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-schedule");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./service.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWFyY2gvLi9zcmMvc2VhcmNoLWNvbmZpZy90eXBlZGVmLmdyYXBocWwiLCJ3ZWJwYWNrOi8vc2VhcmNoLy4vc3JjL3NlYXJjaC1tYXBwaW5nL3R5cGVkZWYuZ3JhcGhxbCIsIndlYnBhY2s6Ly9zZWFyY2gvLi9zZXJ2aWNlLnRzIiwid2VicGFjazovL3NlYXJjaC8uL3NyYy9zZWFyY2gtY29uZmlnL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vc2VhcmNoLy4vc3JjL3NlYXJjaC1jb25maWcvcmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vc2VhcmNoLy4vc3JjL3NlYXJjaC1tYXBwaW5nL2Nyb24udHMiLCJ3ZWJwYWNrOi8vc2VhcmNoLy4vc3JjL3NlYXJjaC1tYXBwaW5nL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vc2VhcmNoLy4vc3JjL3NlYXJjaC1tYXBwaW5nL3Jlc29sdmVyLnRzIiwid2VicGFjazovL3NlYXJjaC8uL3NyYy9zZWFyY2gtbWFwcGluZy9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vc2VhcmNoL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vc2VhcmNoL2V4dGVybmFsIFwiZG90ZW52LXNhZmVcIiIsIndlYnBhY2s6Ly9zZWFyY2gvZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vc2VhcmNoL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovL3NlYXJjaC9leHRlcm5hbCBcImh0dHBzLXByb3h5LWFnZW50XCIiLCJ3ZWJwYWNrOi8vc2VhcmNoL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vc2VhcmNoL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9zZWFyY2gvZXh0ZXJuYWwgXCJub2RlLWZldGNoXCIiLCJ3ZWJwYWNrOi8vc2VhcmNoL2V4dGVybmFsIFwibm9kZS1zY2hlZHVsZVwiIiwid2VicGFjazovL3NlYXJjaC93ZWJwYWNrL2Jvb3RzdHJhcCIs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RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlNjYWxhclR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkRhdGVUaW1lXCJ9LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTZWFyY2hSZXNwb25zZUNvZGVcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXR1c1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIklucHV0T2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRG9jdW1lbnRJbnB1dFwifSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGl0bGVcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImFic3RyYWN0XCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXNjcmlwdGlvblwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29udGVudFR5cGVcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm9wZXJhdGlvblwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWNvblwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXJpXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0YWdzXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aW1lc3RhbXBcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkRhdGVUaW1lXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGFzdE1vZGlmaWVkRGF0ZVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGF0ZVRpbWVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkRGF0ZVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGF0ZVRpbWVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkQnlcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxhc3RNb2RpZmllZEJ5XCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIklucHV0T2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2VhcmNoSW5wdXRcIn0sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGF0YVNvdXJjZVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZG9jdW1lbnRzXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkRvY3VtZW50SW5wdXRcIn19fSxcImRpcmVjdGl2ZXNcIjpbXX1dfSx7XCJraW5kXCI6XCJPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJEb2N1bWVudFR5cGVcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYWJzdHJhY3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRlc2NyaXB0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb250ZW50X3R5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm9wZXJhdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWNvblwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXJpXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0YWdzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTGlzdFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aW1lc3RhbXBcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGF0ZVRpbWVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGFzdE1vZGlmaWVkRGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJEYXRlVGltZVwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkRGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJEYXRlVGltZVwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkQnlcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxhc3RNb2RpZmllZEJ5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119XX0se1wia2luZFwiOlwiT2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiUmVzcG9uc2VIZWFkZXJUeXBlXCJ9LFwiaW50ZXJmYWNlc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ6a0Nvbm5lY3RlZFwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJCb29sZWFuXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXR1c1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiUVRpbWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSW50XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dfSx7XCJraW5kXCI6XCJPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJSZXNwb25zZVR5cGVcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm51bUZvdW5kXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkludFwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzdGFydFwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZG9jc1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkRvY3VtZW50VHlwZVwifX19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNlYXJjaFJlc3BvbnNlVHlwZVwifSxcImludGVyZmFjZXNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzcG9uc2VIZWFkZXJcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiUmVzcG9uc2VIZWFkZXJUeXBlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlc3BvbnNlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlJlc3BvbnNlVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W119XX0se1wia2luZFwiOlwiT2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiUXVlcnlcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJkZXNjcmlwdGlvblwiOntcImtpbmRcIjpcIlN0cmluZ1ZhbHVlXCIsXCJ2YWx1ZVwiOlwiVW5pdmVyc2FsIFNlYXJjaCBlbmRwb2ludFwiLFwiYmxvY2tcIjp0cnVlfSxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2VhcmNoXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInF1ZXJ5XCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzdGFydFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSW50XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicm93c1wifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSW50XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTZWFyY2hSZXNwb25zZVR5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIk11dGF0aW9uXCJ9LFwiaW50ZXJmYWNlc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwiZGVzY3JpcHRpb25cIjp7XCJraW5kXCI6XCJTdHJpbmdWYWx1ZVwiLFwidmFsdWVcIjpcIlNlYXJjaCBpbmRleCBjcmVhdGlvbiAmIHVwZGF0aW9uXCIsXCJibG9ja1wiOnRydWV9LFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJtYW5hZ2VJbmRleFwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbnB1dFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2VhcmNoSW5wdXRcIn19LFwiZGlyZWN0aXZlc1wiOltdfV0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNlYXJjaFJlc3BvbnNlQ29kZVwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwiZGVzY3JpcHRpb25cIjp7XCJraW5kXCI6XCJTdHJpbmdWYWx1ZVwiLFwidmFsdWVcIjpcIlNlYXJjaCBpbmRleCBkZWxldGlvblwiLFwiYmxvY2tcIjp0cnVlfSxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVsZXRlSW5kZXhcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaW5wdXRcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNlYXJjaElucHV0XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTZWFyY2hSZXNwb25zZUNvZGVcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjEzMTV9fTtcbiAgICBkb2MubG9jLnNvdXJjZSA9IHtcImJvZHlcIjpcInNjYWxhciBEYXRlVGltZVxcblxcbnR5cGUgU2VhcmNoUmVzcG9uc2VDb2RlIHtcXG4gIHN0YXR1czogSW50XFxufVxcblxcbmlucHV0IERvY3VtZW50SW5wdXQge1xcbiAgaWQ6IFN0cmluZ1xcbiAgdGl0bGU6IFN0cmluZ1xcbiAgYWJzdHJhY3Q6IFN0cmluZ1xcbiAgZGVzY3JpcHRpb246IFN0cmluZ1xcbiAgY29udGVudFR5cGU6IFN0cmluZ1xcbiAgb3BlcmF0aW9uOiBTdHJpbmdcXG4gIGljb246IFN0cmluZ1xcbiAgdXJpOiBTdHJpbmdcXG4gIHRhZ3M6IFtTdHJpbmddXFxuICB0aW1lc3RhbXA6IERhdGVUaW1lXFxuICBsYXN0TW9kaWZpZWREYXRlOiBEYXRlVGltZVxcbiAgY3JlYXRlZERhdGU6IERhdGVUaW1lXFxuICBjcmVhdGVkQnk6IFN0cmluZ1xcbiAgbGFzdE1vZGlmaWVkQnk6IFN0cmluZ1xcbn1cXG5cXG5pbnB1dCBTZWFyY2hJbnB1dCB7XFxuICBkYXRhU291cmNlOiBTdHJpbmdcXG4gIGRvY3VtZW50czogW0RvY3VtZW50SW5wdXRdXFxufVxcblxcbnR5cGUgRG9jdW1lbnRUeXBlIHtcXG4gIGlkOiBTdHJpbmdcXG4gIHRpdGxlOiBTdHJpbmdcXG4gIGFic3RyYWN0OiBTdHJpbmdcXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmdcXG4gIGNvbnRlbnRfdHlwZTogU3RyaW5nXFxuICBvcGVyYXRpb246IFN0cmluZ1xcbiAgaWNvbjogU3RyaW5nXFxuICB1cmk6IFN0cmluZ1xcbiAgdGFnczogW1N0cmluZ11cXG4gIHRpbWVzdGFtcDogRGF0ZVRpbWVcXG4gIGxhc3RNb2RpZmllZERhdGU6IERhdGVUaW1lXFxuICBjcmVhdGVkRGF0ZTogRGF0ZVRpbWVcXG4gIGNyZWF0ZWRCeTogU3RyaW5nXFxuICBsYXN0TW9kaWZpZWRCeTogU3RyaW5nXFxufVxcblxcbnR5cGUgUmVzcG9uc2VIZWFkZXJUeXBlIHtcXG4gIHprQ29ubmVjdGVkOiBCb29sZWFuXFxuICBzdGF0dXM6IEludFxcbiAgUVRpbWU6IEludFxcbn1cXG5cXG50eXBlIFJlc3BvbnNlVHlwZSB7XFxuICBudW1Gb3VuZDogSW50XFxuICBzdGFydDogSW50XFxuICBkb2NzOiBbRG9jdW1lbnRUeXBlXVxcbn1cXG5cXG50eXBlIFNlYXJjaFJlc3BvbnNlVHlwZSB7XFxuICByZXNwb25zZUhlYWRlcjogUmVzcG9uc2VIZWFkZXJUeXBlXFxuICByZXNwb25zZTogUmVzcG9uc2VUeXBlXFxufVxcblxcblxcbnR5cGUgUXVlcnkge1xcbiAgXFxcIlxcXCJcXFwiXFxuICBVbml2ZXJzYWwgU2VhcmNoIGVuZHBvaW50XFxuICBcXFwiXFxcIlxcXCJcXG4gIHNlYXJjaChxdWVyeTogU3RyaW5nLCBzdGFydDpJbnQsIHJvd3M6IEludCk6IFNlYXJjaFJlc3BvbnNlVHlwZVxcbn1cXG5cXG50eXBlIE11dGF0aW9uIHtcXG4gIFxcXCJcXFwiXFxcIlxcbiAgU2VhcmNoIGluZGV4IGNyZWF0aW9uICYgdXBkYXRpb25cXG4gIFxcXCJcXFwiXFxcIlxcbiAgbWFuYWdlSW5kZXgoaW5wdXQ6IFNlYXJjaElucHV0KTogU2VhcmNoUmVzcG9uc2VDb2RlXFxuICBcXFwiXFxcIlxcXCJcXG4gIFNlYXJjaCBpbmRleCBkZWxldGlvblxcbiAgXFxcIlxcXCJcXFwiXFxuICBkZWxldGVJbmRleChpbnB1dDogU2VhcmNoSW5wdXQpOiBTZWFyY2hSZXNwb25zZUNvZGVcXG59XFxuXCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIFxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcbiIsIlxuICAgIHZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiU2NhbGFyVHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGF0ZVRpbWVcIn0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkZpZWxkVHlwZVwifSxcImludGVyZmFjZXNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZnJvbVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidG9cIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dfSx7XCJraW5kXCI6XCJPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBcGlDb25maWdUeXBlXCJ9LFwiaW50ZXJmYWNlc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJtb2RlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhcGlVcmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInF1ZXJ5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXJhbVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNlYXJjaE1hcFByZWZlcmVuY2VUeXBlXCJ9LFwiaW50ZXJmYWNlc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpY29uVXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cmxUZW1wbGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXJsUGFyYW1zXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTGlzdFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVRlbXBsYXRlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVBhcmFtc1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNlYXJjaE1hcFR5cGVcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIl9pZFwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYXBwSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImFwaUNvbmZpZ1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBcGlDb25maWdUeXBlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpZWxkc1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkZpZWxkVHlwZVwifX19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicHJlZmVyZW5jZXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2VhcmNoTWFwUHJlZmVyZW5jZVR5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3JlYXRlZEJ5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkT25cIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGF0ZVRpbWVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXBkYXRlZEJ5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cGRhdGVkT25cIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGF0ZVRpbWVcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIklucHV0T2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2VhcmNoTWFwUHJlZmVyZW5jZUlucHV0XCJ9LFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImljb25VcmxcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVybFRlbXBsYXRlXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cmxQYXJhbXNcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTGlzdFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpdGxlVGVtcGxhdGVcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpdGxlUGFyYW1zXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIklucHV0T2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQXBpQ29uZmlnSW5wdXRcIn0sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibW9kZVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYXBpVXJsXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhdXRob3JpemF0aW9uSGVhZGVyXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJxdWVyeVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGFyYW1cIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119XX0se1wia2luZFwiOlwiSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJGaWVsZElucHV0XCJ9LFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZyb21cIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRvXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIklucHV0T2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2VhcmNoTWFwSW5wdXRcIn0sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiX2lkXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhcHBJZFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYXBpQ29uZmlnXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBcGlDb25maWdJbnB1dFwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpZWxkc1wifSxcInR5cGVcIjp7XCJraW5kXCI6XCJMaXN0VHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJGaWVsZElucHV0XCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInByZWZlcmVuY2VzXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTZWFyY2hNYXBQcmVmZXJlbmNlSW5wdXRcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkQnlcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRPblwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGF0ZVRpbWVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cGRhdGVkQnlcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVwZGF0ZWRPblwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGF0ZVRpbWVcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNlYXJjaENyb25SZXNwb25zZUNvZGVcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXR1c1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlF1ZXJ5XCJ9LFwiaW50ZXJmYWNlc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwiZGVzY3JpcHRpb25cIjp7XCJraW5kXCI6XCJTdHJpbmdWYWx1ZVwiLFwidmFsdWVcIjpcIkZldGNoIGFjdGl2ZSBmaWVsZHMgYW5kIGNvbmZpZ3MgYW5kIG1hcHNcIixcImJsb2NrXCI6dHJ1ZX0sXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxpc3RTZWFyY2hNYXBcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJMaXN0VHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTZWFyY2hNYXBUeXBlXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwiZGVzY3JpcHRpb25cIjp7XCJraW5kXCI6XCJTdHJpbmdWYWx1ZVwiLFwidmFsdWVcIjpcIkZldGNoIFNwZWNpZmljIHNlYXJjaCBtYXAgd2l0aCBfaWRcIixcImJsb2NrXCI6dHJ1ZX0sXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdldFNlYXJjaE1hcFwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJfaWRcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119XSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2VhcmNoTWFwVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0cmlnZ2VyU2VhcmNoTWFwXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNlYXJjaE1hcFR5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIk11dGF0aW9uXCJ9LFwiaW50ZXJmYWNlc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwiZGVzY3JpcHRpb25cIjp7XCJraW5kXCI6XCJTdHJpbmdWYWx1ZVwiLFwidmFsdWVcIjpcIkFkZCBhIG5ldyBTZWFyY2ggTWFwIGNvbmZpZ3VyYXRpb24gaW4gZGF0YWJhc2VcIixcImJsb2NrXCI6dHJ1ZX0sXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZVNlYXJjaE1hcFwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbnB1dFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2VhcmNoTWFwSW5wdXRcIn19LFwiZGlyZWN0aXZlc1wiOltdfV0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNlYXJjaE1hcFR5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcImRlc2NyaXB0aW9uXCI6e1wia2luZFwiOlwiU3RyaW5nVmFsdWVcIixcInZhbHVlXCI6XCJ1cGRhdGUgdGhlIFNlYXJjaCBNYXAgY29uZmlndXJhdGlvbiBpbiBkYXRhYmFzZVwiLFwiYmxvY2tcIjp0cnVlfSxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXBkYXRlU2VhcmNoTWFwXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlucHV0XCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTZWFyY2hNYXBJbnB1dFwifX0sXCJkaXJlY3RpdmVzXCI6W119XSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2VhcmNoTWFwVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwiZGVzY3JpcHRpb25cIjp7XCJraW5kXCI6XCJTdHJpbmdWYWx1ZVwiLFwidmFsdWVcIjpcIkRlbGV0ZSBTZWFyY2ggTWFwIGNvbmZpZ3VyYXRpb24gZnJvbSBkYXRhYmFzZVwiLFwiYmxvY2tcIjp0cnVlfSxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVsZXRlU2VhcmNoTWFwXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIl9pZFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fSxcImRpcmVjdGl2ZXNcIjpbXX1dLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTZWFyY2hNYXBUeXBlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dfV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoxODUwfX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCJzY2FsYXIgRGF0ZVRpbWVcXG5cXG50eXBlIEZpZWxkVHlwZSB7XFxuICAgIGZyb206IFN0cmluZ1xcbiAgICB0bzogU3RyaW5nXFxufVxcblxcblxcbnR5cGUgQXBpQ29uZmlnVHlwZSB7XFxuICAgIG1vZGU6IFN0cmluZ1xcbiAgICBhcGlVcmw6IFN0cmluZ1xcbiAgICBxdWVyeTogU3RyaW5nXFxuICAgIHBhcmFtOiBTdHJpbmdcXG59XFxuXFxudHlwZSBTZWFyY2hNYXBQcmVmZXJlbmNlVHlwZSB7XFxuICAgIGljb25Vcmw6IFN0cmluZyxcXG4gICAgdXJsVGVtcGxhdGU6IFN0cmluZ1xcbiAgICB1cmxQYXJhbXM6IFtTdHJpbmddXFxuICAgIHRpdGxlVGVtcGxhdGU6IFN0cmluZ1xcbiAgICB0aXRsZVBhcmFtczogW1N0cmluZ11cXG59XFxuXFxudHlwZSBTZWFyY2hNYXBUeXBlIHtcXG4gICAgX2lkOiBTdHJpbmdcXG4gICAgYXBwSWQ6IFN0cmluZ1xcbiAgICBhcGlDb25maWc6IEFwaUNvbmZpZ1R5cGVcXG4gICAgZmllbGRzOiBbRmllbGRUeXBlXVxcbiAgICBwcmVmZXJlbmNlczogU2VhcmNoTWFwUHJlZmVyZW5jZVR5cGVcXG4gICAgY3JlYXRlZEJ5OiBTdHJpbmdcXG4gICAgY3JlYXRlZE9uOiBEYXRlVGltZVxcbiAgICB1cGRhdGVkQnk6IFN0cmluZ1xcbiAgICB1cGRhdGVkT246IERhdGVUaW1lXFxufVxcblxcbmlucHV0IFNlYXJjaE1hcFByZWZlcmVuY2VJbnB1dCB7XFxuICAgIGljb25Vcmw6IFN0cmluZyxcXG4gICAgdXJsVGVtcGxhdGU6IFN0cmluZ1xcbiAgICB1cmxQYXJhbXM6IFtTdHJpbmddXFxuICAgIHRpdGxlVGVtcGxhdGU6IFN0cmluZ1xcbiAgICB0aXRsZVBhcmFtczogW1N0cmluZ11cXG59XFxuXFxuaW5wdXQgQXBpQ29uZmlnSW5wdXQge1xcbiAgICBtb2RlOiBTdHJpbmdcXG4gICAgYXBpVXJsOiBTdHJpbmdcXG4gICAgYXV0aG9yaXphdGlvbkhlYWRlcjogU3RyaW5nXFxuICAgIHF1ZXJ5OiBTdHJpbmdcXG4gICAgcGFyYW06IFN0cmluZ1xcbn1cXG5cXG5pbnB1dCBGaWVsZElucHV0IHtcXG4gICAgZnJvbTogU3RyaW5nXFxuICAgIHRvOiBTdHJpbmdcXG59XFxuXFxuaW5wdXQgU2VhcmNoTWFwSW5wdXQge1xcbiAgICBfaWQ6IFN0cmluZ1xcbiAgICBhcHBJZDogU3RyaW5nXFxuICAgIGFwaUNvbmZpZzogQXBpQ29uZmlnSW5wdXRcXG4gICAgZmllbGRzOiBbRmllbGRJbnB1dF1cXG4gICAgcHJlZmVyZW5jZXM6IFNlYXJjaE1hcFByZWZlcmVuY2VJbnB1dFxcbiAgICBjcmVhdGVkQnk6IFN0cmluZ1xcbiAgICBjcmVhdGVkT246IERhdGVUaW1lXFxuICAgIHVwZGF0ZWRCeTogU3RyaW5nXFxuICAgIHVwZGF0ZWRPbjogRGF0ZVRpbWVcXG59XFxuXFxudHlwZSBTZWFyY2hDcm9uUmVzcG9uc2VDb2RlIHtcXG4gIHN0YXR1czogSW50XFxuICBuYW1lOiBTdHJpbmdcXG59XFxuXFxudHlwZSBRdWVyeSB7XFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICBGZXRjaCBhY3RpdmUgZmllbGRzIGFuZCBjb25maWdzIGFuZCBtYXBzXFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICBsaXN0U2VhcmNoTWFwOiBbU2VhcmNoTWFwVHlwZV1cXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIEZldGNoIFNwZWNpZmljIHNlYXJjaCBtYXAgd2l0aCBfaWRcXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIGdldFNlYXJjaE1hcChfaWQ6IFN0cmluZyEpOiBTZWFyY2hNYXBUeXBlXFxuICAgIHRyaWdnZXJTZWFyY2hNYXA6IFNlYXJjaE1hcFR5cGVcXG59XFxuXFxudHlwZSBNdXRhdGlvbiB7XFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICBBZGQgYSBuZXcgU2VhcmNoIE1hcCBjb25maWd1cmF0aW9uIGluIGRhdGFiYXNlXFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICBjcmVhdGVTZWFyY2hNYXAoaW5wdXQ6IFNlYXJjaE1hcElucHV0KTogU2VhcmNoTWFwVHlwZVxcbiAgICBcXFwiXFxcIlxcXCJcXG4gICAgdXBkYXRlIHRoZSBTZWFyY2ggTWFwIGNvbmZpZ3VyYXRpb24gaW4gZGF0YWJhc2VcXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIHVwZGF0ZVNlYXJjaE1hcChpbnB1dDogU2VhcmNoTWFwSW5wdXQpOiBTZWFyY2hNYXBUeXBlXFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICBEZWxldGUgU2VhcmNoIE1hcCBjb25maWd1cmF0aW9uIGZyb20gZGF0YWJhc2VcXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIGRlbGV0ZVNlYXJjaE1hcChfaWQ6IFN0cmluZyEpOiBTZWFyY2hNYXBUeXBlXFxufVxcblwiLFwibmFtZVwiOlwiR3JhcGhRTCByZXF1ZXN0XCIsXCJsb2NhdGlvbk9mZnNldFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MX19O1xuICBcblxuICAgIHZhciBuYW1lcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHVuaXF1ZShkZWZzKSB7XG4gICAgICByZXR1cm4gZGVmcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGlmIChkZWYua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciBuYW1lID0gZGVmLm5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4iLCJpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudi1zYWZlJztcbmlmICggcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyApIHtcbiAgZG90ZW52LmNvbmZpZyggeyBwYXRoOiAnLnRlc3QuZW52JyB9ICk7XG59IGVsc2Uge1xuICBkb3RlbnYuY29uZmlnKCk7XG59XG5cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyLCBtZXJnZVNjaGVtYXMgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHNlYXJjaENvbmZpZ1NjaGVtYSBmcm9tICcuL3NyYy9zZWFyY2gtY29uZmlnL3R5cGVkZWYuZ3JhcGhxbCc7XG5pbXBvcnQgeyBTZWFyY2hSZXNvbHZlciB9IGZyb20gJy4vc3JjL3NlYXJjaC1jb25maWcvcmVzb2x2ZXInO1xuXG5pbXBvcnQgc2VhcmNoTWFwU2NoZW1hIGZyb20gJy4vc3JjL3NlYXJjaC1tYXBwaW5nL3R5cGVkZWYuZ3JhcGhxbCc7XG5pbXBvcnQgeyBTZWFyY2hNYXBSZXNvbHZlciB9IGZyb20gJy4vc3JjL3NlYXJjaC1tYXBwaW5nL3Jlc29sdmVyJztcbmltcG9ydCAqIGFzIHNjaGVkdWxlIGZyb20gJ25vZGUtc2NoZWR1bGUnO1xuaW1wb3J0IHsgU2VhcmNoTWFwQ3JvbiB9IGZyb20gJy4vc3JjL3NlYXJjaC1tYXBwaW5nL2Nyb24nO1xuLyogU2V0dGluZyBwb3J0IGZvciB0aGUgc2VydmVyICovXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG4vKiBDb25maWd1cmluZyBNb25nb29zZSAqL1xubW9uZ29vc2UucGx1Z2luKCAoIHNjaGVtYTogYW55ICkgPT4geyBzY2hlbWEub3B0aW9ucy51c2VQdXNoRWFjaCA9IHRydWU7IH0gKTtcbm1vbmdvb3NlLnNldCggJ3VzZU5ld1VybFBhcnNlcicsIHRydWUgKTtcbm1vbmdvb3NlLnNldCggJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSApO1xubW9uZ29vc2Uuc2V0KCAndXNlQ3JlYXRlSW5kZXgnLCB0cnVlICk7XG5tb25nb29zZS5zZXQoICd1c2VVbmlmaWVkVG9wb2xvZ3knLCB0cnVlICk7XG5cbi8qIEVzdGFibGlzaGluZyBtb25nb2RiIGNvbm5lY3Rpb24gKi9cbmNvbnN0IGRiQ3JlZGVudGlhbHMgPSAoIHByb2Nlc3MuZW52LkRCX1VTRVIgJiYgcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQgKVxuICA/IGAkeyBwcm9jZXNzLmVudi5EQl9VU0VSIH06JHsgcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQgfUBgXG4gIDogJyc7XG5jb25zdCBkYkNvbm5lY3Rpb24gPSBgbW9uZ29kYjovLyR7IGRiQ3JlZGVudGlhbHMgfSR7IHByb2Nlc3MuZW52LkRCX1BBVEggfS8keyBwcm9jZXNzLmVudi5EQl9OQU1FIH1gO1xubW9uZ29vc2UuY29ubmVjdCggZGJDb25uZWN0aW9uLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlQ3JlYXRlSW5kZXg6IHRydWUgfSApLmNhdGNoKCBjb25zb2xlLmVycm9yICk7XG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCAnZXJyb3InLCBlcnJvciA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoIGVycm9yICk7XG59ICk7XG5cbi8qIERlZmluaW5nIHRoZSBBcG9sbG8gU2VydmVyICovXG5jb25zdCBhcG9sbG8gPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgcGxheWdyb3VuZDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcbiAgc2NoZW1hOiBtZXJnZVNjaGVtYXMoe1xuICAgIHNjaGVtYXM6IFtcbiAgICAgIHNlYXJjaENvbmZpZ1NjaGVtYSxcbiAgICAgIHNlYXJjaE1hcFNjaGVtYVxuICAgIF0sXG4gICAgcmVzb2x2ZXJzOiBbXG4gICAgICBTZWFyY2hSZXNvbHZlcixcbiAgICAgIFNlYXJjaE1hcFJlc29sdmVyXG4gICAgXSxcbiAgfSksXG4gIHN1YnNjcmlwdGlvbnM6IHtcbiAgICBwYXRoOiAnL3N1YnNjcmlwdGlvbnMnLFxuICB9LFxuICBmb3JtYXRFcnJvcjogZXJyb3IgPT4gKHtcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIGxvY2F0aW9uczogZXJyb3IubG9jYXRpb25zLFxuICAgIHBhdGg6IGVycm9yLnBhdGgsXG4gICAgLi4uZXJyb3IuZXh0ZW5zaW9ucyxcbiAgfSksXG4gIHBsdWdpbnM6IFtcbiAgICB7XG4gICAgICByZXF1ZXN0RGlkU3RhcnQ6ICggcmVxdWVzdENvbnRleHQgKSA9PiB7XG4gICAgICAgIGlmICggcmVxdWVzdENvbnRleHQucmVxdWVzdC5odHRwPy5oZWFkZXJzLmhhcyggJ3gtYXBvbGxvLXRyYWNpbmcnICkgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVxdWVzdENvbnRleHQucmVxdWVzdC5xdWVyeT8ucmVwbGFjZSggL1xccysvZywgJyAnICkudHJpbSgpO1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSBKU09OLnN0cmluZ2lmeSggcmVxdWVzdENvbnRleHQucmVxdWVzdC52YXJpYWJsZXMgKTtcbiAgICAgICAgY29uc29sZS5sb2coIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgYC0gW1JlcXVlc3QgU3RhcnRlZF0geyBxdWVyeTogJHsgcXVlcnkgfSwgdmFyaWFibGVzOiAkeyB2YXJpYWJsZXMgfSwgb3BlcmF0aW9uTmFtZTogJHsgcmVxdWVzdENvbnRleHQucmVxdWVzdC5vcGVyYXRpb25OYW1lIH0gfWAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSxcbiAgICB9LFxuICBdXG59KTtcblxuLyogQXBwbHlpbmcgYXBvbGxvIG1pZGRsZXdhcmUgdG8gZXhwcmVzcyBzZXJ2ZXIgKi9cbmFwb2xsby5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSk7XG5cbi8qICBDcmVhdGluZyB0aGUgc2VydmVyIGJhc2VkIG9uIHRoZSBlbnZpcm9ubWVudCAqL1xuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuLy8gSW5zdGFsbGluZyB0aGUgYXBvbGxvIHdzIHN1YnNjcmlwdGlvbiBoYW5kbGVyc1xuYXBvbGxvLmluc3RhbGxTdWJzY3JpcHRpb25IYW5kbGVycyhzZXJ2ZXIpO1xuLy8gU2VhcmNoXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXIubGlzdGVuKHsgcG9ydDogcG9ydCB9LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBNaWNyb3NlcnZpY2UgcnVubmluZyBvbiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WfSBhdCAke3BvcnR9JHthcG9sbG8uZ3JhcGhxbFBhdGh9YCk7XG59KTtcblxuLy8gQ3JvbiB0byBzeW5jIHRoZSBzZWFyY2ggZGF0YS5cbnNjaGVkdWxlLnNjaGVkdWxlSm9iKCAnMCAwICogKiAqJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZyggYFJ1bm5pbmcgU2VhcmNoIHN5bmMgY3JvbiBvbiAkeyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfWAgKTtcbiAgY29uc3Qgc2VhcmNoTWFwQ3JvbiA9IG5ldyBTZWFyY2hNYXBDcm9uKCk7XG4gIHNlYXJjaE1hcENyb24uc2VhcmNoTWFwVHJpZ2dlcigpO1xufSk7XG4iLCJjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbmltcG9ydCB7IEh0dHBzUHJveHlBZ2VudCB9IGZyb20gJ2h0dHBzLXByb3h5LWFnZW50Jztcbmdsb2JhbC5IZWFkZXJzID0gZmV0Y2guSGVhZGVycztcblxuY2xhc3MgSW5kZXhIZWxwZXIge1xuICAgIHByaXZhdGUgc3RhdGljIFNlYXJjaEdyb3VwSGVscGVySW5zdGFuY2U6IEluZGV4SGVscGVyO1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgcHVibGljIHN0YXRpYyBpbmRleEhlbHBlcigpIHtcbiAgICAgICAgaWYgKCFJbmRleEhlbHBlci5TZWFyY2hHcm91cEhlbHBlckluc3RhbmNlKSB7XG4gICAgICAgICAgICBJbmRleEhlbHBlci5TZWFyY2hHcm91cEhlbHBlckluc3RhbmNlID0gbmV3IEluZGV4SGVscGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEluZGV4SGVscGVyLlNlYXJjaEdyb3VwSGVscGVySW5zdGFuY2U7XG4gICAgfVxuICAgIHB1YmxpYyBhdXRoKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGxldCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBib2R5LmFwcGVuZChcImdyYW50X3R5cGVcIiwgXCJjbGllbnRfY3JlZGVudGlhbHNcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kKFwiY2xpZW50X2lkXCIsIGAke3Byb2Nlc3MuZW52LkNMSUVOVF9JRH1gKTtcbiAgICAgICAgYm9keS5hcHBlbmQoXCJjbGllbnRfc2VjcmV0XCIsIGAke3Byb2Nlc3MuZW52LkNMSUVOVF9TRUNSRVR9YCk7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHtwcm9jZXNzLmVudi5TU09fVVJMfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYFBPU1RgLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4gcmVzdWx0KVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbmRleChib2R5OiBhbnkpIHtcbiAgICAgICAgY29uc3QgYXV0aERhdGE6IGFueSA9IGF3YWl0IHRoaXMuYXV0aCgpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGBBdXRob3JpemF0aW9uYCwgYEJlYXJlciAke2F1dGhEYXRhLmFjY2Vzc190b2tlbn1gKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoYENvbnRlbnQtVHlwZWAsIGBhcHBsaWNhdGlvbi9qc29uYCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGBBY2NlcHRgLCBgYXBwbGljYXRpb24vanNvbmApO1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7cHJvY2Vzcy5lbnYuSFlEUkFfQVBJfS9pbmRleGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYFBPU1RgLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICAgICAgYWdlbnQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBuZXcgSHR0cHNQcm94eUFnZW50KGAke3Byb2Nlc3MuZW52LkFLQU1BSV9BUEl9YCkgOiBudWxsLFxuICAgICAgICB9KS50aGVuKChyZXNwb25zZTogU2VhcmNoUmVzcG9uc2VDb2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAnc3RhdHVzJzogcmVzcG9uc2Uuc3RhdHVzIH07XG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKGJvZHk6IGFueSkge1xuICAgICAgICBjb25zdCBhdXRoRGF0YTogYW55ID0gYXdhaXQgdGhpcy5hdXRoKCk7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoYEF1dGhvcml6YXRpb25gLCBgQmVhcmVyICR7YXV0aERhdGEuYWNjZXNzX3Rva2VufWApO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChgQ29udGVudC1UeXBlYCwgYGFwcGxpY2F0aW9uL2pzb25gKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoYEFjY2VwdGAsIGBhcHBsaWNhdGlvbi9qc29uYCk7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHtwcm9jZXNzLmVudi5IWURSQV9BUEl9L2RlbGV0ZWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYERFTEVURWAsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICBhZ2VudDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IG5ldyBIdHRwc1Byb3h5QWdlbnQoYCR7cHJvY2Vzcy5lbnYuQUtBTUFJX0FQSX1gKSA6IG51bGwsXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXNwb25zZUNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7ICdzdGF0dXMnOiByZXNwb25zZS5zdGF0dXMgfTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZWFyY2gocGFyYW1zOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYXV0aERhdGE6IGFueSA9IGF3YWl0IHRoaXMuYXV0aCgpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGBBdXRob3JpemF0aW9uYCwgYEJlYXJlciAke2F1dGhEYXRhLmFjY2Vzc190b2tlbn1gKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoYENvbnRlbnQtVHlwZWAsIGBhcHBsaWNhdGlvbi9qc29uYCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGBBY2NlcHRgLCBgYXBwbGljYXRpb24vanNvbmApO1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7cHJvY2Vzcy5lbnYuU0VBUkNIX0FQSX0/cT0ke3BhcmFtcy5xdWVyeX0mc3RhcnQ9JHtwYXJhbXMuc3RhcnR9JnJvd3M9JHtwYXJhbXMucm93c30mc29ydD10aW1lc3RhbXAgZGVzY2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYEdFVGAsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICB9KS50aGVuKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihhc3luYyAocmVzdWx0OiBTZWFyY2hSZXNwb25zZVR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHQucmVzcG9uc2UuZG9jcyA9IHJlc3VsdC5yZXNwb25zZS5kb2NzLm1hcCgoZG9jOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZG9jKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3RhZ3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jW2tleV0gPSBkb2Nba2V5XS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgICAgICAgICB9KSB8fCBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgU2VhcmNoSW5kZXhIZWxwZXIgPSBJbmRleEhlbHBlci5pbmRleEhlbHBlcigpO1xuIiwiaW1wb3J0IHsgU2VhcmNoSW5kZXhIZWxwZXIgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoUmVzb2x2ZXIgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgc2VhcmNoICggcm9vdDogYW55LCBhcmdzOiBhbnksIGN0eDogYW55ICkge1xuICAgICAgcmV0dXJuIFNlYXJjaEluZGV4SGVscGVyLnNlYXJjaCggYXJncyApO1xuICAgIH1cbiAgfSxcbiAgTXV0YXRpb246IHtcbiAgICBtYW5hZ2VJbmRleCAoIHJvb3Q6IGFueSwgYXJnczogYW55LCBjdHg6IGFueSApIHtcbiAgICAgIHJldHVybiBTZWFyY2hJbmRleEhlbHBlci5pbmRleCggYXJncy5pbnB1dCApO1xuICAgIH0sXG4gICAgZGVsZXRlSW5kZXgocm9vdDogYW55LCBhcmdzOiBhbnksIGN0eDogYW55KSB7XG4gICAgICByZXR1cm4gU2VhcmNoSW5kZXhIZWxwZXIuZGVsZXRlKCBhcmdzLmlucHV0ICk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTZWFyY2hNYXAgfSBmcm9tIFwiLi9zY2hlbWFcIjtcbmltcG9ydCB7IFRlbXBsYXRlSGVscGVyIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgU2VhcmNoSW5kZXhIZWxwZXIgfSBmcm9tIFwiLi4vc2VhcmNoLWNvbmZpZy9oZWxwZXJzXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1hcENyb24ge1xuICAgIHB1YmxpYyBhc3luYyBzZWFyY2hNYXBUcmlnZ2VyICgpIHtcbiAgICAgICAgbGV0IG1hcHBlZExpc3Q6IGFueSA9IFtdO1xuICAgICAgICBsZXQgc3RhdHVzTGlzdDogYW55ID0gW107XG4gICAgICAgIGNvbnN0IHNlYXJjaE1hcExpc3QgPSBhd2FpdCBTZWFyY2hNYXAuZmluZCgpO1xuICAgICAgICBjb25zdCBhcHBzID0gYXdhaXQgVGVtcGxhdGVIZWxwZXIubGlzdEFwcHMoKTtcbiAgICAgICAgYXdhaXQgc2VhcmNoTWFwTGlzdC5tYXAoIGFzeW5jICggc2VhcmNoTWFwOiBhbnksIGNvbmZpZ0luZGV4OiBhbnkgKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IFRlbXBsYXRlSGVscGVyLmZldGNoQXBpKCBzZWFyY2hNYXAuYXBpQ29uZmlnLmF1dGhvcml6YXRpb25IZWFkZXIsIHNlYXJjaE1hcC5hcGlDb25maWcuYXBpVXJsLCBzZWFyY2hNYXAuYXBpQ29uZmlnLnF1ZXJ5LCBzZWFyY2hNYXAuYXBpQ29uZmlnLnBhcmFtIHx8IG51bGwsIHNlYXJjaE1hcC5hcGlDb25maWcubW9kZSApO1xuICAgICAgICAgICAgYXdhaXQgYXBpUmVzcG9uc2VbT2JqZWN0LmtleXMoYXBpUmVzcG9uc2UpWzBdXS5tYXAoYXN5bmMgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtYXBwZWRGaWVsZDogYW55ID0ge307XG4gICAgICAgICAgICAgICAgbGV0IG1hcHBlZFRpdGxlID0gJyc7XG4gICAgICAgICAgICAgICAgbGV0IG1hcHBlZFVybCA9ICcnO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNlYXJjaE1hcC5maWVsZHMubWFwKGFzeW5jIChmaWVsZDogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEZpZWxkW2ZpZWxkLnRvXSA9IGF3YWl0IFRlbXBsYXRlSGVscGVyLm9iamVjdFN0cmluZ01hcHBlcihkYXRhLCBmaWVsZC5mcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWFyY2hNYXAuZmllbGRzLmxlbmd0aCA9PT0gaW5kZXggKyAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGVkRmllbGQudGFncyA9IGFwcHMuZmlsdGVyKCAoIGFwcDogYW55ICkgPT4gYXBwLmlkID09PSBzZWFyY2hNYXAuYXBwSWQgKVsgMCBdLm5hbWU7O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGVkRmllbGQuY29udGVudFR5cGUgPSBhcHBzLmZpbHRlciggKCBhcHA6IGFueSApID0+IGFwcC5pZCA9PT0gc2VhcmNoTWFwLmFwcElkIClbMF0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBlZEZpZWxkLmljb24gPSBzZWFyY2hNYXAucHJlZmVyZW5jZXMuaWNvblVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBlZFRpdGxlID0gc2VhcmNoTWFwLnByZWZlcmVuY2VzLnRpdGxlVGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hNYXAucHJlZmVyZW5jZXMudGl0bGVQYXJhbXMubWFwKCAoIHRpdGxlUGFyYW06IGFueSApID0+IG1hcHBlZFRpdGxlID0gbWFwcGVkVGl0bGUucmVwbGFjZSggdGl0bGVQYXJhbSwgZGF0YVsgdGl0bGVQYXJhbSBdICkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGVkRmllbGQudGl0bGUgPSBtYXBwZWRUaXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBlZFVybCA9IHNlYXJjaE1hcC5wcmVmZXJlbmNlcy51cmxUZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaE1hcC5wcmVmZXJlbmNlcy51cmxQYXJhbXMubWFwKCAoIHVybFBhcmFtOiBhbnkgKSA9PiBtYXBwZWRVcmwgPSBtYXBwZWRVcmwucmVwbGFjZSggdXJsUGFyYW0sIGRhdGFbIHVybFBhcmFtIF0gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBwZWRGaWVsZC51cmkgPSBwcm9jZXNzLmVudi5DTElFTlRfVVJMICsgbWFwcGVkVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGVkTGlzdC5wdXNoKG1hcHBlZEZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlOiBcIm9uZXBvcnRhbFwiLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50czogXy51bmlxQnkobWFwcGVkTGlzdCwgJ2lkJylcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNlYXJjaEluZGV4SGVscGVyLmluZGV4KHNlYXJjaElucHV0KTtcbiAgICAgICAgICAgIHN0YXR1c0xpc3QucHVzaCh7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzIH0pO1xuICAgICAgICAgICAgaWYgKHNlYXJjaE1hcExpc3QubGVuZ3RoID09PSBjb25maWdJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0luZGV4IFN0YXR1cyAtJywgc3RhdHVzTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNvbnN0IGZldGNoID0gcmVxdWlyZSggJ25vZGUtZmV0Y2gnICk7XG5nbG9iYWwuSGVhZGVycyA9IGZldGNoLkhlYWRlcnM7XG5cbmNsYXNzIEFQSVRlbXBsYXRlSGVscGVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBTZWFyY2hHcm91cEhlbHBlckluc3RhbmNlOiBBUElUZW1wbGF0ZUhlbHBlcjtcbiAgICBjb25zdHJ1Y3RvciAoKSB7IH1cbiAgICBwdWJsaWMgc3RhdGljIHRlbXBsYXRlSGVscGVyICgpIHtcbiAgICAgICAgaWYgKCAhQVBJVGVtcGxhdGVIZWxwZXIuU2VhcmNoR3JvdXBIZWxwZXJJbnN0YW5jZSApIHtcbiAgICAgICAgICAgIEFQSVRlbXBsYXRlSGVscGVyLlNlYXJjaEdyb3VwSGVscGVySW5zdGFuY2UgPSBuZXcgQVBJVGVtcGxhdGVIZWxwZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQVBJVGVtcGxhdGVIZWxwZXIuU2VhcmNoR3JvdXBIZWxwZXJJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb2JqZWN0U3RyaW5nTWFwcGVyICggb2JqZWN0OiBhbnksIHBhcmFtOiBzdHJpbmcgKSB7XG4gICAgICAgIGxldCBpbmRleFByb3AgPSBwYXJhbS5yZXBsYWNlKCAvXFxbKFxcdyspXFxdL2csICcuJDEnICk7XG4gICAgICAgIGluZGV4UHJvcCA9IGluZGV4UHJvcC5yZXBsYWNlKCAvXlxcLi8sICcnICk7XG4gICAgICAgIGxldCBpbmRleExpc3QgPSBpbmRleFByb3Auc3BsaXQoICcuJyApO1xuICAgICAgICBpbmRleExpc3QuZm9yRWFjaCggKCBlbGVtZW50OiBhbnkgKSA9PiB7XG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQgaW4gb2JqZWN0ICkge1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IG9iamVjdFsgZWxlbWVudCBdIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKTtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGlzdEFwcHMgKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkgQXBwc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge31cbiAgICAgICAgfSApO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCggYEF1dGhvcml6YXRpb25gLCBgJHsgcHJvY2Vzcy5lbnYuR0FURVdBWV9BVVRIX1RPS0VOIH1gICk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCBgQ29udGVudC1UeXBlYCwgYGFwcGxpY2F0aW9uL2pzb25gICk7XG4gICAgICAgIHJldHVybiBmZXRjaCggYCR7IHByb2Nlc3MuZW52LkFQSV9HQVRFV0FZIH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGBQT1NUYCxcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICB9ICkudGhlbiggKCByZXNwb25zZTogYW55ICkgPT4gcmVzcG9uc2UuanNvbigpIClcbiAgICAgICAgICAgIC50aGVuKCAoIHJlc3VsdDogYW55ICkgPT4gcmVzdWx0LmRhdGEuYXBwcylcbiAgICAgICAgICAgIC5jYXRjaCggKCBlcnI6IGFueSApID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgcHVibGljIGZldGNoQXBpICggYXV0aG9yaXphdGlvbkhlYWRlcjogYW55LCBhcGlVcmw6IGFueSwgcXVlcnk6IGFueSwgcGFyYW06IGFueSwgbW9kZTogYW55ICkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcGFyYW1cbiAgICAgICAgfSApO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCggYEF1dGhvcml6YXRpb25gLCBgJHsgYXV0aG9yaXphdGlvbkhlYWRlciB8fCBwcm9jZXNzLmVudi5HQVRFV0FZX0FVVEhfVE9LRU4gfWAgKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoIGBDb250ZW50LVR5cGVgLCBgYXBwbGljYXRpb24vanNvbmAgKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKCBhcGlVcmwgfHwgcHJvY2Vzcy5lbnYuQVBJX0dBVEVXQVksIHtcbiAgICAgICAgICAgIG1ldGhvZDogbW9kZSB8fCBgUE9TVGAsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgfSApXG4gICAgICAgICAgICAudGhlbiggKCByZXN1bHQ6IGFueSApID0+IHJlc3VsdC5qc29uKCkgKVxuICAgICAgICAgICAgLnRoZW4oICggcmVzdWx0OiBhbnkgKSA9PiByZXN1bHQuZGF0YSApXG4gICAgICAgICAgICAuY2F0Y2goICggZXJyOiBhbnkgKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSApO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlSGVscGVyID0gQVBJVGVtcGxhdGVIZWxwZXIudGVtcGxhdGVIZWxwZXIoKTtcbiIsImltcG9ydCB7IFNlYXJjaE1hcCB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNlYXJjaE1hcENyb24gfSBmcm9tICcuL2Nyb24nO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoTWFwUmVzb2x2ZXIgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgbGlzdFNlYXJjaE1hcChyb290OiBhbnksIGFyZ3M6IGFueSwgY3R4OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBTZWFyY2hNYXAuZmluZCgpLmV4ZWMoKS50aGVuKChyZXM6IFNlYXJjaE1hcE1vZGVbXSkgPT4gcmVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U2VhcmNoTWFwKHJvb3Q6IGFueSwgYXJnczogYW55LCBjdHg6IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFNlYXJjaE1hcC5maW5kQnlJZChhcmdzLl9pZCkuZXhlYygpO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyU2VhcmNoTWFwICggcm9vdDogYW55LCBhcmdzOiBhbnksIGN0eDogYW55ICkge1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoTWFwQ3JvbiA9IG5ldyBTZWFyY2hNYXBDcm9uKCk7XG4gICAgICAgICAgICBzZWFyY2hNYXBDcm9uLnNlYXJjaE1hcFRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgYXN5bmMgY3JlYXRlU2VhcmNoTWFwKHJvb3Q6IGFueSwgYXJnczogYW55LCBjdHg6IGFueSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBTZWFyY2hNYXAoYXJncy5pbnB1dCk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5zYXZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVNlYXJjaE1hcChyb290OiBhbnksIGFyZ3M6IGFueSwgY3R4OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBTZWFyY2hNYXAuZmluZEJ5SWRBbmRVcGRhdGUoIGFyZ3MuaW5wdXQuX2lkLCBhcmdzLmlucHV0LCB7IG5ldzogdHJ1ZSB9ICkuZXhlYygpO1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGVTZWFyY2hNYXAocm9vdDogYW55LCBhcmdzOiBhbnksIGN0eDogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gU2VhcmNoTWFwLmZpbmRCeUlkQW5kUmVtb3ZlKGFyZ3MuX2lkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gZXJyb3IpO1xuICAgICAgICB9LFxuICAgIH1cbn1cbiIsImltcG9ydCB7IERvY3VtZW50LCBNb2RlbCwgbW9kZWwsIFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGNvbnN0IFNlYXJjaE1hcFNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGFwcElkOiBTdHJpbmcsXG4gIGZpZWxkczogW3tcbiAgICBmcm9tOiBTdHJpbmcsXG4gICAgdG86IFN0cmluZ1xuICB9XSxcbiAgYXBpQ29uZmlnOiB7XG4gICAgbW9kZTogU3RyaW5nLFxuICAgIGF1dGhvcml6YXRpb25IZWFkZXI6IFN0cmluZyxcbiAgICBhcGlVcmw6IFN0cmluZyxcbiAgICBxdWVyeTogU3RyaW5nLFxuICAgIHBhcmFtOiBTdHJpbmdcbiAgfSxcbiAgcHJlZmVyZW5jZXM6IHtcbiAgICBpY29uVXJsOiBTdHJpbmcsXG4gICAgdXJsVGVtcGxhdGU6IFN0cmluZyxcbiAgICB1cmxQYXJhbXM6IFsgU3RyaW5nIF0sXG4gICAgdGl0bGVUZW1wbGF0ZTogU3RyaW5nLFxuICAgIHRpdGxlUGFyYW1zOiBbIFN0cmluZyBdXG4gIH0sXG4gIGNyZWF0ZWRCeTogU3RyaW5nLFxuICBjcmVhdGVkT246IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcbiAgdXBkYXRlZEJ5OiBTdHJpbmcsXG4gIHVwZGF0ZWRPbjogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9LFxufSk7XG5cbmludGVyZmFjZSBTZWFyY2hNYXAgZXh0ZW5kcyBTZWFyY2hNYXBNb2RlLCBEb2N1bWVudCB7IH1cblxuaW50ZXJmYWNlIFNlYXJjaE1hcFN0YXRpYyBleHRlbmRzIE1vZGVsPFNlYXJjaE1hcD4geyB9XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hNYXA6IE1vZGVsPFNlYXJjaE1hcD4gPSBtb2RlbDxTZWFyY2hNYXAsIFNlYXJjaE1hcFN0YXRpYz4oJ1NlYXJjaE1hcCcsIFNlYXJjaE1hcFNjaGVtYSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi1zYWZlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwcy1wcm94eS1hZ2VudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1zY2hlZHVsZVwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NlcnZpY2UudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9