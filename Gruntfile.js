
module.exports = function (grunt) {
  // load all grunt tasks based on environment
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadTasks('grunttasks');
};
