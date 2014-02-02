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

 jekyll: { 
    serve: {
      options: {
        serve: true
      }
    }  
  },

  watch: {
      styles: {
          files: ['saas/*.scss'],
          tasks: ['sass', 'autoprefixer', 'jekyll']
      },
      jekyll: {
        files: ['*.html', '*.md', '*.yml', 'js/**.js', '_posts/**', '_includes/**', '_layouts/**'],
        tasks: ['sass', 'autoprefixer', 'jekyll']       
      }
  },

  concurrent: {
    tasks: ['clean', 'sass', 'autoprefixer', 'jekyll', 'watch'],
    options: { logConcurrentOutput: true }
  }    

});

  // Loading Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt watch --verbose
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('default', ['concurrent:tasks']);

};