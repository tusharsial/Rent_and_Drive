package com.example.RentandDrive_Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.RentandDrive_Backend.entities.Booking;
import com.example.RentandDrive_Backend.entities.BookingData;
import com.example.RentandDrive_Backend.services.BookingService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookingController {
  
	@Autowired
	private BookingService service;
	 
	@GetMapping("/bookings")
	public List<Booking> getBookings()
	{
		return service.getBooking();
	}
	
	@PostMapping("/bookings")
	public Booking AddBooking(@RequestBody Booking booking)
	{
		return this.service.addBooking(booking);
	}
	@DeleteMapping("/bookings/{bookingID}")
	public Booking DeleteBooking(@PathVariable String bookingID)
	{
		return this.service.deleteBooking(Long.parseLong(bookingID));
	}
	
}
