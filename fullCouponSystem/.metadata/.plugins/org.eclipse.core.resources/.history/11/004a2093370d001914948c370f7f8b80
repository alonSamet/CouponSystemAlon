package webServices;

import java.text.ParseException;

import javax.servlet.http.HttpSession;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.format.annotation.DateTimeFormat;
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
import facades.CompanyFacade;

/**
 * The company web service handles the HTTP requests sent from the company web
 * page (client side)
 * 
 * @author Alon Samet
 *
 */
@RestController
@CrossOrigin("*")
public class CompanyWebService {

	// Get the company facade from the session
	private ClientFacade getFacade(HttpServletRequest req) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) req.getSession().getAttribute("facade");
		return cf;
	}

	/**
	 * Creates new coupon
	 * 
	 * @param {@link Coupon}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with coupon creation success/error string
	 *         massage
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/createcoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCoupon(@RequestBody Coupon coupon, HttpServletRequest req)
			throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			cf.createCoupon(coupon);
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.TEXT_MARKDOWN)
					.body("The coupon \"" + coupon.getTitle() + "\" was created");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Removes a selected coupon from the database
	 * 
	 * @param {@link Coupon}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with coupon removal success/error string
	 *         massage
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/removecoupon", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removeCoupon(@RequestBody Coupon coupon, HttpServletRequest req)
			throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			cf.removeCoupon(coupon);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_MARKDOWN)
					.body("The coupon \"" + coupon.getTitle() + "\" was removed");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Updates coupon price & end (expiration) date only
	 * 
	 * @param {@link Coupon}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with coupon update success/error string
	 *         massage
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/updatecoupon", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCoupon(@RequestBody Coupon coupon, HttpServletRequest req)
			throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			cf.updateCoupon(coupon);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_MARKDOWN)
					.body("The coupon \"" + coupon.getTitle() + "\" was updated");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Gets a coupon of the loggedIn company by its id
	 * 
	 * @param id id of the requested coupon
	 * @param    {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with coupon object details (in json format) or
	 *         an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/getmycouponbyid/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getMyCouponById(@PathVariable("id") long id, HttpServletRequest req)
			throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getMyCouponById(id));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Gets a coupon of the loggedIn company by its title
	 * 
	 * @param title title of the requested coupon
	 * @param       {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with coupon object details (in json format) or
	 *         an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/getmycouponbytitle/{title}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getMyCouponByTitle(@PathVariable("title") String title,
			HttpServletRequest req) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getMyCouponByTitle(title));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Gets all coupons belongs to the logged-in company from database
	 * 
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all coupon objects details belongs to the
	 *         logged-in company (in json format) or an error string massage (in
	 *         case of a failure)
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/getallmycoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllMyCoupons(HttpServletRequest req) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getAllCouponsOfLoggedInCompany());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets all coupons from database by requested coupon type
	 * 
	 * @param {@link CouponType} requested type of coupons
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all coupon objects details (in json
	 *         format) of the requested coupon type, or an error string massage (in
	 *         case of a failure)
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/getmycouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getMyCouponsByType(@PathVariable("type") CouponType type,
			HttpServletRequest req) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			// CouponType type = null;
			// type = CouponType.valueOf(t.toUpperCase());
			return ResponseEntity.status(HttpStatus.OK).body(cf.getCouponsByType(type));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets all coupons from database by requested top price
	 * 
	 * @param topPrice top price of coupons
	 * @param          {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all coupon objects details (in json
	 *         format) with price below/equal the requested top price, or an error
	 *         string massage (in case of a failure)
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/getmycouponsbytopprice/{topprice}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getMyCouponsByTopPrice(@PathVariable("topprice") Double topPrice,
			HttpServletRequest req) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getCouponsByTopPrice(topPrice));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets all coupons from database by requested end date
	 * 
	 * @param endDate expiration date of coupon
	 * @param         {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all coupon objects details (in json
	 *         format) with with expiration date that is earlier than the requested
	 *         one, or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/getmycouponsbyenddate/{enddate}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getMyCouponsByEndDate(
			@PathVariable("enddate") @DateTimeFormat(pattern = "yyyy-MM-dd") java.util.Date endDate,
			HttpServletRequest req) throws CouponSystemException, ParseException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getCouponsByEndDate(endDate));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets the logged-in company object details
	 * 
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with the logged-in company object details (in
	 *         json format), or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 */
	@RequestMapping(value = "/company/getmycompanydetails", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getMyCompanyDetails(HttpServletRequest req) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getMyCompany());
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
	@RequestMapping(value = "/company/logout/", method = RequestMethod.POST)
	public void logOut(HttpServletRequest req) throws CouponSystemException {
		HttpSession session = req.getSession(false);
		session.invalidate();
	}

}
