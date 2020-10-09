(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{717:function(t,e,a){"use strict";a.r(e);var s=a(27),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jacms-aps-core-tag-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jacms-aps-core-tag-library"}},[t._v("#")]),t._v(" jACMS Aps Core Tag Library")]),t._v(" "),a("h2",{attrs:{id:"version-2-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-2-3"}},[t._v("#")]),t._v(" Version: 2.3")]),t._v(" "),a("h2",{attrs:{id:"short-name-jacmsaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#short-name-jacmsaps"}},[t._v("#")]),t._v(" Short Name: jacmsaps")]),t._v(" "),a("h2",{attrs:{id:"uri-jacms-aps-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uri-jacms-aps-core"}},[t._v("#")]),t._v(" URI: /jacms-aps-core")]),t._v(" "),a("table",[a("colgroup",[a("col",{attrs:{width:"100%"}})]),t._v(" "),a("tbody",[a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("content")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Description: Displays the content given its ID.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Attributes")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: contentId")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: ID of the content to display. It can accept "expression language".')])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: modelId")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: Id of the model to use to display the content. The model ID can be either specified explicitly (the model must match the content to serve) or the type name ("list" or "default"); in the latter case the model specified in the configuration will be used. The model must adhere to the content being returned. "Expression language" is accepted.')])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: publishExtraTitle")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Toggles the insertion of the values of the titles in the Request Context. The title values are extracted from the attribute marked with the role \"jacms:title\". Admitted values are (true, false), default 'false'.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: var")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Inserts the rendered content in a variable of the page context with the name provided.")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: attributeValuesByRoleVar")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Inserts the map of the attribute values indexed by the attribute role, in a variable of the page context with the name provided.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Tag class: com.agiletec.plugins.jacms.aps.tags.ContentTag")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("contentInfo")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Description: Return information of a specified content. The content can will be extracted by id from widget parameters or from request parameter. The tag extract any specific parameter (by "param" attribute) or entire ContentAuthorizationInfo object (setting "var" attribute and anything on "param" attribute).')])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Attributes")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: contentId")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: ID of the content")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: param")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Admitted values for \"param\" attribute are: 'contentId' (returns the code of content id), 'mainGroup' (returns the code of owner group), 'authToEdit' (returns true if the current user can edit the content, else false).")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: var")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Inserts the required parameter (or the entire authorization info object) in a variable of the page context with the name provided.")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Tag class: com.agiletec.plugins.jacms.aps.tags.ContentInfoTag")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("contentList")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Description: Loads a list of contents IDs by applying the filters (if any). Only the IDs of the contents accessible in the portal can be loaded.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Attributes")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: listName")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: true")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Name of the variable in the page context that holds the search result.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: contentType")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Sets the code of the content types to search. The name must match the configured one, respecting capital letters and spaces.")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: category")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Identifier string of the category of the content to search.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: cacheable")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: Toggles the system caching usage when retrieving the list. Admitted values (true, false), default "true".')])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: titleVar")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Inserts the title on a variable of the page context with the name provided.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: pageLinkVar")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Inserts the code of the page to link on a variable of the page context with the name provided.")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: pageLinkDescriptionVar")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Inserts the description of the page to link on a variable of the page context with the name provided.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: userFilterOptionsVar")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Name of the variable in the page context that holds the user filter options")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Tag class: com.agiletec.plugins.jacms.aps.tags.ContentListTag")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("contentListFilter")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Description: "ContentListTag" sub-tag, it creates a filter to restrict the result of the content search. Please note that the filters will be applied in the same order they are declared and the result of the search will reflect this fact.')])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Attributes")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: key")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: true")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: String used to filter and sort the contents. This string can be: - the name of a content attribute compatible with the type declared in the "contentListTag" (it requires the "attributeFilter" attribute to be "true") - the ID of one of the content metadata (the "attributeFilter" must be false) The allowed filter key that can be applied to content metadata are: - "created" allows sorting by date of creation of content - "modified" allows sorting by date of modification of content.')])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: attributeFilter")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: true")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: Decides whether the filter must be applied to an attribute or to a content metadata, admitted values are (true, false). The "key" attribute will be checked for validity if the filter is going to be applied to a metadata')])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: value")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: The filtering value.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: start")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: Filters the contents by attribute type or by the field specified with the key (respect the following matches): Text field -→ start Text Text attribute type -→ start Text Numeric attribute type -→ start Numeric date attribute type -→ start data If the data filter is used: - today, oggi or odierna will select all the contents with a date greater or equal to the system date - using date with the pattern "dd/MM/yyyy" will select all the contents with a date greater or equal to the one inserted.')])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: end")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: Similar the the "start" attribute but with the opposite behavior.')])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: order")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: Specifies the sorting behavior of the IDs found: "ASC"ending or "DESC"ending. By default no ordering is performed.')])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: likeOption")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Toggles the 'like' functionality. Admitted values: (true, false). Default: false. The option is available for metadata and on Text Content attributes.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Tag class: com.agiletec.plugins.jacms.aps.tags.ContentListFilterTag")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("contentListUserFilterOption")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Description: "ContentListTag" sub-tag, it creates a custom user filter to restrict the result of the content search by front-end user.')])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Attributes")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: key")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: true")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: The key of the filter. This string can be: - the name of a content attribute compatible with the type declared in the "contentListTag" (it requires the "attributeFilter" attribute to be "true") - the ID of one of the content metadata (the "attributeFilter" must be false) The allowed filter key that can be applied to content metadata are: - "fulltext" allows filter by full-text search<br /> - "category" allows filter by a system category.')])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: attributeFilter")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: true")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: Decides whether the filter must be applied to an attribute or to a content metadata, admitted values are (true, false). The "key" attribute will be checked for validity if the filter is going to be applied to a metadata.')])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Tag class: com.agiletec.plugins.jacms.aps.tags.ContentListUserFilterOptionTag")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("searcher")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Description: Generates a list of content IDs, restricting them to the key word contained in the "search" parameter of the http request.')])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Attributes")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: listName")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: yes")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Name of the variable, stored in the page context, containing the list of content IDs.")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Tag class: com.agiletec.plugins.jacms.aps.tags.SearcherTag")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("rowContentList")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Description: Publish a list of contents.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Attributes")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: listName")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: true")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v('Attribute description: Name of the variable in the page context that holds the contents (list of properties of key "contentId" and "modelId").')])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: titleVar")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Inserts the title on a variable of the page context with the name provided.")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: pageLinkVar")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Inserts the code of the page to link on a variable of the page context with the name provided.")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute: pageLinkDescriptionVar")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Required: false")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("Attribute description: Inserts the description of the page to link on a variable of the page context with the name provided.")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("h3",[t._v("Tag class: org.entando.entando.plugins.jacms.aps.tags.RowContentListTag")])])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);