package com.example.RentandDrive_Backend.services;

import java.util.List;

import com.example.RentandDrive_Backend.entities.Booking;
import com.example.RentandDrive_Backend.entities.BookingData;

public interface BookingService {
	
	public List<Booking> getBooking();
    public Booking addBooking(Booking booking);
    public Booking deleteBooking(long id);

}
