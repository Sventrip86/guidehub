package com.guidehub.GuideHub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.guidehub.GuideHub.repository.UserRepository;
import com.guidehub.GuideHub.model.User;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void signUp(User user) {
        // Here you might want to encode the password
        userRepository.save(user);
    }

    // ... other methods ...
}
