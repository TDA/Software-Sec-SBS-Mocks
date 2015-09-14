/**
 * Created by schandramouli on 9/14/15.
 */
// grunt task to run all linting tools.

module.exports = function (grunt) {
  grunt.registerTask('lint', 'lint everything',
    [
    'jshint',
    'jscs'
    ]);

};
