module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'static/css/style.css':'static/sass/style.scss'
				}
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('style',['sass']);

};