package tests;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import beans.ClientType;
import beans.Company;
import beans.Coupon;
import beans.CouponType;
import beans.Customer;
import exceptions.CouponSystemException;
import facades.AdminFacade;
import facades.CompanyFacade;
import manageTables.ManageTables;
import singleton.CouponSystem;

/**
 * This class drops, creates and populates the coupon system database tables. In
 * this way, the system can easily be tested
 * 
 * @author Alon Samet
 *
 */
public class Test {

	public static void projectTest() throws CouponSystemException {

		ManageTables mt = new ManageTables();
		mt.dropTables();
		mt.createTables();
		System.out.println("****************************************");

		// Create company instances:
		Company alonTours = new Company("alonTours", "toursPwd", "alonTours@com");
		Company foodMarket = new Company("foodMarket", "foodPwd", "foodMarket@com");
		Company dufresneBoats = new Company("dufresneBoats", "boatPwd", "dufresneBoats@com");
		Company lightning = new Company("lightning", "lightPwd", "lightning@com");
		
		System.out.println("Four company instances were initiated");

		// Create customer instances:
		Customer tamar = new Customer("tamar", "tamarPwd");
		Customer eli = new Customer("eli", "eliPwd");
		Customer hadas = new Customer("hadas", "hadasPwd");
		Customer david = new Customer("david", "davidPwd");
		Customer ayala = new Customer("ayala", "ayalaPwd");
		
		System.out.println("Five customer instances were initiated");


		// Create coupon instances:
		Date startDate = new Date(System.currentTimeMillis());
		Date endDate1 = new GregorianCalendar(2020, Calendar.JANUARY, 1).getTime();
		Date endDate2 = new GregorianCalendar(2020, Calendar.JANUARY, 2).getTime();
		Date endDate3 = new GregorianCalendar(2020, Calendar.JANUARY, 3).getTime();
		Date endDate4 = new GregorianCalendar(2020, Calendar.JANUARY, 4).getTime();
		Date endDate5 = new GregorianCalendar(2020, Calendar.JANUARY, 5).getTime();
		Date endDate6 = new GregorianCalendar(2020, Calendar.JANUARY, 6).getTime();
		Date endDate7 = new GregorianCalendar(2020, Calendar.JANUARY, 7).getTime();
		Date endDate8 = new GregorianCalendar(2020, Calendar.JANUARY, 8).getTime();
		Date endDate9 = new GregorianCalendar(2020, Calendar.JANUARY, 9).getTime();

		Coupon lamp = new Coupon("Lamp", startDate, endDate1, 10, CouponType.ELECTRICITY,
				"A rich selection of decorative lamps with style", 30,
				"https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&h=350");
		Coupon coffee = new Coupon("Coffee", startDate, endDate2, 100, CouponType.FOOD, "Boutique italian coffee", 15,
				"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=350");
		Coupon sailboat = new Coupon("Private Sailboat", startDate, endDate3, 10, CouponType.HOBBY,
				"Dreamlike sailboat, customized just for you", 3000,
				"https://images.pexels.com/photos/1143379/pexels-photo-1143379.jpeg?auto=compress&cs=tinysrgb&h=350");
		Coupon vacation = new Coupon("Vacation On Zanzibar", startDate, endDate4, 15, CouponType.VACATION,
				"The vacation you've always dreamed of", 1000,
				"https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&h=350");
		Coupon burger = new Coupon("Hamburger", startDate, endDate5, 50, CouponType.FOOD,
				"The best burger in town! only with 10 calories", 50,
				"https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
		Coupon rowboat = new Coupon("Rowboat", startDate, endDate6, 5, CouponType.HOBBY, "The perfect romantic rowboat",
				2000,
				"https://images.pexels.com/photos/275538/pexels-photo-275538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
		Coupon movie = new Coupon("Vip Movie Double Tickets", startDate, endDate7, 30, CouponType.HOBBY,
				"The best way to watch a movie", 120,
				"https://images.pexels.com/photos/1353368/pexels-photo-1353368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
		Coupon breakfast = new Coupon("Luxurious Breakfast For Two", startDate, endDate8, 15, CouponType.FOOD,
				"The perfect date! Come hungry..", 110,
				"https://images.pexels.com/photos/1305063/pexels-photo-1305063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
		Coupon surf = new Coupon("Surfing Course", startDate, endDate9, 8, CouponType.HOBBY,
				"Learn the basic principles of independent surfing", 500,
				"http://cdn.theatlantic.com/static/infocus/surf091411/s01_20153614.jpg");
		
		System.out.println("Nine coupon instances were initiated");

		CouponSystem couponSystem = CouponSystem.getInstance();
		// Get admin Facade:
		AdminFacade adminFacade = (AdminFacade) couponSystem.Login("admin", "1234", ClientType.ADMIN);

		System.out.println("****************************************");

		// Admin creates new company:
		adminFacade.createCompany(alonTours);
		adminFacade.createCompany(foodMarket);
		adminFacade.createCompany(dufresneBoats);
		adminFacade.createCompany(lightning);

		System.out.println("Admin created 4 companies");

		
		System.out.println("****************************************");

		// The new company gets her companyFacade:
		CompanyFacade alonToursFacade = (CompanyFacade) couponSystem.Login("alonTours", "toursPwd", ClientType.COMPANY);
		CompanyFacade foodMarketFacade = (CompanyFacade) couponSystem.Login("foodMarket", "foodPwd",
				ClientType.COMPANY);
		CompanyFacade dufresneBoatsFacade = (CompanyFacade) couponSystem.Login("dufresneBoats", "boatPwd",
				ClientType.COMPANY);
		CompanyFacade lightningFacade = (CompanyFacade) couponSystem.Login("lightning", "lightPwd", ClientType.COMPANY);

		System.out.println("****************************************");

		// Companies create new coupons:
		alonToursFacade.createCoupon(vacation);
		alonToursFacade.createCoupon(movie);
		foodMarketFacade.createCoupon(coffee);
		foodMarketFacade.createCoupon(burger);
		foodMarketFacade.createCoupon(breakfast);
		dufresneBoatsFacade.createCoupon(sailboat);
		dufresneBoatsFacade.createCoupon(rowboat);
		dufresneBoatsFacade.createCoupon(surf);
		lightningFacade.createCoupon(lamp);

		System.out.println("Companies created their coupons");

		System.out.println("****************************************");

		// Admin creates a new customer:
		adminFacade.createCustomer(tamar);
		adminFacade.createCustomer(eli);
		adminFacade.createCustomer(hadas);
		adminFacade.createCustomer(david);
		adminFacade.createCustomer(ayala);
		
		System.out.println("Admin created 5 customers");


	}
	
	public static void main(String[] args) {
		try {
			projectTest();
		} catch (CouponSystemException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
