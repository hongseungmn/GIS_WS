package board;

import static org.junit.jupiter.api.Assertions.*;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.matchers.JUnitMatchers.*;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.*;

import org.apache.log4j.spi.LoggerFactory;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;

import egovframework.example.board.service.BoardService;
import egovframework.example.board.service.JimocService;
import egovframework.example.board.service.WeatherService;

@Configuration
@ImportResource({
	"file:src/main/resources/egovframework/spring/context-mapper.xml",
	"file:src/main/resources/egovframework/spring/context-common.xml",
	"file:src/main/resources/egovframework/spring/context-datasource.xml",
	"file:src/main/webapp/WEB-INF/config/egovframework/springmvc/dispatcher-servlet.xml"
})
class BoardIntegretedTestConfig {
	@Autowired
	WeatherService weatherService;
	
	@Autowired
	JimocService jimocService;
	
	@Autowired
	BoardService boardService;
}


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(
	classes = {
			BoardIntegretedTestConfig.class
	}
)


@WebAppConfiguration
public class BoardIntegretedTest {
	
	
	
	private MockMvc controllerMockMvc;
	
	@Autowired
	private WebApplicationContext wabApplicationContext;
	
	@Before
	public void setUp() throws Exception {
		this.controllerMockMvc = MockMvcBuilders.webAppContextSetup(this.wabApplicationContext).build();
	}

	@Test
	public void givenGetMapDataRequest_whenInvoked_thenReturnsJsonArray() throws Exception {
		this.controllerMockMvc.perform(get("/getMapData.do")
		.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(content().contentType("application/json; charset=utf-8"))
		.andExpect(jsonPath("$").isArray())
		.andExpect(jsonPath("$[0].b_num").exists())
		.andExpect(jsonPath("$[0].b_jimoc").exists());
	}
	
	@Test
	public void givenWeatherLabelRequest_whenFetchingWeather_thenReturnsJsonObject() throws Exception {
		MvcResult result = this.controllerMockMvc.perform(get("/getWeatherByLabel.do")
								.param("label", "포곡읍")
								.contentType(MediaType.APPLICATION_JSON))
								.andExpect(status().isOk())
								.andExpect(content().contentType("application/json; charset=utf-8"))
								.andExpect(jsonPath("$.response.header.resultCode").value("00"))
								.andReturn();
		
		String jsonResponse = result.getResponse().getContentAsString();
		System.out.println("String jsonResponse : " + result);
		System.out.println("String result.getResponse().getContextAsString : " + jsonResponse);
		ObjectMapper objectMapper = new ObjectMapper();
		
			
			
			 
	}

}
