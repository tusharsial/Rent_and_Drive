package com.example.RentandDrive_Backend.services;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.RentandDrive_Backend.entities.CarDetails;
import com.example.RentandDrive_Backend.repository.CarDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class CarDetailsServiceClass implements CarDetailsService {

	@Autowired
	private CarDetailsRepository carRepository;
	@Override
	public List<CarDetails> getCarDetails(long carid) {
		// TODO Auto-generated method stub
		return carRepository.findBycarid(carid);
	}

	@Override
	public CarDetails addCarDetails(CarDetails car) {
		carRepository.save(car);
		return car;
	}

	@Override
	public Optional<CarDetails> getCarDetailsbyId(long id) {
		return carRepository.findById(id);
		
	}

	@Override
	public CarDetails updateCarDetails(CarDetails car) {
		carRepository.save(car);
		return car;
	}

}
