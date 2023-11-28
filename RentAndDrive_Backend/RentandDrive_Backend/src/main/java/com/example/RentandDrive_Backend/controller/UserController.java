package com.example.RentandDrive_Backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.RentandDrive_Backend.entities.User;
import com.example.RentandDrive_Backend.services.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	
	@GetMapping("/usersbyid/{userId}")
	public Optional<User> getAllUsers(@PathVariable String userId)
	{
		return service.getUser(Long.parseLong(userId));
	}
	
	@GetMapping("/users/{email}")
	public User getUser(@PathVariable String email)
	{
		return service.getUserbyemail(email);
	}
	@PostMapping("/users")
	public User AddUser(@RequestBody User user)
	{
		return this.service.addUser(user);
	}
	
}
