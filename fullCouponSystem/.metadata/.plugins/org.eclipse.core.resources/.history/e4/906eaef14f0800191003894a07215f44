package dao;

import java.util.Collection;
import beans.Coupon;
import beans.CouponType;
import exceptions.CouponSystemException;

/**
 * The Dao layer contains only the signature of the methods
 */

public interface CouponDAO {
	
	void create(Coupon coupon) throws CouponSystemException;
	
	void remove(Coupon coupon) throws CouponSystemException;

	void update(Coupon coupon) throws CouponSystemException;
		
	Coupon getCouponById(long couponId) throws CouponSystemException;
			
	Collection<Coupon> getAllCoupons() throws CouponSystemException;
	
	Collection<Coupon> getCouponsByType(CouponType coupon_type) throws CouponSystemException;
	
}




