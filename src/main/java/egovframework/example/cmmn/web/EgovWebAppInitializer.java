package egovframework.example.cmmn.web;

import javax.servlet.Filter;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.web.WebApplicationInitializer;

import egovframework.example.config.RequestLoggingFilter;

public class EgovWebAppInitializer implements WebApplicationInitializer {

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
//		Filter filter = new RequestLoggingFilter();
//		FilterRegistration.Dynamic registration = servletContext.addFilter("requestLoggingFilter", filter);
//		registration.addMappingForUrlPatterns(null, false, "/*");
	}
	
}
