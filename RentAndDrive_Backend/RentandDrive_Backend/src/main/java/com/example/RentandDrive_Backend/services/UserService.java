package com.example.RentandDrive_Backend.services;

import java.util.List;
import java.util.Optional;

import com.example.RentandDrive_Backend.entities.User;

public interface UserService {

	public Optional<User> getUser(long id);
	public User getUserbyemail(String email);
    public User addUser(User user);
}
