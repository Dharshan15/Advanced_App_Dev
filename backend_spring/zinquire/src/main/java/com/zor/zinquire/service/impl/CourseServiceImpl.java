package com.zor.zinquire.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zor.zinquire.dto.request.CourseRequest;
import com.zor.zinquire.model.Course;
import com.zor.zinquire.repository.CourseRepository;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class CourseServiceImpl{
    
    private final CourseRepository courseRepo;

    //POST
    public String addCourse(CourseRequest courseRequest) {
        var course=Course.builder()
        .cid(courseRequest.getCid())
        .courseName(courseRequest.getCourseName())
        .courseDescription(courseRequest.getCourseDescription())
        .courseDuration(courseRequest.getCourseDuration())
        .coursePrice(courseRequest.getCoursePrice())
        .build();
        courseRepo.save(course);
        return "Course Added";
    }


  //GETALL
    public List<Course> getAllCourses() {
        
        return courseRepo.findAll();
    }
    //GETBYID
    public Course getCourseByID(Long Id)
    {
        Course course=courseRepo.findByCid(Id);
        if(course!=null)
        {
            return course;
        }
        else
        {
            return null;
        }
    }
    //GET COURSE by NAME
    public List<Course> getCourseByName(String name)
    {
        List<Course> course=courseRepo.findByCourseName(name);
        if(!course.isEmpty())
        {
            return course;
        }
        else
        {
            return null;
        }
    }

    //PUT
    public String editCourse(CourseRequest courseRequest, Long id)
    {
        Course course=courseRepo.findByCid(id);
        if(course!=null)
        {
            var updatedCourse=Course.builder()
            .cid(courseRequest.getCid())
            .courseName(courseRequest.getCourseName())
            .courseDescription(courseRequest.getCourseDescription())
            .courseDuration(courseRequest.getCourseDuration())
            .coursePrice(courseRequest.getCoursePrice())
            .build();
            courseRepo.save(updatedCourse);
            return "Course Updated";
        }
        return "Course does not exits in DB!";
    }

    //DELETE
    public String deleteCourse(Long id)
    {
        Course course=courseRepo.findByCid(id);
        if(course!=null)
        {
            courseRepo.deleteById(id);
            return "Deleted successfully";
        }
        return "Course not found!";
    }
    
}
