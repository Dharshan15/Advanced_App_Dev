package com.zor.zinquire.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.zor.zinquire.model.Course;
import java.util.List;


public interface CourseRepository extends JpaRepository<Course,Long> {
    public Course findByCid(Long cid);
    public List<Course> findByCourseName(String courseName);
}
