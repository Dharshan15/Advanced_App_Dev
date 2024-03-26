package com.zor.zinquire.service;

import java.util.Optional;

import com.zor.zinquire.dto.request.CourseRequest;
import com.zor.zinquire.model.Course;

public interface CourseService {
    String addCourse(CourseRequest courseRequest);
    Optional<Course> getAllCourses();
    Optional<Course> getCourseByID(Long id);


}
