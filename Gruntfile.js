module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['src/color-thief.js']
    },
    uglify: {
      options: {
        preserveComments: 'some',
        sourceMap: false
      },
      dist: {
        files: {
          'dist/color-thief.min.js': ['src/color-thief.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['jshint', 'uglify']);
};
