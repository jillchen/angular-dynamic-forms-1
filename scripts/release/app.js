(function () {
    'use strict';

    angular.module('app', ['dynamic-forms'])
        .config(['$routeProvider', AppConfig]);

    function AppConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .when('/angular-dynamic-forms', {
                templateUrl: 'app/views/home.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
}());
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("/app/views/views/home.html","<h1>Getting Started</h1>\r\nDynamic forms is an Angular JS module that allows you to dynamic generate a HTML form based off of standard <a href=\"http://json-schema.org\" target=\"_blankd\">JSON schema</a> complete with support for the following:\r\n<ul>\r\n    <li>Form Validation</li>\r\n    <li>Extensible and customizable template driven design</li>\r\n    <li>Default templates leverage bootstrap, but can be fully customized</li>\r\n</ul>\r\n<h2>Installation</h2>\r\n<h4>Install with bower</h4>\r\n<code>\r\n    $ bower install angular-dynamic-forms\r\n</code>\r\n<h4>Add script reference to your app</h4>\r\n<code>\r\n    &lt;script type=&quot;text/javascript&quot; src=&quot;bower_components/dist/dynamic-forms.js&quot;&gt;&lt;/script&gt;\r\n</code>\r\n<h4>Add Angular Reference</h4>\r\n<code>\r\n    angular.module(\'myApp\', [\'dynamic-forms\']);\r\n</code>\r\n<h4>\r\n    Add dynamic-form directive to your view\r\n</h4>\r\n<code>\r\n    &lt;dynamic-form schema=&quot;formSchema&quot; ng-model=&quot;formModel&quot;&gt;&lt;/dynamic-form&gt;\r\n</code>\r\n<h3>Basic Example</h3>\r\n<h5>JavaScript</h5>\r\n<pre>\r\nvm.formSchema = {\r\n    type: \'object\',\r\n    title: \'Basic Example\',\r\n    description: \'Example description for angular dynamic form\',\r\n    properties: {\r\n        firstName: { type: \'string\', title: \'First Name\', description: \'Your first name\', required: true },\r\n        lastName: { type: \'string\', title: \'Last Name\', description: \'Your last name\', required: true },\r\n        email: { type: \'string\', format: \'email\', title: \'E-mail\', description: \'Your email address\', required: true }\r\n    }\r\n};\r\nvm.formModel = {\r\n    firstName: \'John\',\r\n    lastName: \'Doe\',\r\n    email: \'john.doe@gmail.com\'\r\n};\r\n</pre>\r\n<h5>HTML</h5>\r\n<pre>\r\n&lt;dynamic-form schema=&quot;home.formSchema&quot; ng-model=&quot;home.formModel&quot;&gt;\r\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;Submit&lt;/button&gt;\r\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;&gt;Cancel&lt;/button&gt;\r\n&lt;/dynamic-form&gt;\r\n</pre>\r\n<h5>Generated Example</h5>\r\n<dynamic-form schema=\"home.formSchema\" ng-model=\"home.formModel\">\r\n    <button type=\"button\" class=\"btn btn-success\">Submit</button>\r\n    <button type=\"button\" class=\"btn btn-danger\">Cancel</button>\r\n</dynamic-form>");}]);
(function () {
    'use strict';

    angular.module('app')
        .controller('homeController', ['$scope', HomeController]);

    function HomeController($scope) {
        var vm = this;

        vm.formSchema = {
            type: 'object',
            title: 'Basic Example',
            description: 'Example description for angular dynamic form',
            properties: {
                firstName: { type: 'string', title: 'First Name', description: 'Your first name', required: true },
                lastName: { type: 'string', title: 'Last Name', description: 'Your last name', required: true },
                email: { type: 'string', format: 'email', title: 'E-mail', description: 'Your email address', required: true }
            }
        };

        vm.formModel = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@gmail.com'
        };
    }
}());