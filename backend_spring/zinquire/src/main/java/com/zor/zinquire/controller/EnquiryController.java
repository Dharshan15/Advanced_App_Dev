package com.zor.zinquire.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zor.zinquire.dto.request.EnquiryRequest;
import com.zor.zinquire.model.Enquiry;
import com.zor.zinquire.service.impl.EnquiryServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;





@RestController
@RequestMapping("/api/enquiries")
@RequiredArgsConstructor
@Tag(name = "Enquiries", description = "Endpoints for Enquiries")
public class EnquiryController {

    private final EnquiryServiceImpl enquiryService;

    @PostMapping("/addenquiry")
    @Operation(summary = "Register a new enquiry", description = "Allows Admin to create a enquiry.")
    public String postEnquiry(@RequestBody EnquiryRequest enquiryRequest) {
        return enquiryService.addEnquiry(enquiryRequest);
    }

    @GetMapping("/allenquiries")
    @Operation(summary = "Get all enquiries", description = "Allows all users to get all enquiry.")
    public List<Enquiry> getAllEnquiries() {
        return enquiryService.getAllEnquiries();
    }
    
    @GetMapping("/enquiry/{id}")
    @Operation(summary = "Get a enquiry by ID", description = "Allows all users to get enquiry by Id.")
    public Enquiry getByEnquiryById(@PathVariable Long id) { 
        return enquiryService.getEnquiryByID(id);
    }

    @PutMapping("editenquiry/{id}")
    @Operation(summary = "Edit enquiry", description = "Allows admin users to update a enquiry.")
    public String updateEnquiry(@PathVariable Long id, @RequestBody EnquiryRequest entity) { 
        return enquiryService.editEnquiry(entity, id);
    }

    @DeleteMapping("/deleteenquiry/{id}")
    @Operation(summary = "Delete enquiry", description = "Allows admin users to delete a enquiry.")
    public String deleteEnquiry(@PathVariable Long id, @RequestBody EnquiryRequest entity) {
        return enquiryService.deleteEnquiry(id);
    }
    

}