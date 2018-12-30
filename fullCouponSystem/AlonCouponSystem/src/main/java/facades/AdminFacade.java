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
 * With the admin (administrator) facade - the layer for the business logic -
 * the administrator can create, remove and perform various actions relating to
 * companies & customers
 */
public class AdminFacade implements ClientFacade {

	private CompanyDaoDb companyDb;
	private CustomerDaoDb customerDb;
	private CouponDaoDb couponDb;

	/**
	 * This CTOR instantiates the company, customer & coupon DaoDb layer, in order
	 * to allow access to its methods. There are no SQL commands in the facade layer
	 */
	public AdminFacade() {
		super();
		companyDb = new CompanyDaoDb();
		customerDb = new CustomerDaoDb();
		couponDb = new CouponDaoDb();
	}

	/**
	 * Login to the system by administrator username & password
	 * 
	 * @param name     username of administrator
	 * @param password of administrator
	 * @return true (if login succeeded) or false (if login failed)
	 */
	@Override
	public boolean login(String name, String password) throws CouponSystemException {
		if (name.contains("admin") && password.contains("1234")) {
			return true;
		} else {
			System.out.println("Invalid admin username or password");
			throw new CouponSystemException("Invalid admin username or password.\nPlease try again");
		}
	}

	/**
	 * Creates new company. Only the admin can create new company, after validation
	 * whether the name that has been chosen for this company is unique
	 * 
	 * @param {@link Company}
	 * @throws CouponSystemException
	 */
	public void createCompany(Company company) throws CouponSystemException {
		// Check for duplicate company name:
		if (companyDb.isCompanyNameExist(company.getName())) {
			throw new CouponSystemException("Company name allready exists!");
		}
		companyDb.create(company);
	}

	/**
	 * Removes a company with all its coupons, including coupons that have been
	 * bought by customers
	 * 
	 * @param {@link Company}
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
	 * Updates company email & password only
	 * 
	 * @param {@link Company}
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
	 * Gets a company object by its id
	 * 
	 * @return {@link Company}
	 * @param companyId id of the requested company
	 * @throws CouponSystemException
	 */
	public Company getCompanyById(long companyId) throws CouponSystemException {
		Company company = companyDb.getCompanyById(companyId);
		return company;
	}

	/**
	 * Gets a specific company by its name
	 * 
	 * @return {@link Company}
	 * @param companyName the name of the requested company
	 * @throws CouponSystemException
	 */
	public Company getCompanyByName(String companyName) throws CouponSystemException {
		Company company = companyDb.getCompanyByName(companyName);
		return company;
	}

	/**
	 * Gets all the existing companies in the db
	 * 
	 * @return collection of companies
	 * @throws CouponSystemException
	 */
	public Collection<Company> getAllCompanies() throws CouponSystemException {
		Collection<Company> companies = companyDb.getAllCompanies();
		return companies;
	}

	/**
	 * Creates new customer. Only the admin can create new customer, after
	 * validation whether the name that has been chosen for this customer is unique
	 * 
	 * @param {@link Customer}
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
	 * Removes a customer with all its coupons
	 * 
	 * @param {@link Customer}
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
	 * Updates customer password only
	 * 
	 * @param {@link Customer}
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
	 * Gets a customer object by its id
	 * 
	 * @return {@link Customer}
	 * @param customerId id of the requested customer
	 * @throws CouponSystemException
	 */
	public Customer getCustomerById(long customerId) throws CouponSystemException {
		Customer customer = customerDb.getCustomerById(customerId);
		return customer;
	}

	/**
	 * Gets a specific customer by its name
	 * 
	 * @return {@link Customer}
	 * @param customerName the name of the requested customer
	 * @throws CouponSystemException
	 */
	public Customer getCustomerByName(String customerName) throws CouponSystemException {
		Customer customer = customerDb.getCustomerByName(customerName);
		return customer;
	}

	/**
	 * Gets all the existing customers in the db
	 * 
	 * @return collection of customers
	 * @throws CouponSystemException
	 */
	public Collection<Customer> getAllCustomers() throws CouponSystemException {
		Collection<Customer> customers = customerDb.getAllCustomers();
		return customers;
	}
}
