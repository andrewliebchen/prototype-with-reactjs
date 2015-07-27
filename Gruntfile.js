'use strict';

var fs = require('fs');
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

var webpackDistConfig = require('./webpack.dist.config.js'),
    webpackDevConfig = require('./webpack.config.js');

module.exports = function(grunt) {
  // Let *load-grunt-tasks* require everything
  require('load-grunt-tasks')(grunt);

  // Read configuration from package.json
  var pkgConfig = grunt.file.readJSON('package.json');

  // Project configuration.
  grunt.initConfig({
    pkg: pkgConfig,

    jshint: {
      files: ['slides/js/reveal.js'],
      options: {}
    },

    copy: {
      slides: {
        files: [{
          expand: true,
          cwd: 'slides',
          src: ['js/**', 'css/**'],
          dest: 'dist/'
        }]
      },
      examples: {
        files: [
          // includes files within path
          {
            flatten: true,
            expand: true,
            src: ['examples/src/*'],
            dest: 'dist/examples/',
            filter: 'isFile'
          }
        ]
      }
    },

    template: {
      app: {
        options: {
          data: {
            title: 'Design prototypes with ReactJS',
            content: fs.readFileSync('slides/slides.md').toString()
          }
        },
        files: {
          'dist/index.html': ['slides/layout.html']
        }
      }
    },

    connect: {
      dist: {
        options: {
        port: 5455,
        hostname: '0.0.0.0',
          middleware: function (connect) {
            return [
              require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
              connect.static(require('path').resolve('dist'))
            ];
          }
        }
      },

      examples: {
        options: {
          port: 8000
        },

        dist: {
          options: {
            keepalive: true,
            middleware: function (connect) {
              return [
                mountFolder(connect, pkgConfig.dist)
              ];
            }
          }
        }
      }
    },

    open: {
      options: {
        delay: 500
      },
      dev: {
        path: 'http://localhost:<%= connect.examples.options.port %>/webpack-dev-server/'
      },
      dist: {
        path: 'http://localhost:<%= connect.examples.options.port %>/'
      },
      slides: {
        path: 'http://localhost:5455'
      }
    },

    clean: {
      slides: 'dist',
      examples: {
        files: [{
          dot: true,
          src: [
            '<%= pkg.dist %>'
          ]
        }]
      }
    },

    watch: {
      dist: {
        files: ['dist/**'],
        options: {
          livereload: true
        }
      },
      copy: {
        files: [
          'slides/js/**',
          'slides/css/**'
        ],
        tasks: ['copy']
      },
      template: {
        files: [
          'slides/slides.md',
          'slides/layout.html'
        ],
        tasks: ['template']
      }
    },

    webpack: {
      options: webpackDistConfig,
      dist: {
        cache: false
      }
    },

    'webpack-dev-server': {
      options: {
        hot: true,
        port: 8000,
        webpack: webpackDevConfig,
        publicPath: '/assets/',
        contentBase: './examples/src/'
      },

      start: {
        keepAlive: true
      }
    },
  });

  // Slides
  grunt.registerTask('buildSlides', [
    'clean:slides',
    'copy:slides',
    'template'
  ]);

  grunt.registerTask('slides', [
    'buildSlides',
    'connect:dist',
    'open:slides',
    'watch'
  ]);

  // Examples
  grunt.registerTask('examples', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['buildExamples', 'open:dist', 'connect:dist']);
    }

    grunt.task.run([
      'open:dev',
      'webpack-dev-server'
    ]);
  });

  grunt.registerTask('buildExamples', ['clean:examples', 'copy:examples', 'webpack']);

};
