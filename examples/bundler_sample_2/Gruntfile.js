//var _ = require( "underscore" ),
//	_s = require( "underscore.string" ),
//	path = require( "path" ),
	//assetManager = require( "./WebServer/Libraries/assetManager.js" );
//	assetManager = require( "assetManager.js" );

module.exports = function( grunt ) {

	grunt.initConfig( {
		cartero : {
			dist : {
				options : {
					mode : "dev",
					library : {
						path : "App/node_modules"
					},
					views : {
						path : "App/WebServer/AppPages",
						filesToIgnore : /^_.*/,
						directoriesToIgnore : /^__.*/,
						viewFileExt : ".swig",
						namespace : "MainViewDir"
					},
					publicDir : "App/WebServer/Static",
					projectDir : __dirname,
					templateExt : ".tmpl",
					//serverSideTemplateSuffix : ".swig",
					//useDirectoriesForDependencies : true,
					browserify : true/*,
					minificationTasks : [
						{
							name : "htmlmin",
							suffixes : [ ".tmpl" ],
							options : {
								removeComments : true
							}
						},
						{
							name : "uglify",
							suffixes : [ ".js" ],
							options : {
								mangle : false
							}
						}
					]*/
				}//,
		//dist : {
		//	mode : "prod"
		//}
			//dist : {
//
//			}

			}	
		},


		requirify : {
			dist : {
				options : {
					nodePaths : [ "WebServer/Static/AssetLibrary-assets/" ]
				},
				files : [
					{
						src : "WebServer/Static/AssetLibrary-assets/**/*.js"
					},
					{
						src : "WebServer/Static/AppPages-assets/**/*.js"
					}
				]
			}
		}
	} );

	grunt.loadNpmTasks( "grunt-contrib-copy" );
	grunt.loadNpmTasks( "grunt-contrib-clean" );
	grunt.loadNpmTasks( "grunt-contrib-sass");
	grunt.loadNpmTasks( "grunt-contrib-compass" );
	grunt.loadNpmTasks( "grunt-contrib-less");
	grunt.loadNpmTasks( "grunt-contrib-coffee");
	grunt.loadNpmTasks( "grunt-contrib-stylus");
	grunt.loadNpmTasks( "grunt-contrib-concat" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );
	grunt.loadNpmTasks( "grunt-contrib-htmlmin" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.loadNpmTasks( "grunt-cartero" );

};
