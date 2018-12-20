sap.ui.define([ 'sap/m/MessageToast',
	'sap/ui/core/UIComponent',
	'myhealthapp/controller/BaseController'
], function(MessageToast, UIComponent, BaseController) {
	"use strict";

	return BaseController.extend("myhealthapp.controller.Home", {
		onInit : function() {
			this.initializeRouter();
		},

		initializeRouter: function(){
			this.oRouter = UIComponent.getRouterFor(this);
		},

		onMyPatientsTilePress: function(oEvent) {
			var iNumberOfPatients = oEvent.getSource().getTileContent()[0].getContent().getValue() || 0;
			MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("patientsTileInfo", [iNumberOfPatients]));
		},

		onMyOrganzationsTilePress: function(oEvent) {
			var iNumberOfOrganizations = oEvent.getSource().getTileContent()[0].getContent().getValue() || 0;
			MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("organzationsTileInfo", [iNumberOfOrganizations]));
		},

		onMyObservationsTilePress: function(oEvent) {
			var iNumberOfObservation = oEvent.getSource().getTileContent()[0].getContent().getValue() || 0;
			MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("observationTileInfo", [iNumberOfObservation]));
		},

		onMyEncounterTilePress: function(oEvent) {
			var iNumberOfEncounter = oEvent.getSource().getTileContent()[0].getContent().getValue() || 0;
			MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("encounterTileInfo", [iNumberOfEncounter]));
		},

		onNavigateToPatientScreen : function() {
			this.oRouter.navTo("patientList");
		}
	});
});