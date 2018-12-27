package facades;

import java.util.ArrayList;
import java.util.Collection;
import beans.Company;
import beans.Coupon;
import beans.CouponType;
import dao.db.CompanyDaoDb;
import dao.db.CouponDaoDb;
import dao.db.CustomerDaoDb;
import exceptions.CouponSystemException;

/**
 * With the company facade - the layer for the business logic - the company can
 * create, remove and perform various actions relating to its details & coupons.
 * There are no SQL commands in the facade layer
 */
public class CompanyFacade implements ClientFacade {

	private CouponDaoDb couponDb;
	private CompanyDaoDb companyDb;
	private CustomerDaoDb customerDb;

	// This variable will be initialized to the loggedIn company id (in login
	// method)
	private long LoggedIncompanyId;

	/**
	 * This CTOR instantiates the company, customer & coupon DaoDb layer, in order
	 * to allow access to its methods
	 */
	public CompanyFacade() {
		super();
		couponDb = new CouponDaoDb();
		companyDb = new CompanyDaoDb();
		customerDb = new CustomerDaoDb();
	}

	/**
	 * Login to the system by company username & password
	 * 
	 * @param name     username of company
	 * @param password password of company
	 * @return true (if login succeeded) or false (if login failed)
	 */
	@Override
	public boolean login(String name, String password) throws CouponSystemException {
		if (companyDb.login(name, password)) {
			// Initialization of the variable LoggedIncompanyId:
			this.LoggedIncompanyId = companyDb.getCompanyIdByName(name);
			return true;
		} else {
			System.out.println("Invalid company username or password");
			throw new CouponSystemException("Invalid company username or password.\nPlease try again");
		}
	}

	/**
	 * Adds new coupon to the loggedIn company, after a validation that the coupon
	 * title is unique
	 * 
	 * @param {{@link Coupon}
	 * @throws CouponSystemException
	 */
	public void createCoupon(Coupon coupon) throws CouponSystemException {
		for (Coupon c : couponDb.getAllCoupons()) {
			// Validation that the coupon title is unique
			if (c.getTitle().equals(coupon.getTitle())) {
				throw new CouponSystemException(
						"Your company already has a coupon with the same title.\nPlease choose other title");
			}
		}
		couponDb.create(coupon);
		companyDb.addToCompanyCouponTable(coupon.getId(), LoggedIncompanyId);
		System.out.println("The new coupon \"" + coupon.getTitle() + "\" was created in coupon & join table");
	}

	/**
	 * Removes selected coupon from coupon table, CompanyCoupon Table &
	 * CustomerCouponTable
	 * 
	 * @param {{@link Coupon}
	 * @throws CouponSystemException
	 */
	public void removeCoupon(Coupon coupon) throws CouponSystemException {
		long couponId = couponDb.getCouponIdByTitle(coupon.getTitle());
		if (couponDb.isCouponBelongsToLoggedInCompany(LoggedIncompanyId, couponId)) {
			couponDb.remove(coupon);
			companyDb.removeFromCompanyCouponTable(couponId);
			customerDb.removeFromCustomerCouponTable(couponId);
			System.out.println("Coupon was removed");
		} else {
			throw new CouponSystemException("This coupon does not belong to your company.\nPlease try again");
		}
	}

	/**
	 * Updates coupon price & end (expiration) date only
	 * 
	 * @param {@link Coupon}
	 * @throws CouponSystemException
	 */
	public void updateCoupon(Coupon coupon) throws CouponSystemException {
		if (couponDb.isCouponTitleExist(coupon)) {
			long couponId = couponDb.getCouponIdByTitle(coupon.getTitle());
			if (couponDb.isCouponBelongsToLoggedInCompany(LoggedIncompanyId, couponId)) {
				Coupon c = couponDb.getCouponById(couponId);
				c.setEndDate(coupon.getEndDate());
				c.setPrice(coupon.getPrice());
				couponDb.update(c);
				System.out.println("End date & price were updated");
			}
		}
	}

