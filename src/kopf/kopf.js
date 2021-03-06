var kopf = angular.module('kopf', ['ngRoute']);

// manages behavior of confirmation dialog
kopf.factory('ConfirmDialogService', function() {
  this.header = 'Default Header';
  this.body = 'Default Body';
  this.cancel_text = 'cancel';
  this.confirm_text = 'confirm';

  this.confirm = function() {
    // when created, does nothing
  };

  this.close = function() {
    // when created, does nothing
  };

  this.open = function(header, body, action, confirmCallback, closeCallback) {
    this.header = header;
    this.body = body;
    this.action = action;
    this.confirm = confirmCallback;
    this.close = closeCallback;
  };

  return this;
});

kopf.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.
      when('/cluster', {
        templateUrl: 'partials/cluster_overview.html',
        controller: 'ClusterOverviewController'
      }).
      when('/cluster', {
        templateUrl: 'partials/cluster_overview.html',
        controller: 'ClusterOverviewController'
      }).
      when('/rest', {
        templateUrl: 'partials/rest_client.html',
        controller: 'RestController'
      }).
      when('/aliases', {
        templateUrl: 'partials/aliases.html',
        controller: 'AliasesController'
      }).
      when('/analysis', {
        templateUrl: 'partials/analysis.html',
        controller: 'AnalysisController'
      }).
      when('/percolator', {
        templateUrl: 'partials/percolator.html',
        controller: 'PercolatorController'
      }).
      when('/warmers', {
        templateUrl: 'partials/warmers.html',
        controller: 'WarmersController'
      }).
      when('/snapshot', {
        templateUrl: 'partials/snapshot.html',
        controller: 'SnapshotController'
      }).
      when('/createIndex', {
        templateUrl: 'partials/create_index.html',
        controller: 'CreateIndexController'
      }).
      when('/clusterHealth', {
        templateUrl: 'partials/cluster_health.html',
        controller: 'ClusterHealthController'
      }).
      when('/clusterSettings', {
        templateUrl: 'partials/cluster_settings.html',
        controller: 'ClusterSettingsController'
      }).
      when('/indexSettings', {
        templateUrl: 'partials/index_settings.html',
        controller: 'IndexSettingsController'
      }).
      otherwise({redirectTo: '/cluster'});
});
