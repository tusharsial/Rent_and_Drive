package com.example.RentandDrive_Backend.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Entity
public class Car {
   @Id
   @GeneratedValue
   private long id;
   private String model;
   private String brand;
public Car(long id, String model, String brand) {
	super();
	this.id = id;
	this.model = model;
	this.brand = brand;
}
public Car() {
	super();
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getModel() {
	return model;
}
public void setModel(String model) {
	this.model = model;
}
public String getBrand() {
	return brand;
}
public void setBrand(String brand) {
	this.brand = brand;
}
@Override
public String toString() {
	return "Car [id=" + id + ", model=" + model + ", brand=" + brand + "]";
}
   
}
