package egovframework.example.config;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RequestLoggingFilter implements Filter {
	
	private static final Logger logger = LoggerFactory.getLogger(RequestLoggingFilter.class);
	

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		
		// 요청한 클라이언트 IP 주소 얻기
	    String clientIp = httpRequest.getHeader("X-Forwarded-For");
	    if (clientIp == null || clientIp.isEmpty()) {
	        clientIp = httpRequest.getRemoteAddr();
	    }
	    
	    // 요청 정보 로깅
	    logger.info("Client IP: {}, Request URL: {}", clientIp, httpRequest.getRequestURL());
	    
	    // 필터 체인 계속 진행
	    chain.doFilter(request, response);
	}

}
