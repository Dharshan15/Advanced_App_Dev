package com.zor.zinquire.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class EnquiryRequest {
    private Long eid;
    private String email;
    private String courseName;
    private String enquiryDescription; 

}