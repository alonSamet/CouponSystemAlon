package singleton;

import beans.ClientType;
//import cleanerTask.TheCleanerTask;
import connectionPool.ConnectionPool;
import exceptions.CouponSystemException;
import facades.AdminFacade;
import facades.CompanyFacade;
import facades.ClientFacade;
import facades.CustomerFacade;

/**
 * the CouponSystem is a singleton that give access to the rest of the system
 * and start and finish the cleaner thread that remove all the expired coupons .
 *
 */
public class CouponSystem {

//	TheCleanerTask task = new TheCleanerTask();
//	Thread cleaner = new Thread(task);

	// singleton ;
	private CouponSystem() {
//		cleaner.start();
	}

	private static CouponSystem instance;

	/**
	 * User can only use an instance of only coupon System, not create a new one
	 * 
	 * @return
	 */
	public static synchronized CouponSystem getInstance() {
		if (instance == null) {
			instance = new CouponSystem();
		}
		return instance;
	}

	/**
	 * User can get facade according to its Type and if he has the right user name & password. 
	 * 
	 * @param userName
	 * @param password
	 * @param type
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
	 * The shutdown method will close all open connections and stop the cleaner task
	 * 
	 * @throws CouponSystemException
	 */
	public void shutDown() throws CouponSystemException {
//		task.setQuit();
		try {
			ConnectionPool.getInstance().closeAllConnections();
			System.out.println("System shut down was completed");

		} catch (Exception e) {
			throw new CouponSystemException("Something went wrong");
		}
	}
}
