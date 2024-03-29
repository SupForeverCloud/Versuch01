function openCustomPageDialog(primaryControl, firstSelectedItemId, VarParameter) {
  // Centered Dialog
  var pageInput = {
    pageType: "custom",
    name: "cr6f5_popupaosuche_f87e7",
    entityName: VarParameter,
    recordId: firstSelectedItemId // "{087AA308-B321-E811-A845-000D3A33A3AC}" 
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
    title: VarParameter
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
