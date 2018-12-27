package accessFilters;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import facades.CustomerFacade;

/**
 * This filter handles a scenario when a user is trying to access the
 * customer page, without login and receiving of a customer facade
 * 
 * @author Alon Samet
 *
 */
public class CustomerFilter implements Filter {

	/**
	 * Initiation method of the customer filter
	 */
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	/**
	 * The main method of the customer filter, which operating the check whether the user has
	 * an customer facade (if not - the system sends the user to the login page)
	 */
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		// If the client has no facade - he is redirected to the login page:
		if (req.getSession().getAttribute("facade") == null
				|| !(req.getSession().getAttribute("facade") instanceof CustomerFacade)) {
			resp.sendRedirect("http://localhost:8080");
		}
		chain.doFilter(req, resp);
	}

	/**
	 * Destroy method of the customer filter
	 */
	@Override
	public void destroy() {
	}

}