package com.guidehub.GuideHub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.guidehub.GuideHub.model.User;


public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
