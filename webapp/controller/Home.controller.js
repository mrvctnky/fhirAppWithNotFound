sap.ui.define([
	"myhealthapp/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("myhealthapp.controller.Home", {
		onInit : function() {
			this.initializeRouter();
		},

		initializeRouter: function(){
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},

		onMyPatientsTilePress: function(oEvent) {
			var iNumberOfPatients = oEvent.getSource().getTileContent()[0].getContent().getValue() || 0;
			sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("patientsTileInfo", [iNumberOfPatients]));
		},

		onMyOrganzationsTilePress: function(oEvent) {
			var iNumberOfOrganizations = oEvent.getSource().getTileContent()[0].getContent().getValue() || 0;
			sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("organzationsTileInfo", [iNumberOfOrganizations]));
		},

		onNavigateToPatientScreen : function() {
			this.oRouter.navTo("patientList");
		},
	});
});