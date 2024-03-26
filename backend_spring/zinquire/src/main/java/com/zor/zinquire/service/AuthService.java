package com.zor.zinquire.service;

import com.zor.zinquire.dto.request.LoginRequest;
import com.zor.zinquire.dto.request.RegisterRequest;
import com.zor.zinquire.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
}
