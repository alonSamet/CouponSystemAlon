package dao;

import java.util.Collection;

import beans.Coupon;
import beans.CouponType;
import exceptions.CouponSystemException;

/**
 * This is an interface of The system coupon DAO (Data Access Objects) layer,
 * which contains basic CRUD methods
 */
public interface CouponDAO {

	/**
	 * Creates new coupon in the database 
	 * 
	 * @param {@link Coupon}
	 * @throws CouponSystemException
	 */
	void create(Coupon coupon) throws CouponSystemException;

	/**
	 * Removes coupon from db
	 * 
	 * @param {@link Coupon}
	 * @throws CouponSystemException
	 */
	void remove(Coupon coupon) throws CouponSystemException;

	/**
	 * Updates coupon in db
	 * 
	 * @param {@link Coupon}
	 * @throws CouponSystemException
	 */
	void update(Coupon coupon) throws CouponSystemException;

	/**
	 * Gets the coupon object from db by its id
	 * 
	 * @param couponId id of the coupon to get
	 * @return {@link Coupon}
	 * @throws CouponSystemException
	 */
	Coupon getCouponById(long couponId) throws CouponSystemException;

	/**
	 * Gets all coupon objects from db
	 * 
	 * @return collection of coupons
	 * @throws CouponSystemException
	 */
	Collection<Coupon> getAllCoupons() throws CouponSystemException;

	/**
	 * Gets all coupons by selected coupons type
	 * 
	 * @param coupon_type selected type of the coupons (Enum)
	 * @return collection of coupons
	 * @throws CouponSystemException
	 */
	Collection<Coupon> getCouponsByType(CouponType coupon_type) throws CouponSystemException;

}
