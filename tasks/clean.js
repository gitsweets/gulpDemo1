const gulp = require('gulp'),
      clean = require('gulp-clean'),
      config = require('../config').build;

gulp.task('clean', function () {
    console.log("清理"+ config +"目录完成...");
    // return 清楚干净后的数据流(Stream)
    return gulp.src(config, {read: false})
        .pipe(clean({force: true}));
});