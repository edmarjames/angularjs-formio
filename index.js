const myApp = angular.module('myApp', [])

myApp.config(function() {
    // 
})

myApp.run(['$rootScope', function($rootScope) {
    // 
}])

myApp.controller('FormController', ['$scope', '$http', function($scope, $http) {
    
      // $scope.form = {
      //   components: [{
      //     "input": true,
      //     "tableView": true,
      //     "inputType": "text",
      //     "inputMask": "",
      //     "label": "First Name",
      //     "key": "firstName",
      //     "placeholder": "Enter your first name",
      //     "prefix": "",
      //     "suffix": "",
      //     "multiple": false,
      //     "defaultValue": "",
      //     "protected": false,
      //     "unique": false,
      //     "persistent": true,
      //     "validate": {
      //       "required": false,
      //       "minLength": "",
      //       "maxLength": "",
      //       "pattern": "",
      //       "custom": "",
      //       "customPrivate": false
      //     },
      //     "conditional": {
      //       "show": false,
      //       "when": null,
      //       "eq": ""
      //     },
      //     "type": "textfield"
      //   }, {
      //     "input": true,
      //     "tableView": true,
      //     "inputType": "text",
      //     "inputMask": "",
      //     "label": "Last Name",
      //     "key": "lastName",
      //     "placeholder": "Enter your last name",
      //     "prefix": "",
      //     "suffix": "",
      //     "multiple": false,
      //     "defaultValue": "",
      //     "protected": false,
      //     "unique": false,
      //     "persistent": true,
      //     "validate": {
      //       "required": false,
      //       "minLength": "",
      //       "maxLength": "",
      //       "pattern": "",
      //       "custom": "",
      //       "customPrivate": false
      //     },
      //     "conditional": {
      //       "show": false,
      //       "when": null,
      //       "eq": ""
      //     },
      //     "type": "textfield"
      //   }, {
      //     "input": true,
      //     "tableView": true,
      //     "label": "Message",
      //     "key": "message",
      //     "placeholder": "What do you think?",
      //     "prefix": "",
      //     "suffix": "",
      //     "rows": 3,
      //     "multiple": false,
      //     "defaultValue": "",
      //     "protected": false,
      //     "persistent": true,
      //     "validate": {
      //       "required": false,
      //       "minLength": "",
      //       "maxLength": "",
      //       "pattern": "",
      //       "custom": ""
      //     },
      //     "type": "textarea",
      //     "conditional": {
      //       "show": false,
      //       "when": null,
      //       "eq": ""
      //     }
      //   }, {
      //     type: 'button',
      //     theme: 'primary',
      //     disableOnInvalid: true,
      //     action: 'submit',
      //     block: false,
      //     rightIcon: '',
      //     leftIcon: '',
      //     size: 'md',
      //     key: 'submit',
      //     tableView: false,
      //     label: 'Submit',
      //     input: true
      //   }],
      //   display: 'form'
      // };

      $scope.jsonStr;

      $scope.fetchSchema = function() {
        $http.get('./data/chime_form_schema.json', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          // $scope.jsonStr = angular.toJson(response.data);
          $scope.jsonStr = angular.toJson(response.data);
          console.log($scope.jsonStr);
        })
        .catch((error) => {
          console.warn(error);
        });
      };
      $scope.fetchSchema();
      
      // Formio.createForm(document.getElementById('formio'), {
      //   components: [
      //     {
      //       type: 'textfield',  
      //       key: 'firstName',
      //       label: 'First Name',
      //       placeholder: 'Enter your first name.',
      //       input: true,
      //       tooltip: 'Enter your <strong>First Name</strong>',
      //       description: 'Enter your <strong>First Name</strong>'
      //     },
      //     {
      //       type: 'textfield',
      //       key: 'lastName',
      //       label: 'Last Name',
      //       placeholder: 'Enter your last name',
      //       input: true,
      //       tooltip: 'Enter your <strong>Last Name</strong>',
      //       description: 'Enter your <strong>Last Name</strong>'
      //     },
      //     {
      //       type: "select",
      //       label: "Favorite Things",
      //       key: "favoriteThings",
      //       placeholder: "These are a few of your favorite things...",
      //       data: {
      //         values: [
      //           {
      //             value: "raindropsOnRoses",
      //             label: "Raindrops on roses"
      //           },
      //           {
      //             value: "whiskersOnKittens",
      //             label: "Whiskers on Kittens"
      //           },
      //           {
      //             value: "brightCopperKettles",
      //             label: "Bright Copper Kettles"
      //           },
      //           {
      //             value: "warmWoolenMittens",
      //             label: "Warm Woolen Mittens"
      //           }
      //         ]
      //       },
      //       dataSrc: "values",
      //       template: "<span>{{ item.label }}</span>",
      //       multiple: true,
      //       input: true
      //     },
      //     {
      //       type: 'button',
      //       action: 'submit',
      //       label: 'Submit',
      //       theme: 'primary'
      //     }
      //   ]
      // }).then(function(form) {
      //   form.on('submit', function(submission) {
      //     console.log(submission);
      //   });
      // });

      // console.log(angular.toJson($scope.jsonStr));
      // console.log($scope.jsonStr);

      Formio.createForm(document.getElementById('formio'), JSON.parse($scope.jsonStr)).then(function(form) {
        form.on('submit', function(submission) {
          console.log(submission);
        });
      });

}]);