	/**
	 * Gets a coupon of the loggedIn company by its id
	 * 
	 * @param couponId the id of the coupon
	 * @return {@link Coupon}
	 * @throws CouponSystemException
	 */
	public Coupon getMyCouponById(long couponId) throws CouponSystemException {
		if (couponDb.isCouponBelongsToLoggedInCompany(LoggedIncompanyId, couponId)) {
			Coupon coupon = couponDb.getCouponById(couponId);
			return coupon;
		} else {
			throw new CouponSystemException("Your company does not have coupon with this id.\n\nPlease try again");
		}
	}

	/**
	 * Gets a coupon of the loggedIn company by its title
	 * 
	 * @param couponTitle the title of the coupon
	 * @return {@link Coupon}
	 * @throws CouponSystemException
	 */
	public Coupon getMyCouponByTitle(String couponTitle) throws CouponSystemException {
		long couponId = couponDb.getCouponIdByTitle(couponTitle);
		if (couponDb.isCouponBelongsToLoggedInCompany(LoggedIncompanyId, couponId)) {
			Coupon coupon = couponDb.getCouponById(couponId);
			return coupon;
		} else {
			throw new CouponSystemException("Your company does not have coupon with this title.\n\nPlease try again");
		}
	}

	/**
	 * Gets the details of the loggedIn company by the company id
	 * 
	 * @return {@link Company}
	 * @throws CouponSystemException
	 */
	public Company getMyCompany() throws CouponSystemException {
		Company comp = companyDb.getCompanyById(LoggedIncompanyId);
		return comp;
	}

	/**
	 * Gets all coupons of the loggedIn company by the company id
	 * 
	 * @return collection of all coupons belongs to the loggedIn company
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllCouponsOfLoggedInCompany() throws CouponSystemException {
		Collection<Coupon> myCoupons = companyDb.getMyCouponsByMyCompanyId(LoggedIncompanyId);
		return myCoupons;
	}

	/**
	 * Gets coupons of the loggedIn company by the coupons type
	 * 
	 * @return collection of all coupons (belongs to the loggedIn company) in the
	 *         selected type
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCouponsByType(CouponType Type) throws CouponSystemException {
		Collection<Coupon> couponsByType = new ArrayList<>();
		Collection<Coupon> myCoupons = companyDb.getMyCouponsByMyCompanyId(LoggedIncompanyId);
		for (Coupon c : myCoupons) {
			if (c.getCouponType().equals(Type)) {
				couponsByType.add(c);
			}
		}
		return couponsByType;
	}

	/**
	 * Gets coupons of the loggedIn company by the coupons top price
	 * 
	 * @return collection of all coupons (belongs to the loggedIn company) with
	 *         price lower than the selected top price
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCouponsByTopPrice(double topPrice) throws CouponSystemException {
		Collection<Coupon> CouponsByTopPrice = new ArrayList<>();
		Collection<Coupon> myCoupons = companyDb.getMyCouponsByMyCompanyId(LoggedIncompanyId);
		for (Coupon c : myCoupons) {
			if (c.getPrice() <= topPrice) {
				CouponsByTopPrice.add(c);
			}
		}
		return CouponsByTopPrice;
	}

	/**
	 * Gets coupons of the loggedIn company by the coupons end (expiration) date
	 * 
	 * @return collection of all coupons (belongs to the loggedIn company) with end
	 *         date earlier than or equal to the selected coupon end date
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCouponsByEndDate(java.util.Date date) throws CouponSystemException {
		Collection<Coupon> CouponsByEndDate = new ArrayList<>();
		Collection<Coupon> myCoupons = companyDb.getMyCouponsByMyCompanyId(LoggedIncompanyId);
		for (Coupon c : myCoupons) {
			if (c.getEndDate().before(date)) {
				CouponsByEndDate.add(c);
			}
		}
		return CouponsByEndDate;
	}

}