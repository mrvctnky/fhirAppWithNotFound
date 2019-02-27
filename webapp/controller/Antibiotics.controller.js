sap.ui.define([
    "sap/m/MessageToast", 
    "myhealthapp/controller/BaseController"
],function (MessageToast, BaseController) {
	"use strict";

	var PageController = BaseController.extend("myhealthapp.controller.Antibiotics", {

		/**
		 * Creates a message for a press event on the chart
		 *
		 * @private
		 */
		press: function (oEvent) {
			MessageToast.show("The Interactive Donut Chart is pressed.");
		},

		/**
		 * Creates a message for a selection change event on the chart
		 *
		 * @private
		 */
		onSelectionChanged: function (oEvent) {
			var oSegment = oEvent.getParameter("segment");
			MessageToast.show("The selection changed: " + oSegment.getLabel() + " " + ((oSegment.getSelected()) ? "selected" : "not selected"));
		}
	});

	return PageController;

});