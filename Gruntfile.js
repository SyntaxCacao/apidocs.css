module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            testdocs: {
                dest: 'docs/stylesheet.css',
                src: 'apidocs.css'
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9']})
                ]
            },
            build: {
                src: 'apidocs.css'
            }
        },

        sass: {
            options: {
                sourcemap: 'none',
                style: 'expanded'
            },
            build: {
                files: {
                    'apidocs.css': 'src/index.scss'
                }
            }
        },

        watch: {
            css: {
                files: ['src/**/*.scss'],
                tasks: 'default'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['sass', 'postcss', 'copy']);
}
