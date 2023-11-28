package com.example.RentandDrive_Backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.RentandDrive_Backend.entities.Booking;
import com.example.RentandDrive_Backend.entities.BookingData;
import com.example.RentandDrive_Backend.repository.BookingRepository;

@Service
public class BookingServiceClass implements BookingService {
    
	@Autowired
	private BookingRepository bookingrepository;
	
	@Override
	public List<Booking> getBooking() {
		return bookingrepository.findAll();
	}

	@Override
	public Booking addBooking(Booking booking) {
		bookingrepository.save(booking);
		return booking;
	}

	@Override
	public Booking deleteBooking(long id) {
		@SuppressWarnings("deprecation")
		Booking item=bookingrepository.getById(id);
		bookingrepository.delete(item);
		return item;
	}
   
}
