package webServices;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterUrlConfig  {

	@Bean
	public FilterRegistrationBean<SystemAccessFilter> loggingFilter() {
		FilterRegistrationBean<SystemAccessFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new SystemAccessFilter());
		registrationBean.addUrlPatterns("/admin/*", "/company/*", "/customer/*");
		return registrationBean;
	}
	
}
