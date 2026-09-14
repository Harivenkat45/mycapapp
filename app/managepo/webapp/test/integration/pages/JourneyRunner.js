sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"harish/ui/managepo/test/integration/pages/PurchaseOrderSetList.gen",
	"harish/ui/managepo/test/integration/pages/PurchaseOrderSetObjectPage.gen",
	"harish/ui/managepo/test/integration/pages/PurchaseItemsSetObjectPage.gen"
], function (JourneyRunner, PurchaseOrderSetListGenerated, PurchaseOrderSetObjectPageGenerated, PurchaseItemsSetObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('harish/ui/managepo') + '/test/flp.html#app-preview',
        pages: {
			onThePurchaseOrderSetListGenerated: PurchaseOrderSetListGenerated,
			onThePurchaseOrderSetObjectPageGenerated: PurchaseOrderSetObjectPageGenerated,
			onThePurchaseItemsSetObjectPageGenerated: PurchaseItemsSetObjectPageGenerated
        },
        async: true
    });

    return runner;
});

