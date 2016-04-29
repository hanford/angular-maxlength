angular
  .module('ngMaxLength', [])
  .directive('ngMaxlength', ngMaxLength)

function ngMaxLength () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {
      var maxlength = Number(attrs.ngMaxlength)
      function enforceML (data) {
        if (data.length > maxlength) {
          var transformedInput = data.substring(0, maxlength)
          ngModelCtrl.$setViewValue(transformedInput)
          ngModelCtrl.$render()
          return transformedInput
        }
        return data
      }
      ngModelCtrl.$parsers.push(enforceML)
    }
  }
}
