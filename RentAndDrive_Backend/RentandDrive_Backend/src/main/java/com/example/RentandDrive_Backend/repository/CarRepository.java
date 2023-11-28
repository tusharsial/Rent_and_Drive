package com.example.RentandDrive_Backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.RentandDrive_Backend.entities.Car;


public interface CarRepository extends JpaRepository<Car,Long> {

}
