package dao;

import java.util.Collection;

import beans.Company;
import beans.Coupon;
import exceptions.CouponSystemException;

/**
 * This is an interface of The system company DAO (Data Access Objects) layer,
 * which contains basic CRUD methods
 */
public interface CompanyDAO {

	/**
	 * Login to the system by company user name & password
	 * 
	 * @param name     username of the company
	 * @param password password of the company
	 * @return true (login succeeded) or false (login failed)
	 * @throws CouponSystemException
	 */
	boolean login(String name, String password) throws CouponSystemException;

	/**
	 * Creates new company in the database (db)
	 * 
	 * @param {@link Company}
	 * @throws CouponSystemException
	 */
	void create(Company company) throws CouponSystemException;

	/**
	 * Removes company from the db
	 * 
	 * @param {@link Company}
	 * @throws CouponSystemException
	 */
	void remove(Company company) throws CouponSystemException;

	/**
	 * Updates company in the db
	 * 
	 * @param {@link Company}
	 * @throws CouponSystemException
	 */
	void update(Company company) throws CouponSystemException;

	/**
	 * Gets the company object from db by its id
	 * 
	 * @param companyId id of the company to get
	 * @return {@link Company}
	 * @throws CouponSystemException
	 */
	Company getCompanyById(long companyId) throws CouponSystemException;

	/**
	 * Gets the company object from db by its name
	 * 
	 * @param companyName name of the company to get
	 * @return {@link Company}
	 * @throws CouponSystemException
	 */
	Company getCompanyByName(String companyName) throws CouponSystemException;

	/**
	 * Gets all company objects from the db
	 * 
	 * @return collection of companies
	 * @throws CouponSystemException
	 */
	Collection<Company> getAllCompanies() throws CouponSystemException;

	/**
	 * Gets all coupons of specific company by its id
	 * 
	 * @param compId id of the company
	 * @return collection of coupons
	 * @throws CouponSystemException
	 */
	Collection<Coupon> getMyCouponsByMyCompanyId(long compId) throws CouponSystemException;

}
