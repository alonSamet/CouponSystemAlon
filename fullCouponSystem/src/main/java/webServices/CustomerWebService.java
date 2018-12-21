package webServices;

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

@RestController
@CrossOrigin("*")
public class CustomerWebService {

	// Get the facade from the session
	private ClientFacade getFacade(HttpServletRequest req) throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) req.getSession().getAttribute("facade");
		return cf;
	}

	@RequestMapping(value = "/customer/purchasecoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> purchaseCoupon(@RequestBody Coupon coupon, HttpServletRequest req)
			throws CouponSystemException {
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
	
	@RequestMapping(value = "/customer/removepurchasedcoupon", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removePurchasedCoupon(@RequestBody Coupon coupon, HttpServletRequest req) throws CouponSystemException {
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

	@RequestMapping(value = "/customer/getallpurchasedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllPurchesedCoupons(HttpServletRequest req) throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getAllPurchesedCoupons());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	@RequestMapping(value = "/customer/getallpurchasedcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllPurchesedCouponsByType(@PathVariable("type") CouponType type, HttpServletRequest req)
			throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getAllPurchesedCouponsByType(type));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	@RequestMapping(value = "/customer/getallpurchasedcouponsbytopprice/{topprice}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllPurchesedCouponsByTopPrice(@PathVariable("topprice") Double topprice, HttpServletRequest req)
			throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getAllPurchesedCouponsByTopPrice(topprice));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	@RequestMapping(value = "/customer/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCoupons(HttpServletRequest req)
			throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getAllCoupons());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	@RequestMapping(value = "/customer/getmydetails", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getMyDetails(HttpServletRequest req) throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(cf.getMyCustomer());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	@RequestMapping(value = "/customer/logout/", method = RequestMethod.POST)
	public void logOut(HttpServletRequest req) throws CouponSystemException {
		HttpSession session = req.getSession(false);
//		session.removeAttribute("facade");
		session.invalidate();
	}


}
