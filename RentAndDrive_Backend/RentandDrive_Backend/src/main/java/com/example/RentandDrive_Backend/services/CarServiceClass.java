package com.example.RentandDrive_Backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.RentandDrive_Backend.entities.Car;
import com.example.RentandDrive_Backend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class CarServiceClass implements CarService {

	@Autowired
	private CarRepository carRepository;
	@Override
	public List<Car> getCars() {
		// TODO Auto-generated method stub
		return carRepository.findAll();
	}
    
	@Override
	public Car addCar(Car car) {
		carRepository.save(car);
		return car;
	}

	@Override
	public Car deleteCar(long id) {
		@SuppressWarnings("deprecation")
		Car item=carRepository.getById(id);
		carRepository.delete(item);
		return item;
	}

	@Override
	public Car updateCar(Car car) {
		//carRepository.save(car);
		return car;
	}

	@Override
	public Optional<Car> getCar(long id) {
		
		return carRepository.findById(id);
	}

}
