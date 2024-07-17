sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

], 
    function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("ui5.uebungsprogramm.controller.EmployeeList", {
        
		onFilterEmployees(oEvent) {
			const aFilter = [];
			const sQuery = oEvent.getParameter("newValue");
			if (sQuery) {
				aFilter.push(new Filter("EmployeeFirstName", FilterOperator.Contains, sQuery));
			}

			const oList = this.byId("employeeList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		    }
        });
});