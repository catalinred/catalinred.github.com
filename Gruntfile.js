module.exports = function(grunt) {

grunt.initConfig({

  autoprefixer: {
    no_dest: {
      src: 'css/style.css'
    }
  },

  sass: {
      dist: {
          options: {
              style: 'compressed'
          },
          files: {
              'css/style.css': 'saas/style.scss'
          }
      } 
  } 

});

  // Loading Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask( 'default' , [
      'sass',
      'autoprefixer'
  ]);

};