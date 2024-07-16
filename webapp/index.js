sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/ComponentContainer"
], (XMLView, ComponentContainer) => {
	"use strict";

//	alert("UI5 ist bereit zur Verwendung");

	new ComponentContainer({
		name: "ui5.uebungsprogramm",
		async: true
	}).placeAt("text")

});