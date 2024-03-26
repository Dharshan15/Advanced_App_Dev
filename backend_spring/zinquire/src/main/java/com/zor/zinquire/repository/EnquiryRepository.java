package com.zor.zinquire.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zor.zinquire.model.Enquiry;


public interface EnquiryRepository extends JpaRepository<Enquiry,Long> {
    public Enquiry findByEid(Long eid);
}
