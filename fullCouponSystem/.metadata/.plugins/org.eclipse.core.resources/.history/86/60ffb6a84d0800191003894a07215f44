package dao;

import java.util.Collection;

import beans.Company;
import beans.Coupon;
import exceptions.CouponSystemException;

/**
 * The Dao layer contains only the signature of the methods
 */

public interface CompanyDAO {
	
	void create(Company company) throws CouponSystemException;
	
	void remove(Company company) throws CouponSystemException;

	void update(Company company) throws CouponSystemException;
	
	boolean login(String name, String password) throws CouponSystemException;
	
	Company getCompanyById(long id) throws CouponSystemException;
	
	Company getCompanyByName(String companyName) throws CouponSystemException;
			
	Collection<Company> getAllCompanies() throws CouponSystemException;
	
	Collection<Coupon> getMyCouponsByMyCompanyId(long compId) throws CouponSystemException;
	
}




