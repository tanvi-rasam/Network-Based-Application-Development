/* @nanajjar */

var course = function(cid, t, tm, ins){
var courseModel = {courseID:cid, title:t, term:tm, instructor:ins};
return courseModel;
};


module.exports.course = course;