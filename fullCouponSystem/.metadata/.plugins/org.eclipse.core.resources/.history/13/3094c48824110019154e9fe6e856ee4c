package webServices;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
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

import beans.Company;
import beans.Customer;
import exceptions.CouponSystemException;
import facades.AdminFacade;
import facades.ClientFacade;

/**
 * The admin web service handles the HTTP requests sent from the admin web page
 * (client side)
 */
@RestController
@CrossOrigin("*")
public class AdminWebService {

	// Get the admin facade from the session
	private ClientFacade getFacade(HttpServletRequest req) throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) req.getSession().getAttribute("facade");
		return af;
	}

	// *************************************************************
	// ********** AdminFacade methods related to company: **********
	// *************************************************************

	/**
	 * Creates new company
	 * 
	 * @param {@link Company}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with company creation success/error string
	 *         massage
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/createcompany", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCompany(@RequestBody Company company, HttpServletRequest req)
			throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			af.createCompany(company);
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.TEXT_MARKDOWN)
					.body("The company \"" + company.getName() + "\" was created");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Removes a company with all its coupons
	 * 
	 * @param {@link Company}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with company removal success/error string
	 *         massage
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/removecompany", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removeCompany(@RequestBody Company company, HttpServletRequest req)
			throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			af.removeCompany(company);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_MARKDOWN)
					.body("The company \"" + company.getName() + "\" was removed");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Updates company email & password only
	 * 
	 * @param {@link Company}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with company update success/error string
	 *         massage
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/updatecompany", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCompany(@RequestBody Company company, HttpServletRequest req,
			HttpServletResponse resp) throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			af.updateCompany(company);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_MARKDOWN)
					.body("The company \"" + company.getName() + "\" was updated");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Gets a company object by its id
	 * 
	 * @param id id of the requested company
	 * @param    {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with company object details (in json format)
	 *         or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/getcompanybyid/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCompanyById(@PathVariable("id") long id, HttpServletRequest req,
			HttpServletResponse resp) throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getCompanyById(id));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	/**
	 * Gets a company object by its name
	 * 
	 * @param name name of the requested company
	 * @param      {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with company object details (in json format)
	 *         or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/getcompanybyname/{name}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCompanyByName(@PathVariable("name") String name, HttpServletRequest req,
			HttpServletResponse resp) throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getCompanyByName(name));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets all the existing companies in the db
	 * 
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all company objects details (in json
	 *         format) or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/getallcompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCompanies(HttpServletRequest req)
			throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getAllCompanies());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	// **************************************************************
	// ********** AdminFacede methods related to customer: **********
	// **************************************************************

	/**
	 * Creates new customer
	 * 
	 * @param {@link Customer}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with customer creation success/error string
	 *         massage
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/createcustomer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCustomer(@RequestBody Customer customer, HttpServletRequest req,
			HttpServletResponse resp) throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			af.createCustomer(customer);
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.TEXT_MARKDOWN)
					.body("The customer \"" + customer.getName() + "\" was created");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Removes a customer with all its coupons
	 * 
	 * @param {@link Customer}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with customer removal success/error string
	 *         massage
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/removecustomer", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removeCustomer(@RequestBody Customer customer, HttpServletRequest req,
			HttpServletResponse resp) throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			af.removeCustomer(customer);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_MARKDOWN)
					.body("The customer \"" + customer.getName() + "\" was removed");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Updates customer password
	 * 
	 * @param {@link Customer}
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with customer update success/error string
	 *         massage
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/updatecustomer", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCustomer(@RequestBody Customer customer, HttpServletRequest req,
			HttpServletResponse resp) throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			af.updateCustomer(customer);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_MARKDOWN)
					.body("The customer \"" + customer.getName() + "\" was updated");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Gets a customer object by its id
	 * 
	 * @param id id of the requested customer
	 * @param    {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with customer object details (in json format)
	 *         or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/getcustomerbyid/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCustomer(@PathVariable("id") long id, HttpServletRequest req,
			HttpServletResponse resp) throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getCustomerById(id));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets a customer object by its name
	 * 
	 * @param name name of the requested customer
	 * @param      {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with customer object details (in json format)
	 *         or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/getcustomerbyname/{name}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCustomer(@PathVariable("name") String name, HttpServletRequest req,
			HttpServletResponse resp) throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getCustomerByName(name));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * Gets all customers from database
	 * 
	 * @param {@link HttpServletRequest}
	 * @return {@link ResponseEntity} with all customer objects details (in json
	 *         format) or an error string massage (in case of a failure)
	 * @throws CouponSystemException
	 * @throws IOException
	 */
	@RequestMapping(value = "/admin/getallcustomers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCustomers(HttpServletRequest req)
			throws CouponSystemException, IOException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getAllCustomers());
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
	@RequestMapping(value = "/admin/logout/", method = RequestMethod.POST)
	public void logOut(HttpServletRequest req) throws CouponSystemException {
		HttpSession session = req.getSession(false);
		session.invalidate();
	}

}
