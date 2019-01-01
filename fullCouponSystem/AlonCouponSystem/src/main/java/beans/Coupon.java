package beans;

import java.io.Serializable;
import java.util.Date;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author Alon Samet
 * 
 *         This class generates the coupon object, which has id, title, start
 *         date, end (expiration) date, amount (of coupons left), coupon type,
 *         message (coupon details), price and an image of the coupon.
 *
 */
@SuppressWarnings("serial")
@XmlRootElement
public class Coupon implements Serializable {

	private long id;
	private String title;
	private java.util.Date startDate;
	private java.util.Date endDate;
	private int amount;
	private CouponType couponType;// Enom
	private String message;
	private double price;
	private String image;

	/*
	 * Empty coupon CTOR
	 */
	public Coupon() {
	}

	/**
	 * This CTOR sets the coupon class fields - including the id field - to those
	 * sent when an instance of the object is created
	 */
	public Coupon(long id, String title, Date startDate, Date endDate, int amount, CouponType couponType,
			String message, double price, String image) {
		super();
		this.id = id;
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.couponType = couponType;
		this.message = message;
		this.price = price;
		this.image = image;
	}

	/**
	 * This CTOR sets the coupon class fields - not including the id field, that is
	 * been automatically generated in the db - to those sent when an instance of
	 * the object is created
	 */
	public Coupon(String title, Date startDate, Date endDate, int amount, CouponType couponType, String message,
			double price, String image) {
		super();
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.couponType = couponType;
		this.message = message;
		this.price = price;
		this.image = image;
	}

	/**
	 * @return id of the coupon
	 */
	public long getId() {
		return id;
	}

	/**
	 * Updates new id for the coupon. After a new coupon is created, an id is
	 * automatically generatad in the db, and the coupon id is been updated by this
	 * method
	 * 
	 * @param id
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return title of the coupon
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * Updates new title for the coupon
	 * 
	 * @param title title of the coupon
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return start date of the coupon (the date the coupon was created)
	 */
	public java.util.Date getStartDate() {
		return startDate;
	}

	/**
	 * Updates new start date for the coupon
	 * 
	 * @param startDate start date of the coupon (the date the coupon was created)
	 */
	public void setStartDate(java.util.Date startDate) {
		this.startDate = startDate;
	}

	/**
	 * @return end date (the expiration date) for the coupon 
	 */
	public java.util.Date getEndDate() {
		return endDate;
	}

	/**
	 * Updates new end date for the coupon
	 * 
	 * @param endDate end date of the coupon (the expiration date of the coupon)
	 */
	public void setEndDate(java.util.Date endDate) {
		this.endDate = endDate;
	}

	/**
	 * @return amount of the coupons left in the company balance
	 */
	public int getAmount() {
		return amount;
	}

	/**
	 * Updates new amount for the coupon
	 * 
	 * @param amount amount of the coupons left in the company balance
	 */
	public void setAmount(int amount) {
		this.amount = amount;
	}

	/**
	 * @return the type of the coupon (as Enum)
	 */
	public CouponType getCouponType() {
		return couponType;
	}

	/**
	 * Updates new coupon type
	 * 
	 * @param CouponType (Enum) the type of the coupon
	 */
	public void setCouponType(CouponType couponType) {
		this.couponType = couponType;
	}

	/**
	 * @return details about the coupon
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * Updates new message (details) of the coupon
	 * 
	 * @param message details about the coupon
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * @return price of the coupon
	 */
	public double getPrice() {
		return price;
	}

	/**
	 * Updates new price for the coupon
	 * 
	 * @param price price of the coupon
	 */
	public void setPrice(double price) {
		this.price = price;
	}

	/**
	 * @return an image of the coupon
	 */
	public String getImage() {
		return image;
	}

	/**
	 * Updates new image of the coupon
	 * 
	 * @param image an image of the coupon
	 */
	public void setImage(String image) {
		this.image = image;
	}

	/**
	 * Generates a string representation of the coupon object with all its fields
	 */
	@Override
	public String toString() {
		return "Coupon [id=" + id + ", title=" + title + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", amount=" + amount + ", couponType=" + couponType + ", message=" + message + ", price=" + price
				+ ", image=" + image + "]";
	}
}
