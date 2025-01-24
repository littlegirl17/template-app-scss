const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("styles", function () {
  return gulp
    .src("scss/**/*.scss") // Chọn tất cả file SCSS
    .pipe(sass().on("error", sass.logError)) // Biên dịch SCSS
    .pipe(cleanCSS()) // Nén CSS
    .pipe(rename({ suffix: ".min" })) // Đổi tên file
    .pipe(gulp.dest("css")); // Lưu vào thư mục css
});

gulp.task("watch", function () {
  gulp.watch("scss/**/*.scss", gulp.series("styles")); // Theo dõi thay đổi SCSS
});

gulp.task("default", gulp.series("styles", "watch")); // Lệnh mặc định

/*tôi đang làm 1 web,  thay vì làm bằng html css, thì tôi lại làm html scss (sẽ có nhiều file scss ví dụ sẽ có header.scss, footer.scss ..... và khi link ở html toi sẽ nén tất cả các file scss đó thành file min.css, và khi toi chạy lưu scss thì chỉ cần chạy lệnh gulp là lưu các lệnh scss tại các file cua nó*/
