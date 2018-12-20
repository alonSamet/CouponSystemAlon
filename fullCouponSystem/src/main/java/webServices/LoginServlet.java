package webServices;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import beans.ClientType;
import exceptions.CouponSystemException;
import facades.ClientFacade;
import singleton.CouponSystem;

@Controller
public class LoginServlet {

	// this method will receive the data from the HTML text boxes
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String doPost(@RequestParam String name, @RequestParam String pwd, @RequestParam ClientType usertype,
			HttpServletRequest req) {
		try {
			// Gets the facade from the singelton login method
			ClientFacade cf = CouponSystem.getInstance().Login(name, pwd, usertype);

			if (cf == null) // If login failed
				return "redirect:http://localhost:8080";

			// If login successed:
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
