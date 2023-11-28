package com.example.RentandDrive_Backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.RentandDrive_Backend.entities.Booking;
import com.example.RentandDrive_Backend.entities.BookingData;



public interface BookingRepository extends JpaRepository<Booking,Long>{
//	@Query("SELECT NEW com.example.RentandDrive_Backend.entities.BookingData(t1.id, t1.startDate,t1.endDate,t1.userid,t1.carid,t1.amount,t2.image,t2.capacity, t3.name,t3.email,t3.mobile FROM Booking t1 " +
//	           "JOIN CarDetails t2 ON t1.carid = t2.id " +
//	           "JOIN User t3 ON t1.userid = t3.id)")
//    List<BookingData> getBookingData();
}
