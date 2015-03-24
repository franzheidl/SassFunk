module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('bootcamp');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.initConfig({

    dir: {
      src: 'stylesheets',
      dist: 'dist'
    },
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '/*\n------------------------------------------------------\n<%= pkg.name %> \nv<%= pkg.version %> \nHomepage: <%= pkg.homepage %> \nRepository: <%= pkg.repository %> \n<%= pkg.author %>, <%= grunt.template.today("yyyy") %>\n------------------------------------------------------\n*/ \n\n'
      },
      dist: {
        src: [
          '<%= dir.src %>/SassFunk/_sfnk-colors-complement.scss',
          '<%= dir.src %>/SassFunk/_sfnk-colors-darken.scss',
          '<%= dir.src %>/SassFunk/_sfnk-colors-desaturate.scss',
          '<%= dir.src %>/SassFunk/_sfnk-colors-grayscale.scss',
          '<%= dir.src %>/SassFunk/_sfnk-colors-invert.scss',
          '<%= dir.src %>/SassFunk/_sfnk-colors-lighten.scss',
          '<%= dir.src %>/SassFunk/_sfnk-colors-mix.scss',
          '<%= dir.src %>/SassFunk/_sfnk-colors-saturate.scss',
          '<%= dir.src %>/SassFunk/_sfnk-is-color-list.scss',
          '<%= dir.src %>/SassFunk/_sfnk-is-grayscale-color.scss',
          '<%= dir.src %>/SassFunk/_sfnk-is-nested-list.scss',
          '<%= dir.src %>/SassFunk/_sfnk-is-numeric-list.scss',
          '<%= dir.src %>/SassFunk/_sfnk-is-valid-border.scss',
          '<%= dir.src %>/SassFunk/_sfnk-list-contains-all.scss',
          '<%= dir.src %>/SassFunk/_sfnk-list-contains.scss',
          '<%= dir.src %>/SassFunk/_sfnk-is-type-list.scss',
          '<%= dir.src %>/SassFunk/_sfnk-list-mapify.scss',
          '<%= dir.src %>/SassFunk/_sfnk-list-prepend.scss',
          '<%= dir.src %>/SassFunk/_sfnk-list-reject-all.scss',
          '<%= dir.src %>/SassFunk/_sfnk-list-reject-nth.scss',
          '<%= dir.src %>/SassFunk/_sfnk-list-reject.scss',
          '<%= dir.src %>/SassFunk/_sfnk-list-reverse.scss',
          '<%= dir.src %>/SassFunk/_sfnk-map-listify-deep.scss',
          '<%= dir.src %>/SassFunk/_sfnk-map-listify.scss',
          '<%= dir.src %>/SassFunk/_sfnk-map-set.scss'
        ],
        dest: '<%= dir.dist %>/_<%= pkg.name %>.scss'
      }
    },

    sass: {
      test: {
        options: {
          style: 'expanded',
          compass: false,
          loadPath: './node_modules/bootcamp/dist'
        },
        files: {
          './tmp/results.css': './test/test.scss'
        }
      },
      compile: {
        options: {
          style: 'compact',
          compass: false
        },
        files: {
          'gh-page.css': 'gh-page/sass/sassfunk.scss'
        }
      }
    },

    bootcamp: {
      test: {
        files: {
          src: ['./tmp/results.css']
        }
      }
    },

    jade: {
      compile: {
        files: {
          './index.html': 'gh-page/jade/index.jade'
        }
      }
    },

    inline: {
      site: {
        src: './index.html',
        dest: './index.html'
      }
    },

    copy: {
      site: {
        src: './gh-page/js/*.js',
        dest: './js/sassfunk.js'
      }
    },

    watch: {
      dist: {
        files: [
          './test/**/*.scss',
          './<%= dir.src %>/**/*.scss'
        ],
        tasks: ['test']
      },
      site: {
        files: ['gh-page/sass/**/*.scss', 'gh-page/jade/**/*.jade'],
        tasks: ['sass:compile', 'jade:compile']
      },
      inline: {
        files: ['./index.html'],
        tasks: ['inline:site']
      }
    },

    browserSync: {
      site: {
        bsFiles: {
          src: ['./*.css', './*.html']
        },
        options: {
          server: {
            baseDir: './'
          },
          watchTask: true,
          port: 8080
        }
      }
    },

    'gh-pages': {
      options: {
        base: './',
        src: ['index.html', 'gh-page.css']
      }
    }

  });

  grunt.registerTask('test', ['sass', 'bootcamp']);
  grunt.registerTask('dev', ['test', 'watch:dist']);
  grunt.registerTask('build', ['test', 'concat']);
  grunt.registerTask('site', ['browserSync', 'watch:site']);
  grunt.registerTask('build_site', ['sass:compile', 'jade:compile', 'inline:site' , 'copy:site']);
  grunt.registerTask('default', ['dev']);

}
