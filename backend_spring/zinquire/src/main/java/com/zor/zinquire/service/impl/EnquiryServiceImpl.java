package com.zor.zinquire.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zor.zinquire.dto.request.EnquiryRequest;
import com.zor.zinquire.model.Enquiry;
import com.zor.zinquire.repository.EnquiryRepository;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class EnquiryServiceImpl{
    
    private final EnquiryRepository enquiryRepo;


    public String addEnquiry(EnquiryRequest enquiryRequest) {
        var enquiry=Enquiry.builder()
        .eid(enquiryRequest.getEid())
        .email(enquiryRequest.getEmail())
        .courseName(enquiryRequest.getCourseName())
        .enquiryDescription(enquiryRequest.getEnquiryDescription())
        .build();
        enquiryRepo.save(enquiry);
        return "Enquiry Added";
    }


    public List<Enquiry> getAllEnquiries() {
        
        return enquiryRepo.findAll();
    }

    public Enquiry getEnquiryByID(Long Id)
    {
        Enquiry enquiry=enquiryRepo.findByEid(Id);
        if(enquiry!=null)
        {
            return enquiry;
        }
        else
        {
            return null;
        }
    }

    public String editEnquiry(EnquiryRequest enquiryRequest, Long id)
    {
        Enquiry enquiry=enquiryRepo.findByEid(id);
        if(enquiry!=null)
        {
            var updatedEnquiry=Enquiry.builder()
            .eid(enquiryRequest.getEid())
            .email(enquiryRequest.getEmail())
            .courseName(enquiryRequest.getCourseName())
            .enquiryDescription(enquiryRequest.getEnquiryDescription())
            .build();
            enquiryRepo.save(updatedEnquiry);
            return "Enquiry Updated";
        }
        return "Enquiry does not exits";
    }

    public String deleteEnquiry(Long id)
    {
        Enquiry enquiry=enquiryRepo.findByEid(id);
        if(enquiry!=null)
        {
            enquiryRepo.deleteById(id);
            return "Deleted successfully";
        }
        return "Enquiry not found!";
    }
    
}
