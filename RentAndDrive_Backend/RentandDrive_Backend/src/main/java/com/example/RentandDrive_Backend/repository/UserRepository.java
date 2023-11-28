package com.example.RentandDrive_Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.RentandDrive_Backend.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
   @Query("select u from User u where u.email= :email")
   public User getUserbyUsername(@Param("email")String email);
}
