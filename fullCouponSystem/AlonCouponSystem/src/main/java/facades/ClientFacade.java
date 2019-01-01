package facades;

import exceptions.CouponSystemException;

/**
 * This general interface (which enables polymorphism) is being used in the
 * login method of the coupon system singleton
 */
public interface ClientFacade {

	/**
	 * 
	 * @param name     username
	 * @param password user password
	 * @return true (login succeeded) or false (login failed)
	 * @throws CouponSystemException
	 */
	boolean login(String name, String password) throws CouponSystemException;
}
