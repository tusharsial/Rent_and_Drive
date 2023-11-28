package com.example.RentandDrive_Backend.services;
import com.example.RentandDrive_Backend.entities.CarDetails;
import java.util.List;
import java.util.Optional;

public interface CarDetailsService {
     public List<CarDetails> getCarDetails(long id);
     public CarDetails addCarDetails(CarDetails car);
     public Optional<CarDetails> getCarDetailsbyId(long id);
     public CarDetails updateCarDetails(CarDetails car);
}