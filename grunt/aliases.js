module.exports = function (grunt, options) {

    return {
        server: [
            'build',
            'connect:livereload',
            'open',
            'watch'
        ],

        build: [
            'clean',
            'sass',
            'copy:js',
            'copy:directives',
            'copy:templates',
            'copy:views',
            'copy:svg',
            'copy:fonts',
            'copy:img',
            'bower',
            'tags',
            'styledown'
        ],

        deploy: [

        ]
    };

}