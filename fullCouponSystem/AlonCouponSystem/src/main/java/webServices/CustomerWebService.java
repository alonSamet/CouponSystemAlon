package webServices;

import java.io.IOException;

import javax.servlet.http.HttpSession;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import beans.Coupon;
import beans.CouponType;
import exceptions.CouponSystemException;
import facades.ClientFacade;
import facades.CustomerFacade;

/**
 * The customer web service handles the HTTP requests sent from the customer web
 * page (client side)
 * 
 * @author Alon Samet
 *
 */
@RestController
@CrossOrigin("*")
public class CustomerWebService {

	// Get the customer facade from the session
	private ClientFacade getFacade(HttpServletRequest req) throws CouponSystemException, IOException {
		CustomerFacade cf = (CustomerFacade) req.getSession().getAttribute("facade");
		return cf;
	}

	/**
	 * Purchases a requested coupon
	 * 
	 * @param {@link Coupon}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with coupon purchase success/error string
	 *         massage
	 * @throws CouponSystemException
	 * @throws IOException 
	 */
	@RequestMapping(value = "/customer/purchasecoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> purchaseCoupon(@RequestBody Coupon coupon, HttpServletRequest req)
			throws CouponSystemException, IOException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			cf.purchaseCoupon(coupon);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_PLAIN)
					.body("The coupon \"" + coupon.getTitle() + "\" was purchased");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}

	}

	/**
	 * Removes requested purchased coupon from the database
	 * 
	 * @param {@link Coupon}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with purchased coupon removal success/error
	 *         string massage
	 * @throws CouponSystemException
	 * @throws IOException 
	 */
	@RequestMapping(value = "/customer/removepurchasedcoupon", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removePurchasedCoupon(@RequestBody Coupon coupon,
			HttpServletRequest req) throws CouponSystemException, IOException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			cf.removePurchasedCoupon(coupon);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_MARKDOWN)
					.body("The coupon \"" + coupon.getTitle() + "\" was removed");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Gets all purchased coupons from database
	 * 
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all purchased coupon objects details (in
	 *         json format), or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException 
	 */
	@RequestMapping(value = "/customer/getallpurchasedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllPurchesedCoupons(HttpServletRequest req) throws CouponSystemException, IOException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getAllPurchesedCoupons());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets all purchased coupons from database by requested coupon type
	 * 
	 * @param {@link CouponType} requested type of coupons
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all purchased coupon objects details (in
	 *         json format) of the requested coupon type, or an error string massage
	 *         (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException 
	 */
	@RequestMapping(value = "/customer/getallpurchasedcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllPurchesedCouponsByType(@PathVariable("type") CouponType type,
			HttpServletRequest req) throws CouponSystemException, IOException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getAllPurchesedCouponsByType(type));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets all purchased coupons from database by requested top price
	 * 
	 * @param topPrice top price of coupons
	 * @param          {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all purchased coupon objects details (in
	 *         json format) with price below/equal the requested top price, or an
	 *         error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException 
	 */
	@RequestMapping(value = "/customer/getallpurchasedcouponsbytopprice/{topprice}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllPurchesedCouponsByTopPrice(@PathVariable("topprice") Double topprice,
			HttpServletRequest req) throws CouponSystemException, IOException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getAllPurchesedCouponsByTopPrice(topprice));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets all coupons from database
	 * 
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all coupon objects details (in json
	 *         format) or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException 
	 */
	@RequestMapping(value = "/customer/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCoupons(HttpServletRequest req) throws CouponSystemException, IOException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getAllCoupons());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets the logged-in custoemr object details
	 * 
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with the logged-in custoemr object details (in
	 *         json format), or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException 
	 */
	@RequestMapping(value = "/customer/getmydetails", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getMyDetails(HttpServletRequest req) throws CouponSystemException, IOException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getMyCustomer());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Logs out from the system by invalidating the session
	 * 
	 * @param {@link HttpServletRequest}
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/customer/logout/", method = RequestMethod.POST)
	public void logOut(HttpServletRequest req) throws CouponSystemException {
		HttpSession session = req.getSession(false);
//		session.removeAttribute("facade");
		session.invalidate();
	}

}
