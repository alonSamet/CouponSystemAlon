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
 * the customer facade is more complicated methods that use the methods from the
 * dao.db layer in a way that separate the access to the database from the
 * client .
 *
 */
public class CustomerFacade implements ClientFacade {

	private CouponDaoDb couponDb;
	private CustomerDaoDb customerDb;
	private long LoggedInCustomerId;

	public CustomerFacade() {
		super();
		couponDb = new CouponDaoDb();
		customerDb = new CustomerDaoDb();
	}

	/**
	 * The login method saves the logged in customer id, so he can use all
	 * facade methods without retype the id every time
	 * 
	 */
	@Override
	public boolean login(String name, String password) throws CouponSystemException {
		if (customerDb.login(name, password)) {
			// Initiation of the variable LoggedIncompanyId:
			LoggedInCustomerId = customerDb.getCustomerIdByName(name);
			return true;
		} else {
			System.out.println("Invalid customer username or password");
			throw new CouponSystemException("Invalid customer username or password.\nPlease try again");
		}
	}

	/**
	 * A customer can purchase coupon after several validations: 1. Customer
	 * hasn't already bought this coupon. 2. There are coupons left. 3. The date
	 * of the coupon hasn't expired.
	 * 
	 * After coupon is being purchased, the method decreases the amount of the
	 * coupon from the company balance
	 * 
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 */
	public void purchaseCoupon(Coupon coupon) throws CouponSystemException {
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
	 * Remove selected purchased coupon from CustomerCouponTable
	 * 
	 * @param coupon
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
	 * This method allows the customer to get all his purchased coupons
	 * 
	 * @param LoggedInCustomerId
	 * @return
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchesedCoupons() throws CouponSystemException {
		Collection<Coupon> allPurchasedCoupons = customerDb.getCustomerCouponsByCustomerId(LoggedInCustomerId);
		System.out.println("You don't hava any purchased coupons");
		return allPurchasedCoupons;

	}

	public Collection<Coupon> getAllPurchesedCouponsByType(CouponType selectedType) throws CouponSystemException {
		Collection<Coupon> allPurchasedCouponsByType = new ArrayList<>();
		Collection<Coupon> myCoupons = customerDb.getCustomerCouponsByCustomerId(LoggedInCustomerId);
		for (Coupon c : myCoupons) {
			if (c.getCouponType().equals(selectedType)) {
				allPurchasedCouponsByType.add(c);
			}
		}
		if (allPurchasedCouponsByType.isEmpty()) {
			System.out.println("You don't have purchased coupons of this type");
		}
		return allPurchasedCouponsByType;
	}

	/**
	 * user can get all the coupon that he or she bought with lower or equal to
	 * the price he gave .
	 * 
	 * @param price
	 * @return
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
			System.out.println("You don't have purchased coupons below this price.\nPlease try again");
		}
		return allCouponsByPrice;
	}

	/**
	 * This method allows the customer to view all coupons
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		Collection<Coupon> allCoupons = couponDb.getAllCoupons();
		return allCoupons;

	}

	/**
	 * This method allows the customer to view his details
	 * 
	 * @return
	 * @throws CouponSystemException
	 */
	public Customer getMyCustomer() throws CouponSystemException {
		Customer cust = customerDb.getCustomerById(LoggedInCustomerId);
		return cust;
	}

}
