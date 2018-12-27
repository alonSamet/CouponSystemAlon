package facades;

import java.util.ArrayList;
import java.util.Collection;

import beans.Coupon;
import beans.CouponType;
import beans.Customer;
import dao.db.CouponDaoDb;
import dao.db.CustomerDaoDb;
import exceptions.CouponSystemException;

/**
 * With the customer facade - the layer for the business logic - the customer
 * can purchase coupon (and remove it) and get its coupons
 */
public class CustomerFacade implements ClientFacade {

	private CouponDaoDb couponDb;
	private CustomerDaoDb customerDb;
	private long LoggedInCustomerId;

	/**
	 * This CTOR instantiates the company & customer DaoDb layer, in order to allow
	 * access to its methods
	 */
	public CustomerFacade() {
		super();
		couponDb = new CouponDaoDb();
		customerDb = new CustomerDaoDb();
	}

	/**
	 * Login to the system by customer username & password
	 * 
	 * @param name     username of customer
	 * @param password password of customer
	 * @return true (if login succeeded) or false (if login failed)
	 */
	@Override
	public boolean login(String name, String password) throws CouponSystemException {
		if (customerDb.login(name, password)) {
			// Initiation of the variable LoggedInCustomerId:
			LoggedInCustomerId = customerDb.getCustomerIdByName(name);
			return true;
		} else {
			System.out.println("Invalid customer username or password");
			throw new CouponSystemException("Invalid customer username or password.\nPlease try again");
		}
	}

	/**
	 * A customer can purchase coupon after several validations: (1) Customer hasn't
	 * already bought this coupon. (2) There are coupons left (amount > 0). (3) The
	 * date of the coupon hasn't expired (end date is later than current time).
	 * After coupon is being purchased, the method decreases the amount of the
	 * coupon from the company balance
	 * 
	 * @param {{@link Coupon}
	 * @throws CouponSystemException
	 */
	public void purchaseCoupon(Coupon coupon) throws CouponSystemException {
		// Check for the above 3 validations:
		if ((!(customerDb.IsCouponWasAlreadyPurchased(coupon.getTitle()))) && couponDb.isThereCouponsLeft(coupon)
				&& couponDb.isCouponDateValid(coupon)) {
			customerDb.addToCustomerCouponTable(LoggedInCustomerId, coupon.getId());
			coupon.setAmount((coupon.getAmount()) - 1);
			// Update coupon amount in db:
			couponDb.update(coupon);
		}
		System.out.println("The coupon \"" + coupon.getTitle() + "\" was successfully purchased");
	}

	/**
	 * Removes selected purchased coupon from CustomerCouponTable
	 * 
	 * @param {{@link Coupon}
	 * @throws CouponSystemException
	 */
	public void removePurchasedCoupon(Coupon coupon) throws CouponSystemException {
		long couponId = couponDb.getCouponIdByTitle(coupon.getTitle());
		if (couponDb.isCouponBelongsToLoggedInCustomer(LoggedInCustomerId, couponId)) {
			customerDb.removeFromCustomerCouponTable(couponId);
			System.out.println("Purchased coupon was removed from customer");
		} else {
			throw new CouponSystemException("This coupon does not belong to you.\nPlease try again");
		}
	}

	/**
	 * Gets all coupons being purchased by the loggedIn customer
	 * 
	 * @return collection of all coupons being purchased by the loggedIn customer
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchesedCoupons() throws CouponSystemException {
		Collection<Coupon> allPurchasedCoupons = customerDb.getCustomerCouponsByCustomerId(LoggedInCustomerId);
		if (allPurchasedCoupons.isEmpty()) {
			System.out.println("You don't have any purchased coupons");
		}
		return allPurchasedCoupons;

	}

	/**
	 * Gets coupons being purchased by the loggedIn customer, by the coupons type
	 * 
	 * @return collection of coupons
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchesedCouponsByType(CouponType selectedType) throws CouponSystemException {
		Collection<Coupon> allPurchasedCouponsByType = new ArrayList<>();
		Collection<Coupon> myCoupons = customerDb.getCustomerCouponsByCustomerId(LoggedInCustomerId);
		for (Coupon c : myCoupons) {
			if (c.getCouponType().equals(selectedType)) {
				allPurchasedCouponsByType.add(c);
			}
		}
		if (allPurchasedCouponsByType.isEmpty()) {
			System.out.println("You don't have any purchased coupons of this type.\nPlease try again");
		}
		return allPurchasedCouponsByType;
	}

	/**
	 * Gets coupons being purchased by the loggedIn customer, by the coupons top price
	 * 
	 * @return collection of purcahsed coupons with price lower than the selected top price
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchesedCouponsByTopPrice(double price) throws CouponSystemException {
		Collection<Coupon> allCouponsByPrice = new ArrayList<>();
		Collection<Coupon> myCoupons = customerDb.getCustomerCouponsByCustomerId(LoggedInCustomerId);
		for (Coupon c : myCoupons) {
			if (c.getPrice() <= price) {
				allCouponsByPrice.add(c);
			}
		}
		if (allCouponsByPrice.isEmpty()) {
			System.out.println("You don't have any purchased coupons below this price.\nPlease try again");
		}
		return allCouponsByPrice;
	}

	/**
	 * Gets all existing coupons
	 * 
	 * @return collection of all coupons belongs to the loggedIn customer
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		Collection<Coupon> allCoupons = couponDb.getAllCoupons();
		return allCoupons;

	}

	/**
	 * Gets the details of the loggedIn customer
	 * 
	 * @return {@link Customer}
	 * @throws CouponSystemException
	 */
	public Customer getMyCustomer() throws CouponSystemException {
		Customer customer = customerDb.getCustomerById(LoggedInCustomerId);
		return customer;
	}

}
