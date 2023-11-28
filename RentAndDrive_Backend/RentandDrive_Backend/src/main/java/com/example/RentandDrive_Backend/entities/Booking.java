package com.example.RentandDrive_Backend.entities;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Entity
public class Booking {
	 @Id
	   @GeneratedValue
	   private long id;
	  private Date startDate;
	  private Date endDate;
	  private long userid;
	  private long carid;
	  private long amount;
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
	public Booking(long id, Date startDate, Date endDate, long userid, long carid, long amount) {
		super();
		this.id = id;
		this.startDate = startDate;
		this.endDate = endDate;
		this.userid = userid;
		this.carid = carid;
		this.amount = amount;
	}
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	  
	  
}
