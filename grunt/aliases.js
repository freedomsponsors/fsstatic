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
            'copy:svg',
            'jade',
            'bower',
            'tags',
            'styledown'
        ],

        deploy: [

        ]
    };

}