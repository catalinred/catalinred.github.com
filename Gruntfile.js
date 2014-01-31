module.exports = function(grunt) {

grunt.initConfig({

  clean: ['_site'],  

  sass: {
    dist: {
      options: {
          style: 'compressed'
      },
      files: {
          'css/style.css': 'saas/style.scss'
      }
    } 
  },

  autoprefixer: {
    no_dest: {
      src: 'css/style.css'
    }
  },  

  // Run Jekyll
 jekyll: { 
    serve: {
      options: {
        serve: true
      }
    }
  },

  watch: {
      styles: {
          files: ['sass/*'],
          tasks: 'sass'
      },
      jekyll: {
        files: ['_site/*'],
        tasks: ['jekyll:serve']        
      }
  }  

});

  // Loading Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask( 'default' , [
      'clean',
      'sass',
      'autoprefixer',
      'jekyll:serve',
      'watch:styles',
      'watch:jekyll'
  ]);

};