package webServices;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import facades.AdminFacade;

public class AdminFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		// If the client has no facade - he is redirected to the login page:
		if (req.getSession().getAttribute("facade") == null
				|| !(req.getSession().getAttribute("facade") instanceof AdminFacade)) {
			resp.sendRedirect("http://localhost:8080");
		}
		chain.doFilter(req, resp);
	}

	@Override
	public void destroy() {
	}

}