package com.zor.zinquire.service;

import java.util.Optional;
import com.zor.zinquire.model.Enquiry;

public interface EnquiryService {
    String addEnquiry(EnquiryService enquiryRequest);
    Optional<Enquiry> getAllEnquiries();
    Optional<Enquiry> getEnquiryByID(Long id);


}