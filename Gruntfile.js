module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    config: '.config.rb' // брать файл конфига отсюда
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['sass/*.scss', 'sass/*/*.scss'], // следить за изменениями любых файлов с расширениями .scss
                tasks: ['compass'] // и запускать такую задачу при их изменении
            },
            livereload: {
                files: ['*.html', 'img/**/*.{png,jpg,jpeg,svg}', 'img/*.{png,jpg,jpeg,svg}', 'js/*.js', 'css/*.css']
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/', // брать из этой папки
                src: ['*.css', '!*.min.css'], // эти файлы стилей
                dest: 'css/' // класть сюда
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['compass', 'watch']);
    grunt.registerTask('min', ['cssmin']);
};