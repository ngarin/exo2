module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "./dist/main.css": "./src/main.scss",
        },
      },
    },
    copy: {
      dist: {
        src: "./src/index.html",
        dest: "./dist/index.html",
      },
      img: {
        expand: true,
        cwd: "src/img/",
        src: ["**/*.{png,jpg,svg}"],
        dest: "dist/img/",
      },
      glide: {
        src: "node_modules/@glidejs/glide/dist/glide.min.js",
        dest: "dist/lib/glide.min.js",
      },
    },
    connect: {
      server: {
        options: {
          open: true,
          port: 8080,
          livereload: 35729,
          hostname: "localhost",
          base: ["dist"],
        },
      },
    },
    watch: {
      options: {
        livereload: 35729,
        directory: "dist",
      },
      sass: {
        files: ["./src/*.scss"],
        tasks: ["sass"],
        options: {
          livereload: 35729,
        },
      },
      html: {
        files: "./src/*.html",
        tasks: ["copy"],
        options: {
          livereload: 35729,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task(s).
  grunt.registerTask("default", ["sass", "copy", "connect", "watch"]);
};
