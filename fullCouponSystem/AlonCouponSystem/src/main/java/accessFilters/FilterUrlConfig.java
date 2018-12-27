package accessFilters;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * This class Configures the filters for specific URLs
 * 
 * @author Alon Samet
 *
 */
@Configuration
public class FilterUrlConfig  {
	
	/**
	 * Configures the admin filter for specific URL
	 * 
	 * @return FilterRegistrationBean registers the admin filter with a ServletContextInitializer
	 */
	@Bean
	public FilterRegistrationBean<AdminFilter> adminLoggingFilter() {
		FilterRegistrationBean<AdminFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new AdminFilter());
		registrationBean.addUrlPatterns("/admin/*");
		return registrationBean;
	}
	
	/**
	 * Configures the company filter for specific URL
	 * 
	 * @return FilterRegistrationBean registers the company filter with a ServletContextInitializer
	 */
	@Bean
	public FilterRegistrationBean<CompanyFilter> companyLoggingFilter() {
		FilterRegistrationBean<CompanyFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new CompanyFilter());
		registrationBean.addUrlPatterns("/company/*");
		return registrationBean;
	}
	
	/**
	 * Configures the customer filter for specific URL
	 * 
	 * @return FilterRegistrationBean registers the customer filter with a ServletContextInitializer
	 */
	@Bean
	public FilterRegistrationBean<CustomerFilter> customerLoggingFilter() {
		FilterRegistrationBean<CustomerFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new CustomerFilter());
		registrationBean.addUrlPatterns("/customer/*");
		return registrationBean;
	}
	
}
