package com.zor.zinquire.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zor.zinquire.model.User;

public interface UserRepo extends JpaRepository<User,Long> {

    Optional<User> findByEmail(String email);

}
