// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/json3/lib/json3.js',
      'bower_components/underscore/underscore.js',
      'bower_components/jquery/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'views/*.html',
      'lib/**/*.js',
      'test/spec/**/*.js',
    ],

    preprocessors: {
      'lib/**/*.js': ['coverage'],
      'views/*.html': ['ng-html2js']
    },
    
    ngHtml2JsPreprocessor: {
      prependPrefix: '/'
    },

    coverageReporter: {
      reporters: [
        {
          type: 'html',
          dir: 'coverage/'
        },
        {
          type: 'cobertura'
        }
      ]
    },

    reporters: ['progress', 'coverage'],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
