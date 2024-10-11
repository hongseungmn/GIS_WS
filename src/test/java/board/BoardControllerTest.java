package board;


import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultHandler;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import egovframework.example.board.service.BoardService;
import egovframework.example.board.service.JimocService;
import egovframework.example.board.service.WeatherService;
import egovframework.example.board.web.BoardController;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@Configuration 
@ImportResource({
//	"file:src/main/resources/egovframework/spring/context-mapper.xml",
//	"file:src/main/resources/egovframework/spring/context-common.xml",
//	"file:src/main/resources/egovframework/spring/context-datasource.xml",
//	"file:src/main/webapp/WEB-INF/config/egovframework/springmvc/dispatcher-servlet.xml"
})
class BoardControllerTestConfig {
	@Bean
	public WeatherService weatherService() {
		return Mockito.mock(WeatherService.class);
	}
	
	@Bean
	public JimocService jimocService() {
		return Mockito.mock(JimocService.class);
	}
	
	@Bean
	public BoardService boardService() {
		return Mockito.mock(BoardService.class);
	}
}


@RunWith(SpringJUnit4ClassRunner.class)
//@WebAppConfiguration //WebApplicationContext 주입을 위함
//ContextConfiguration은 가장 중요한 어노테이션으로 지정된 클래스나 문자열을 통해 필요한 객체들을 스프링 내에 객체로 등록하게 된다. -> '이를 빈으로 등록된다' 라고 표현
//[XML] -> 'classpath: or file:' , [JAVA] -> 'classes'
@ContextConfiguration(
	classes = {
		BoardControllerTestConfig.class
})
public class BoardControllerTest {

    
    
    
    private MockMvc controllerMockMvc;
    
    @Autowired
    private BoardService boardService;
    
    @Autowired
    private WeatherService weatherService;
    
    @Autowired
    private JimocService jimocService;

    @Before
    public void setUp() throws Exception {
    	//this.mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
    	
    	// 컨트롤러 단위로 테스트할 때는 Mock 객체로 필요한 의존성을 주입해야 함
        this.controllerMockMvc = MockMvcBuilders.standaloneSetup(new BoardController(boardService, weatherService, jimocService)).build();
    }
    
    @BeforeClass
    public static void printBeanName() {
      // 모든 빈의 이름을 가져옴 
      ApplicationContext context = new AnnotationConfigApplicationContext(BoardControllerTestConfig.class);
      String[] beanNames = context.getBeanDefinitionNames();
      
      // 빈 이름 출력
      System.out.println("[BoardController Test에서 생성된 Bean]");
      for (String beanName : beanNames) {
    	  Object bean = context.getBean(beanName);
    	  if(Mockito.mockingDetails(bean).isMock()) {
    		System.out.println("Bean Name : " + beanName + " - Mock Bean 입니다.");  
    	  }
    	  else {
    		  System.out.println("Bean Name :" +beanName);
    	  }
          
          
      }
    }
    

    
    @Test
    @TestDesc("/boardList.do의 forward 테스트")
    public void givenBoardListRequest_whenForwarding_thenReturnsBoardSPA() throws Exception {
        // 테스트 코드 작성
    	this.controllerMockMvc.perform(get("/boardList.do"))        // controller의 /test URI를 get방식으로 호출
                //.andDo(print())                    // 결과를 print. MockMvcBuilders의 alwaysDo(print())로 대체 가능
                .andExpect(status().isOk())
                .andExpect(forwardedUrl("board/SPA"));
    }
    
    @Test
    public void givenBoardList2Request_whenForwarding_thenReturnsBoardMain2() throws Exception {
    	this.controllerMockMvc.perform(get("/boardList2.do"))
    			//.andDo(print())
    			.andExpect(status().isOk())
    			.andExpect(forwardedUrl("board/main2"));
    }
    
    @Test
    public void givenMapDataRequest_whenFetching_thenReturnsOk() throws Exception {
    	this.controllerMockMvc.perform(get("/getMapData.do")) //GET 요청
    			//.andDo(printLimitedResponse(5)) //결과 출력
    			.andExpect(status().isOk()) //HTTP 상태 코드 200 확인
    			.andExpect(content().contentType("application/json; charset=utf-8")); //응답 Content-Type 확인
//    			.andExpect(jsonPath("$").isArray()) //JSON 응답이 배열인지 확인
//    			.andExpect(jsonPath("$[0].b_num").exists()) //응답 데이터 중 첫 번째 객체에 "id"필드가 존재하는지 확인
//    			.andExpect(jsonPath("$[1].b_address").exists())
//    			.andExpect(jsonPath("$[2].b_jimoc").exists())
//    			.andExpect(jsonPath("$[3].b_city_name").exists());
    }
    
    @Test
    public void givenWeatherLabelRequest_whenFetchingWeather_thenReturnsOk() throws Exception {
    	this.controllerMockMvc.perform(get("/getWeatherByLabel.do"))
    			.andExpect(status().isOk());
    }
    
    @Test
    public void givenJimocLabelRequest_whenFetchingJimoc_thenReturnsOk() throws Exception {
    	this.controllerMockMvc.perform(get("/getJimocByLabel.do")
    			.param("label", "TestLabel"))
    			.andExpect(status().isOk());
    }
    
    @Test
    public void givenAreaRequest_whenFetchingManageDocument_thenReturnsOk() throws Exception {
    	this.controllerMockMvc.perform(get("/getManageDocumentByArea.do")
    			.param("area", "TestArea"))
    			.andExpect(status().isOk());
    }
    
    private ResultHandler printLimitedResponse(int limit) {
    	return result -> {
    		String content = result.getResponse().getContentAsString();
    		String[] lines = content.split("\n");
    		
    		int lineCount = Math.min(lines.length, limit);
    		for(int i=0; i<lineCount; i++) {
    			System.out.println(lines[i]);
    		}
    	};
    }
}


