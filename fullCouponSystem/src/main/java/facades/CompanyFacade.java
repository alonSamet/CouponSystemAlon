
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
 * With this company facade (the layer for the business logic) company can
 * perform various actions relating to its details & coupons
 */
public class CompanyFacade implements ClientFacade {

	private CouponDaoDb couponDb;
	private CompanyDaoDb companyDb;
	private CustomerDaoDb customerDb;

	// This variable will be initialize to the logged-in company id (in login
	// method)
	private long LoggedIncompanyId;

	public CompanyFacade() {
		super();
		couponDb = new CouponDaoDb();
		companyDb = new CompanyDaoDb();
		customerDb = new CustomerDaoDb();
	}

	@Override
	public boolean login(String name, String password) throws CouponSystemException {
		if (companyDb.login(name, password)) {
			// Initiation of the variable LoggedIncompanyId:
			this.LoggedIncompanyId = companyDb.getCompanyIdByName(name);
			return true;
		} else {
			System.out.println("Invalid company username or password");
			throw new CouponSystemException("Invalid company username or password.\nPlease try again");
		}
	}

	/**
	 * Add new coupon to company, after we check that the coupon title is unique
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 */
	public void createCoupon(Coupon coupon) throws CouponSystemException {
		for (Coupon c : couponDb.getAllCoupons()) {
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
	 * Remove selected coupon from coupon table, CompanyCoupon Table &
	 * CustomerCouponTable
	 * 
	 * @param coupon
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
	 * Update coupon's price & end date
	 * 
	 * @param coupon
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

	public Coupon getMyCouponById(long couponId) throws CouponSystemException {
		if (couponDb.isCouponBelongsToLoggedInCompany(LoggedIncompanyId, couponId)) {
			return couponDb.getCouponById(couponId);
		} else {
			throw new CouponSystemException("Your company does not have coupon with this id.\n\nPlease try again");
		}
	}

	public Coupon getMyCouponByTitle(String couponTitle) throws CouponSystemException {
		long couponId = couponDb.getCouponIdByTitle(couponTitle);
		if (couponDb.isCouponBelongsToLoggedInCompany(LoggedIncompanyId, couponId)) {
			return couponDb.getCouponById(couponId);
		} else {
			throw new CouponSystemException("Your company does not have coupon with this title.\n\nPlease try again");
		}
	}

	public Company getMyCompany() throws CouponSystemException {
		Company comp = companyDb.getCompanyById(LoggedIncompanyId);
		return comp;
	}

	public Collection<Coupon> getCouponsOfLoggedInCompany() throws CouponSystemException {
		Collection<Coupon> myCoupons = companyDb.getMyCouponsByMyCompanyId(LoggedIncompanyId);
		return myCoupons;
	}

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