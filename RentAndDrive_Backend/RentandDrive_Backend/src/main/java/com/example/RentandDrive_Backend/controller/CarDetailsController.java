package com.example.RentandDrive_Backend.controller;
import com.example.RentandDrive_Backend.entities.CarDetails;
import com.example.RentandDrive_Backend.services.CarDetailsService;


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
public class CarDetailsController {
	@Autowired
	private CarDetailsService service;
	
	@GetMapping("/cardetails/{carid}")
	public List<CarDetails> getCars(@PathVariable String carid)
	{
		return service.getCarDetails(Long.parseLong(carid));
	}
	
	@PutMapping("/cardetails")
	public CarDetails UpdateCar(@RequestBody CarDetails car) {
		return service.updateCarDetails(car);
	}
	@PostMapping("/cardetails")
	public CarDetails AddCar(@RequestBody CarDetails car)
	{
		return this.service.addCarDetails(car);
	}
	@GetMapping("/cardetailsbyId/{carID}")
	public Optional<CarDetails> DeleteCar(@PathVariable String carID)
	{
		return this.service.getCarDetailsbyId(Long.parseLong(carID));
	}
}
