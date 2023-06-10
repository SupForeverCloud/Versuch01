function openCustomPageDialog(primaryControl, firstSelectedItemId, selectedEntityTypeName)
{
    // Centered Dialog
    var pageInput = {
        pageType: "custom",
        name: "cr6f5_popupaosuche_f87e7",
 
    };
    var navigationOptions = {
        target: 2,
        position: 1,
	height: {
	    value: 260,
	    unit: "px"
	},
	width: {
	    value: 50,
	    unit: "%"
	},
	title: "Edit Comments"
    };
    Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
        function () {
            // Refresh the main form when the dialog is closed
            primaryControl.data.refresh();
        }
    ).catch (
        function (error) {
            // Handle error
        }
    );
}
