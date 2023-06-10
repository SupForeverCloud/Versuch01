function openCustomPageDialog(primaryControl, firstSelectedItemId, selectedEntityTypeName) {
  // Centered Dialog
  var pageInput = {
    pageType: "custom",
    name: "cr6f5_popupaosuche_f87e7",
  };
  var navigationOptions = {
    target: 2,
    position: 1,
    height: {
      value: 305,
      unit: "px"
    },
    width: {
      value: 700,
      unit: "px"
    },
    title: "Edit Comments",
    displayFullScreenButton: false // Set fullscreen button to false
  };
  Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
    function () {
      // Refresh the main form when the dialog is closed
      primaryControl.data.refresh();
    }
  ).catch(
    function (error) {
      // Handle error
    }
  );
}
