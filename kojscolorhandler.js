/************************/
/* Binding with JSColor */
/************************/
ko.bindingHandlers.jscolor = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var modelValue = ko.utils.unwrapObservable(valueAccessor()) || {};
    // Id of the element (found or generated)
    var id = $(element).attr('id');
    if(id == undefined || id == '') {
      $(element).attr('id','id_' + Math.floor(new Date().valueOf()));
      id = $(element).attr('id');
    }

    var input = document.getElementById(id);
    var picker = new jscolor(input);
    picker.fromString(modelValue);

    input.onchange = function() {
      var jscolorInput = document.getElementById(id);
      var color = jscolorInput.value;

      var observable;
      var content = ko.utils.unwrapObservable(valueAccessor()) || {};

      if (content.data != undefined) {
          observable = valueAccessor().data;
      } else {
          observable = valueAccessor();
      }
      observable(color);
    }
  }
};
