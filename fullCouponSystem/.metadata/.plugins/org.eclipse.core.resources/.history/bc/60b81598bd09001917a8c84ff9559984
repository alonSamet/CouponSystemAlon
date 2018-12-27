package webServices;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterUrlConfig  {

	@Bean
	public FilterRegistrationBean<AdminFilter> adminLoggingFilter() {
		FilterRegistrationBean<AdminFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new AdminFilter());
		registrationBean.addUrlPatterns("/admin/*");
		return registrationBean;
	}
	
	@Bean
	public FilterRegistrationBean<CompanyFilter> companyLoggingFilter() {
		FilterRegistrationBean<CompanyFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new CompanyFilter());
		registrationBean.addUrlPatterns("/company/*");
		return registrationBean;
	}
	
	@Bean
	public FilterRegistrationBean<CustomerFilter> customerLoggingFilter() {
		FilterRegistrationBean<CustomerFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new CustomerFilter());
		registrationBean.addUrlPatterns("/customer/*");
		return registrationBean;
	}
	
}
