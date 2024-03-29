package singleton;

import beans.ClientType;
import exceptions.CouponSystemException;
import facades.AdminFacade;
import facades.ClientFacade;
import facades.CompanyFacade;
import facades.CustomerFacade;

/**
 * The CouponSystem class is a singleton that: 
 * 1) allows access to the rest of the system (by logging in and returning facade to the user)
 * 2) shuts down the system (closes all connections)
 * 3) activates the cleaner thread (that remove all the expired coupons).
 */
public class CouponSystem {

//	TheCleanerTask task = new TheCleanerTask();
//	Thread cleaner = new Thread(task);

	private CouponSystem() {
//		cleaner.start();
	}

	private static CouponSystem instance;

	/**
	 * Creates and returns the only instance of the singleton
	 * 
	 * @return instance of the singleton
	 */
	public static synchronized CouponSystem getInstance() {
		if (instance == null) {
			instance = new CouponSystem();
		}
		return instance;
	}

	/**
	 * Login to the system. Thos method returns facade to the user by its type
	 * (administrator, company or customer), its username and its password
	 * 
	 * @param userName username of the user
	 * @param password password of the user
	 * @param type     type of the client that tries to login the system
	 *                 (admin/company/customer)
	 * @return
	 * @throws CouponSystemException
	 */
	public ClientFacade Login(String userName, String password, ClientType type) throws CouponSystemException {

		if (type.equals(ClientType.ADMIN)) {
			AdminFacade adminFacade = new AdminFacade();
			if (adminFacade.login(userName, password)) {
				System.out.println("Admin is logged in");
				return adminFacade;
			}
		}
		if (type.equals(ClientType.COMPANY)) {
			CompanyFacade companyFacade = new CompanyFacade();
			if (companyFacade.login(userName, password)) {
				System.out.println("Company is logged in");
				return companyFacade;
			}
		}
		if (type.equals(ClientType.CUSTOMER)) {
			CustomerFacade customerFacade = new CustomerFacade();
			if (customerFacade.login(userName, password)) {
				System.out.println("Customer is logged in");
				return customerFacade;
			}
		}
		return null;
	}

	/**
	 * Closes all open connections and stops the cleaner task
	 * 
	 * @throws CouponSystemException
	 */
//	public void shutDown() throws CouponSystemException {
////		task.setQuit();
//		try {
//			ConnectionPool.getInstance().closeAllConnections();
//			System.out.println("System shut down was completed");
//
//		} catch (Exception e) {
//			throw new CouponSystemException("Something went wrong");
//		}
//	}
}
