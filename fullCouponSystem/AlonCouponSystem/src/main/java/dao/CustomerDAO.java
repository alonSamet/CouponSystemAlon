package dao;

import java.util.Collection;

import beans.Coupon;
import beans.Customer;
import exceptions.CouponSystemException;

/**
 * This is an interface of The system customer DAO (Data Access Objects) layer,
 * which contains basic CRUD methods
 */
public interface CustomerDAO {

	/**
	 * Login to the system by customer user name & password
	 * 
	 * @param name     username of the customer
	 * @param password password of the customer
	 * @return true (if login succeeded) or false (if login failed)
	 * @throws CouponSystemException
	 */
	boolean login(String name, String password) throws CouponSystemException;

	/**
	 * Creates new customer in the database (db)
	 * 
	 * @param customer {@link Customer}
	 * @throws CouponSystemException
	 */
	void create(Customer customer) throws CouponSystemException;

	/**
	 * Removes customer from the db
	 * 
	 * @param customer {@link Customer}
	 * @throws CouponSystemException
	 */
	void remove(Customer customer) throws CouponSystemException;

	/**
	 * Updates customer in the db
	 * 
	 * @param customer {@link Customer}
	 * @throws CouponSystemException
	 */
	void update(Customer customer) throws CouponSystemException;

	/**
	 * Gets the customer object from db by its id
	 * 
	 * @param customerId id of the requested customer
	 * @return {@link Customer}
	 * @throws CouponSystemException
	 */
	Customer getCustomerById(long customerId) throws CouponSystemException;

	/**
	 * Gets the customer object from db by its name
	 * 
	 * @param customerName name of the requested customer
	 * @return {@link Customer}
	 * @throws CouponSystemException
	 */
	Customer getCustomerByName(String customerName) throws CouponSystemException;

	/**
	 * Gets all customer objects from the db
	 * 
	 * @return collection of customers
	 * @throws CouponSystemException
	 */
	Collection<Customer> getAllCustomers() throws CouponSystemException;

	/**
	 * Gets all coupons of specific customer by its id
	 * 
	 * @param custId id of the customer
	 * @return collection of coupons
	 * @throws CouponSystemException
	 */
	Collection<Coupon> getCustomerCouponsByCustomerId(long customerId) throws CouponSystemException;

}
