module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    concurrent: {
      target: {
        tasks: ['nodemon', 'run:npm_start'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    run: {
      npm_start: {
        cmd: 'npm',
        args: ['start']
      }
    },

    nodemon: {
      dev: {
        script: './server/index.js'
      },
      options: {
        watch: ['server']
      }
    }

  });

  grunt.registerTask('default', ['concurrent']);
};