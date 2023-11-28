package com.example.RentandDrive_Backend.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Entity
public class CarDetails {
	public CarDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	@GeneratedValue
	private long id;
	private long carid;
	private long cost;
	private String image;
	private long mileage;
	private boolean availability;
	private long area_code;
	private long capacity;
	public CarDetails(long id, long carid, long cost, String image, long mileage, boolean availability, long area_code,
			long capacity) {
		super();
		this.id = id;
		this.carid = carid;
		this.cost = cost;
		this.image = image;
		this.mileage = mileage;
		this.availability = availability;
		this.area_code = area_code;
		this.capacity = capacity;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getCarid() {
		return carid;
	}
	public void setCarid(long carid) {
		this.carid = carid;
	}
	public long getCost() {
		return cost;
	}
	public void setCost(long cost) {
		this.cost = cost;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public long getMileage() {
		return mileage;
	}
	public void setMileage(long mileage) {
		this.mileage = mileage;
	}
	public boolean isAvailability() {
		return availability;
	}
	public void setAvailability(boolean availability) {
		this.availability = availability;
	}
	public long getArea_code() {
		return area_code;
	}
	public void setArea_code(long area_code) {
		this.area_code = area_code;
	}
	public long getCapacity() {
		return capacity;
	}
	public void setCapacity(long capacity) {
		this.capacity = capacity;
	}
	@Override
	public String toString() {
		return "CarDetails [id=" + id + ", carid=" + carid + ", cost=" + cost + ", image=" + image + ", mileage="
				+ mileage + ", availability=" + availability + ", area_code=" + area_code + ", capacity=" + capacity
				+ "]";
	}
	
	
	
	
}
