'use strict';

module.exports = function (grunt) {

  require('jit-grunt')(grunt, {
    uglify: 'grunt-contrib-uglify',
    watch: 'grunt-contrib-watch',
  });

  grunt.initConfig({
    watch: {
      scripts: {
        options: {
          spawn: false,
          reload: true,
        },
        files: [
          './Gruntfile.js',
          './index.js',
          './index.spec.js',
        ],
        tasks: [
          'uglify',
        ],
      },
    },
    uglify: {
      options: {
        // mangle: false,
        mangle: {
          except: ['firebase', '$']
        },
        compress: true,
        wrap: false,
        preserveComments: false,
      },
      default: {
        files: {
          'index.min.js':['index.js'],
        },
      }
    },
  });

  grunt.registerTask('build', [
    'uglify',
    'watch',
  ]);
};