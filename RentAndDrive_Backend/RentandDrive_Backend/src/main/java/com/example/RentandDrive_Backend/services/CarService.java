package com.example.RentandDrive_Backend.services;
import com.example.RentandDrive_Backend.entities.Car;
import java.util.List;
import java.util.Optional;

public interface CarService {
     public List<Car> getCars();
     public Optional<Car> getCar(long id);
     public Car addCar(Car car);
     public Car deleteCar(long id);
     public Car updateCar(Car car);
}
