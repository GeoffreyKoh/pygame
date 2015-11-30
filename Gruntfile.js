module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		watch: {
			files: ['src/**/*','src/js/template/*'],
			tasks: ['copy']
		},

		sass: {
			dist: {
				files: {
					'src/styles/css/style.css':'src/styles/sass/style.scss'
				}
			}
		},

		copy: {
			template:{
				flatten:true,
				expand:true,
				src: 'src/app/*',
				dest: 'templates'

			},
			css:{
				flatten:true,
				expand:true,
				src: 'src/styles/css/*',
				dest: 'static/css'
			},
			sass:{
				flatten:true,
				expand:true,
				src: 'src/styles/sass/*',
				dest: 'static/sass'
			},
			buttons:{
				flatten:true,
				expand:true,
				src: 'src/Buttons/*',
				dest: 'static/Buttons'
			},
			buttons_new:{
				flatten:true,
				expand:true,
				src: 'src/Buttons_new/*',
				dest: 'static/Buttons_new'
			},
			data:{
				flatten:true,
				expand:true,
				src: 'src/data/*',
				dest: 'static/data'
			},
			img:{
				flatten:true,
				expand:true,
				src: 'src/img/*',
				dest: 'static/img'
			},
			js:{
				flatten:true,
				expand:true,
				src: 'src/js/*.js',
				dest: 'static/js'
			},
			templates:{
				flatten:true,
				expand:true,
				src: 'src/js/template/*',
				dest: 'static/templates'
			}

		}

	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('flask','Run Flask Server',function(){
		var spawn = require('child_process').spawn;
		grunt.log.writeln('Starting Python Server');
		var PIPE = {stdio:'inherit'};
		spawn('python',['server.py'],PIPE);
		})
	grunt.registerTask('sassy',['sass']);
	grunt.registerTask('dup',['copy']);
	grunt.registerTask('eye',['watch']);
	grunt.registerTask('all','Compile then copy',function(target){
		return grunt.task.run([
			'sassy',
			'dup',
			'flask',
			'eye'
			]);
		})

};