package facades;

import exceptions.CouponSystemException;
/**
 * we use this general interface in the login in the coupon system singleton 
 * 
 */
public interface ClientFacade {
	
	boolean login(String name, String password) throws CouponSystemException ;
}
