//******* disabled! *******
//
//package cleanerTask;
//
//
//
//import java.util.Date;
//import beans.Coupon;
//import dao.db.CompanyDaoDb;
//import dao.db.CouponDaoDb;
//import dao.db.CustomerDaoDb;
//import exceptions.CouponSystemException;
//
///**
// * This task is stating inside a thread in the coupon system singleton. it
// * will run ones a day and rest for 24 hours. It can be changed by the coupon 
// * system singleton (via the setQuit method).
// */
//public class TheCleanerTask implements Runnable {
//
//	private CouponDaoDb couponDb;
//	private CustomerDaoDb customerDb;
//	private CompanyDaoDb companyDb;
//
//	private static boolean quit;
//
//	public TheCleanerTask() {
//		couponDb = new CouponDaoDb();
//		customerDb = new CustomerDaoDb();
//		companyDb = new CompanyDaoDb();
//		quit = false;
//	}
//
//	/**
//	 * This method will activate a daily check for deleting of expired coupons from coupons & join tables.
//	 * The method will not work if setQuit method (which close the program) is been called
//	 */
//	@Override
//	public void run() {
//		while (!quit) {
//			try {
//				for (Coupon c : couponDb.getAllCoupons()) {
//					if (c.getEndDate().before(new Date(System.currentTimeMillis()))) {
//						customerDb.removeFromCustomerCouponTable(c.getId());
//						companyDb.removeFromCompanyCouponTable(c.getId());
//						couponDb.remove(c);
//					}
//				}
//				// sleep for 24 hours;
//				Thread.sleep(1000 * 60 * 60 * 24);
//
//			} catch (CouponSystemException | InterruptedException e) {
//				System.out.println("Run thread failed");
//				e.printStackTrace();
//			}
//
//		}
//	}
//
//	/**
//	 * CouponSystem.shutdown method will use this method to stop the cleaner Task
//	 */
//	public void setQuit() {
//		quit = true;
//	}
//
//}
