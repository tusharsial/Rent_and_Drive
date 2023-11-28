package com.example.RentandDrive_Backend.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BookingData {
	@Id
	private long id;
	  private Date startDate;
	  private Date endDate;
	  private long userid;
	  private long carid;
	  private long amount;
	  private String image;
	  private long capacity;
	  private String name;
		private String email;
		private String mobile;
		public BookingData() {
			super();
			// TODO Auto-generated constructor stub
		}
		public BookingData(long id, Date startDate, Date endDate, long userid, long carid, long amount, String image,
				long capacity, String name, String email, String mobile) {
			super();
			this.id = id;
			this.startDate = startDate;
			this.endDate = endDate;
			this.userid = userid;
			this.carid = carid;
			this.amount = amount;
			this.image = image;
			this.capacity = capacity;
			this.name = name;
			this.email = email;
			this.mobile = mobile;
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public Date getStartDate() {
			return startDate;
		}
		public void setStartDate(Date startDate) {
			this.startDate = startDate;
		}
		public Date getEndDate() {
			return endDate;
		}
		public void setEndDate(Date endDate) {
			this.endDate = endDate;
		}
		public long getUserid() {
			return userid;
		}
		public void setUserid(long userid) {
			this.userid = userid;
		}
		public long getCarid() {
			return carid;
		}
		public void setCarid(long carid) {
			this.carid = carid;
		}
		public long getAmount() {
			return amount;
		}
		public void setAmount(long amount) {
			this.amount = amount;
		}
		public String getImage() {
			return image;
		}
		public void setImage(String image) {
			this.image = image;
		}
		public long getCapacity() {
			return capacity;
		}
		public void setCapacity(long capacity) {
			this.capacity = capacity;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getMobile() {
			return mobile;
		}
		public void setMobile(String mobile) {
			this.mobile = mobile;
		}
		
}