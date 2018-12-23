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

import beans.Company;
import beans.Customer;
import exceptions.CouponSystemException;
import facades.AdminFacade;
import facades.ClientFacade;

@RestController
@CrossOrigin("*")
public class AdminWebService {

	// Get the facade from the session
	private ClientFacade getFacade(HttpServletRequest req) throws CouponSystemException {
		AdminFacade af = (AdminFacade) req.getSession().getAttribute("facade");
		return af;
	}

	// *************************************************************
	// ********** AdminFacade methods related to company: **********
	// *************************************************************

	@RequestMapping(value = "/admin/createcompany", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCompany(@RequestBody Company company, HttpServletRequest req)
			throws CouponSystemException {
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

	@RequestMapping(value = "/admin/removecompany", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removeCompany(@RequestBody Company company, HttpServletRequest req)
			throws CouponSystemException {
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

	@RequestMapping(value = "/admin/updatecompany", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCompany(@RequestBody Company company, HttpServletRequest req)
			throws CouponSystemException {
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

	@RequestMapping(value = "/admin/getcompanybyid/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCompanyById(@PathVariable("id") long id, HttpServletRequest req)
			throws CouponSystemException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getCompanyById(id));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@RequestMapping(value = "/admin/getcompanybyname/{name}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCompanyByName(@PathVariable("name") String name, HttpServletRequest req)
			throws CouponSystemException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getCompanyByName(name));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	@RequestMapping(value = "/admin/getallcompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCompanies(HttpServletRequest req) throws CouponSystemException {
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

	@RequestMapping(value = "/admin/createcustomer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCustomer(@RequestBody Customer customer, HttpServletRequest req)
			throws CouponSystemException {
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

	@RequestMapping(value = "/admin/removecustomer", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removeCustomer(@RequestBody Customer customer, HttpServletRequest req)
			throws CouponSystemException {
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

	@RequestMapping(value = "/admin/updatecustomer", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCompany(@RequestBody Customer customer, HttpServletRequest req)
			throws CouponSystemException {
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

	@RequestMapping(value = "/admin/getcustomerbyid/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCustomer(@PathVariable("id") long id, HttpServletRequest req)
			throws CouponSystemException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getCustomerById(id));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	@RequestMapping(value = "/admin/getcustomerbyname/{name}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCustomer(@PathVariable("name") String name, HttpServletRequest req)
			throws CouponSystemException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getCustomerByName(name));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	@RequestMapping(value = "/admin/getallcustomers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCustomers(HttpServletRequest req) throws CouponSystemException {
		AdminFacade af = (AdminFacade) this.getFacade(req);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(af.getAllCustomers());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	@RequestMapping(value = "/admin/logout/", method = RequestMethod.POST)
	public void logOut(HttpServletRequest req) throws CouponSystemException {
		HttpSession session = req.getSession(false);
		session.invalidate();
	}

}