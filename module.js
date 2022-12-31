var Student = (function () {
    var Courses = (function () {
        var name = "courses";
        var courseName = function (name) {
            return `Student Enrolled on ${name} courses.`
        }
        return {
            courseName
        };
    }());
    var Result = (function () {
        var result = "GPA";
        var showResult = function (result) {
            return `Student Got ${result} GPA.`
        }
        return {
            showResult
        };
    }());
    return {
        Courses,
        Result
    };
}());
console.log(Student.Courses.courseName("React js"));
console.log(Student.Result.showResult("3.76"))