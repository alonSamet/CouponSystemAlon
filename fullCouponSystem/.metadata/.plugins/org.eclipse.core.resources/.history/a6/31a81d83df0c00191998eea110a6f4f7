package loginServlet;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import beans.ClientType;
import exceptions.CouponSystemException;
import facades.ClientFacade;
import singleton.CouponSystem;

/**
 * This servlet gets the data from the login page inputs and redirects the user
 * to the relevant page
 * 
 * @author Alon Samet
 *
 */
@Controller
public class LoginServlet {

	/**
	 * This method gets the data from the login page inputs and redirects the user
	 * (admin/company/customer) to the relevant page
	 *
	 * @param username username that has been typed by the client in the login page
	 * @param pwd      password that has been typed by the client in the login page
	 * @param usertype type of the user (admin/company/customer) that has been
	 *                 selected by the client in the login page
	 * @param {@link HttpServletRequest}
	 * @return command (string) with URL of the page that the client was redirected to
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String doPost(@RequestParam String username, @RequestParam String pwd, @RequestParam ClientType usertype,
			HttpServletRequest req) {
		try {
			// Gets the facade from the singleton login method
			ClientFacade cf = CouponSystem.getInstance().Login(username, pwd, usertype);

			if (cf == null) // If login failed
				return "redirect:http://localhost:8080";

			// If login succeeded, the facade is been inserted into the session
			req.getSession().setAttribute("facade", cf);

			// Redirecting to the correct page:
			switch (usertype) {
			case ADMIN:
				return "redirect:http://localhost:8080/admin/index.html";
			case COMPANY:
				return "redirect:http://localhost:8080/company/index.html";
			case CUSTOMER:
				return "redirect:http://localhost:8080/customer/index.html";
			}
			return "redirect:http://localhost:8080";

		} catch (CouponSystemException e) {
			return "redirect:http://localhost:8080";

		}
	}
}
