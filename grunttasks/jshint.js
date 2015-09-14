/**
 * Created by schandramouli on 9/14/15.
 */

module.exports = function (grunt) {
  grunt.config('jshint', {
    options: {
      jshintrc: '.jshintrc'
    },
    grunt: [
      'Gruntfile.js',
      'grunttasks/*.js'
    ],
    app: {
      src: [
        'src/**/*.js',
        '!src/**/vendor/*.js'
      ]
    },
    tests: [
      'test/**/*.js'
    ]
  });
};
