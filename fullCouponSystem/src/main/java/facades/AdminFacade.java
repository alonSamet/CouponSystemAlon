package facades;

import java.util.Collection;
import beans.Company;
import beans.Coupon;
import beans.Customer;
import dao.db.CompanyDaoDb;
import dao.db.CouponDaoDb;
import dao.db.CustomerDaoDb;
import exceptions.CouponSystemException;

/**
 * With this admin facade (the layer for the business logic) admin can create,
 * remove and perform various actions relating to companies & customers
 */
public class AdminFacade implements ClientFacade {

	private CompanyDaoDb companyDb;
	private CustomerDaoDb customerDb;
	private CouponDaoDb couponDb;

	public AdminFacade() {
		super();
		companyDb = new CompanyDaoDb();
		customerDb = new CustomerDaoDb();
		couponDb = new CouponDaoDb();
	}

	/**
	 * Admin login with name and password
	 * 
	 * @param name
	 * @param password
	 * @return
	 */
	@Override
	public boolean login(String name, String password) throws CouponSystemException {
		if (name.contains("admin") && password.contains("1234")) {
			return true;
		} else {
			System.out.println("Invalid admin username or password");
			throw new CouponSystemException ("Invalid admin username or password.\nPlease try again");
		}
	}

	/**
	 * Only the admin can create a company user (after check whether the name chosen
	 * for the company is unique or not)
	 * 
	 * @param company
	 * @throws CouponSystemException
	 */
	public void createCompany(Company company) throws CouponSystemException {
		// Check for duplicate company name:
		for (Company c : companyDb.getAllCompanies()) {
			if (c.getName().equals(company.getName())) {
				throw new CouponSystemException("Company name allready exists!");
			}
		}
		companyDb.create(company);
	}

	/**
	 * Erase a company with all her coupons, including those been bought by
	 * customers
	 * 
	 * @param company
	 * @throws CouponSystemException
	 */
	public void removeCompany(Company company) throws CouponSystemException {
		try {
			long companyId = companyDb.getCompanyIdByName(company.getName());
			for (Coupon c : companyDb.getMyCouponsByMyCompanyId(companyId)) {
				couponDb.remove(c);
				System.out.println();
				long id = c.getId();
				companyDb.removeFromCompanyCouponTable(id);
				customerDb.removeFromCustomerCouponTable(id);
			}
			companyDb.remove(company);
			System.out.println("Company removed with its coupons");

		} catch (CouponSystemException e) {
			throw new CouponSystemException("Something went wrong");
		}
	}

	/**
	 * Update email and password only
	 * 
	 * @param company
	 * @throws CouponSystemException
	 */
	public void updateCompany(Company company) throws CouponSystemException {
		Company c;
		try {
			if (companyDb.isCompanyNameExist(company.getName())) {
				long companyId = companyDb.getCompanyIdByName(company.getName());
				c = companyDb.getCompanyById(companyId);
				c.setEmail(company.getEmail());
				c.setPassword(company.getPassword());
				companyDb.update(company);
				System.out.println("Company updated");
			} else {
				throw new CouponSystemException("No company with that name.\nPlease try again");
			}

		} catch (CouponSystemException e) {
			throw new CouponSystemException("Something went wrong");
		}
	}

	/**
	 * Get specific company by id
	 * 
	 * @return
	 * @param id
	 * @throws CouponSystemException
	 */
	public Company getCompanyById(long companyId) throws CouponSystemException {
		return companyDb.getCompanyById(companyId);
	}

	/**
	 * Get specific company by name
	 * 
	 * @return
	 * @param name
	 * @throws CouponSystemException
	 */
	public Company getCompanyByName(String companyName) throws CouponSystemException {
		return companyDb.getCompanyByName(companyName);
	}

	/**
	 * Get all the existing companies
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public Collection<Company> getAllCompanies() throws CouponSystemException {
		return companyDb.getAllCompanies();
	}

	/**
	 * Only the admin can create a customer (have to check if the name chosen for
	 * the customer is unique)
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 */
	public void createCustomer(Customer customer) throws CouponSystemException {
		for (Customer c : customerDb.getAllCustomers()) {
			if (c.getName().equals(customer.getName())) {
				throw new CouponSystemException("Customer allready exists!");
			}
		}
		customerDb.create(customer);
	}

	/**
	 * Remove a customer and all its coupons
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 */
	public void removeCustomer(Customer customer) throws CouponSystemException {

		try {
			long customerId = customerDb.getCustomerIdByName(customer.getName());
			Collection<Coupon> customerCoupons = customerDb.getCustomerCouponsByCustomerId(customerId);
			if (!(customerCoupons.isEmpty())) {
				for (Coupon c : customerCoupons) {
					couponDb.remove(c);
					customerDb.removeFromCustomerCouponTable(c.getId());
				}
			}
			customerDb.remove(customer);
			System.out.println("Customer was removed");

		} catch (CouponSystemException e) {
			throw new CouponSystemException("Something went wrong");
		}
	}

	/**
	 * Update customer password only
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 */
	public void updateCustomer(Customer customer) throws CouponSystemException {
		try {
			if (customerDb.isCustomerNameExist(customer.getName())) {
				long customerId = customerDb.getCustomerIdByName(customer.getName());
				Customer c = customerDb.getCustomerById(customerId);
				c.setPassword(customer.getPassword());
				customerDb.update(c);
				System.out.println("Customer updated");
			} else {
				throw new CouponSystemException("No customer with that name.\nPlease try again");
			}
		} catch (CouponSystemException e) {
			throw new CouponSystemException("Something went wrong");
		}
	}

	/**
	 * Get specific customer by id
	 * 
	 * @param customerId
	 * @return
	 * @throws CouponSystemException
	 */
	public Customer getCustomerById(long customerId) throws CouponSystemException {
		return customerDb.getCustomerById(customerId);
	}

	/**
	 * Get specific customer by name
	 * 
	 * @return
	 * @param name
	 * @throws CouponSystemException
	 */
	public Customer getCustomerByName(String customerName) throws CouponSystemException {
		try {
			return customerDb.getCustomerByName(customerName);

		} catch (CouponSystemException e) {
			throw new CouponSystemException("AdminFacade.getCustomerByName failed", e);
		}
	}

	/**
	 * Get all customers in the system
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public Collection<Customer> getAllCustomers() throws CouponSystemException {
		return customerDb.getAllCustomers();
	}
}
