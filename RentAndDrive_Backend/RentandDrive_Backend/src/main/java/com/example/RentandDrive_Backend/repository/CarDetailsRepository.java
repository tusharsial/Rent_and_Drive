package com.example.RentandDrive_Backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.RentandDrive_Backend.entities.CarDetails;
public interface CarDetailsRepository extends JpaRepository<CarDetails,Long> {
	 List<CarDetails> findBycarid(long carid);
}
