package com.example.RentandDrive_Backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.RentandDrive_Backend.entities.User;
import com.example.RentandDrive_Backend.repository.UserRepository;


@Service
public class UserServiceClass implements UserService {

	@Autowired
	private UserRepository userRepository;
	@Override
	public Optional<User> getUser(long id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id);
	}
	@Override
	public User getUserbyemail(String email) {
		// TODO Auto-generated method stub
		return userRepository.getUserbyUsername(email);
	}

	@Override
	public User addUser(User user) {
		userRepository.save(user);
		return user;
	}

}
