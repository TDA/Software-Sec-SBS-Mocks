/**
 * Created by schandramouli on 9/14/15.
 */

module.exports = function (grunt) {
  grunt.config('jscs', {
    options: {
      config: '.jscsrc'
    },
    grunt: [
      'Gruntfile.js',
      'grunttasks/*.js'
    ],
    app: {
      src: [
        'src/**/*.js',
        '!src/**/vendor/**'
      ]
    }
  });
};
