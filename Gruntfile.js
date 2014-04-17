'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    paths: {
      demo: require('./bower.json').demoPath || 'demo',
      src: require('./bower.json').srcPath || 'src',
      dist: 'dist'
    },
    
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= paths.demo %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= paths.demo %>/{,*/}*.css',
          '<%= paths.demo %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      
      js: {
        files: [
          '<%= paths.demo %>/{,*/}*.js',
          '<%= paths.src %>/{,*/}*.js'
        ],
        tasks: ['newer:jshint:all']
      },
      
      jsTest: {
        files: [
          '<%= paths.demo %>/{,*/}*.js',
          'test/*.js',
          'test/spec/{,*/}*.js',
          '<%= paths.src %>/{,*/}*.js'
        ],
        tasks: ['newer:jshint:test', 'karma:unit']
      },
      
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['newer:jshint:all']
      }
    },
    
    connect: {
      options: {
        port: 9012,
        hostname: 'localhost',
        livereload: 35735
      },
      
      livereload: {
        base: [
          '.tmp',
          '<%= paths.demo %>',
          '<%= paths.src %>'
        ]
      },
      
      test: {
        options: {
          port: 9013,
          base: [
            '.tmp',
            'test',
            '<%= paths.src %>'
          ]
        }
      }
    },
    
    open: {
      demo: {
        path: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/demo/index.html',
        app: 'Google Chrome'
      }
    },
    
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        force: true
      },
      all: [
        'Gruntfile.js',
        'scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc',
        },
        src: ['test/spec/{,*/}*.js']
      }
    },
    
    'bowerInstall': {
      demo: {
        src: ['<%= paths.demo %>/index.html'],
        ignorePath: '<%= paths.demo %>/'
      }
    },
    
    karma: {
      options: {
        configFile: 'karma.conf.js',
        singleRun: true
      },
      unit: {
        browsers: ['PhantomJS']
      },
      nix: {
        browsers: ['Chrome', 'Firefox', 'Safari']
      },
      windows: {
        browsers: ['IE', 'Chrome', 'Firefox']
      }
    },
  });
  
  grunt.registerTask('serve', [
    'bowerInstall',
    'connect:livereload',
    'open:demo',
    'watch'
  ]);
  
  grunt.registerTask('livetest', [
    'karma:nix',
    'watch'
  ]);
};