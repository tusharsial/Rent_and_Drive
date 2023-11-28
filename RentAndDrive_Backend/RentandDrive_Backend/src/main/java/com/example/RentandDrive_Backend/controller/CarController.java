package com.example.RentandDrive_Backend.controller;
import com.example.RentandDrive_Backend.entities.Car;
import com.example.RentandDrive_Backend.services.CarService;
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


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CarController {
	
	@Autowired
	private CarService service;
	
	@GetMapping("/home")
	public String home()
	{
		return "Welcome to RentAndDrive";
	}
	@GetMapping("/cars")
	public List<Car> getCars()
	{
		return service.getCars();
	}
	@GetMapping("/cars/{carId}")
	public Optional<Car> getCar(@PathVariable String carId)
	{
		return service.getCar(Long.parseLong(carId));
	}
	
	@PutMapping("/cars")
	public Car UpdateCar(@RequestBody Car car) {
		return service.updateCar(car);
	}
	@PostMapping("/cars")
	public Car AddCar(@RequestBody Car car)
	{
		return this.service.addCar(car);
	}
	@DeleteMapping("/cars/{carID}")
	public Car DeleteCar(@PathVariable String carID)
	{
		return this.service.deleteCar(Long.parseLong(carID));
	}
	
}
