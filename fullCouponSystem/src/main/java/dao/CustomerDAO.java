package dao;

import java.util.Collection;

import beans.Coupon;
import beans.Customer;
import exceptions.CouponSystemException;

/**
 * The Dao layer contains only the signature of the methods
 */

public interface CustomerDAO {
	
	void create(Customer customer) throws CouponSystemException;
	
	void remove(Customer customer) throws CouponSystemException;

	void update(Customer customer) throws CouponSystemException;
	
	boolean login(String name, String password) throws CouponSystemException;
	
	Customer getCustomerById(long id) throws CouponSystemException;
			
	Customer getCustomerByName(String customerName) throws CouponSystemException;
	
	Collection<Customer> getAllCustomers() throws CouponSystemException;
	
	Collection<Coupon> getCustomerCouponsByCustomerId(long custId) throws CouponSystemException;
	
}




