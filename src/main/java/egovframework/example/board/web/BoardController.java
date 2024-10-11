package egovframework.example.board.web;

import java.util.List;


import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import egovframework.example.board.service.BoardService;
import egovframework.example.board.service.BoardVO;
import egovframework.example.board.service.JimocService;
import egovframework.example.board.service.JimocVO;
import egovframework.example.board.service.ManageDocVO;
import egovframework.example.board.service.WeatherService;

@Controller
public class BoardController {
	
	private Logger Logger = LoggerFactory.getLogger(this.getClass());
	
	/*
	 * 생성자 주입 방식이 권장되는 이유
	 * 
	 * @componentScan을 통해 빈을 생성하고 di하는 방식을 살펴보아야 한다
	 * [의존성 주입 절차]
	 * 1. bean을 컨트롤할 bean factory(application context) 생성
	 * 2. context를 위한 설정 값들을 읽고 파싱하여 세팅
	 * 3. class loader 객체를 생성하고 class loader 객체의 메소드를 사용해 모든 클래스를 돌며 bean으로 등록해야 하는 클래스 리스트 생성
	 * 4. 생성한 리스트를 for문으로 돌면서 bean 클래스 생성을 위한 메타 데이터들을 정리, 해당 클래스의 필드에서 autowired어노테이션 붙은 필드 리스트 개수 등을 정리
	 * 5. 4번에서 정리된 bean class들의 메타 데이터 리스트들을 bean factory 객체 필드에 set(bean factory는 bean 들의 총괄 매니저므로 정보를 알아야 함!)
	 * 6. 메타 데이터를 참고하면서 bean 객체들을 생성
	 * 7. 모두 생성하면 앞서 정리한 autowired 된 필드 리스트들을 돌면서 생성된 객체를 참조하도록 set
	 * 8. 어플리케이션 로직 시작
	 * 
	 * 6,7,8번을 보면 모든 bean을 생성한 후 autowired로 어노테이션된 필드들에 앞서 생성된 bean 객체를 이어주고, 그 다음 어플리케이션 로직이 시작된다
	 * 이 때문에 필드 주입이나 수정자 주입을 사용한 상황에선 어플리케이션 로직 상의 순환 참조되는 잘못된 설계를 파악하지 못한 채 빈을 생성하기 때문에, 로직이 실행되고 나서야 어플레케이션이 삑사리가 나는 것!
	 * 하지만 생성자 주입을 하게 되면 bean객체를 막 생성하려는 시점에 아직 생성되지 않은 빈을 찾게 되면서 오류가 발생하므로, 로직이 실행되기 전에 순환참조 같은 잘못된 설계를 사전 방지가 가능하다
	 */
	
	private final BoardService boardService;
	
	private final WeatherService weatherService;
	
	private final JimocService jimocService;
	
	@Autowired
	public BoardController(BoardService boardService, WeatherService weatherService, JimocService jimocService) {
		this.boardService = boardService;
		this.weatherService = weatherService;
		this.jimocService = jimocService;
	}

	
	@RequestMapping(value="/boardList.do", method = RequestMethod.GET)
	public String selectList() throws Exception {
		Logger.debug("[boardList.do] ===============");
		return "board/SPA";
	}
	
	@RequestMapping(value="/boardList2.do", method = RequestMethod.GET)
	public String selectList2() throws Exception {
		Logger.debug("[boardList.do] ===============");
		return "board/main2";

	}
	
	@RequestMapping(value="/getMapData.do", 
					method = RequestMethod.GET, 
					produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getMapDate() throws JsonProcessingException, Exception {
		ObjectMapper mapper = new ObjectMapper();
		List<?> list = boardService.selectBoardList();
		String s = mapper.writeValueAsString(list);
		return s;
	}
	
	@RequestMapping(value="/getWeatherByLabel.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody // JSON 응답을 명시
	public String getWeatherByLabel(String label) throws JsonProcessingException, Exception {
		Logger.info("label : ---------" + label);
		ObjectMapper mapper = new ObjectMapper();
		String map = weatherService.getWeatherByLabel(label);
		return map;
	}
	
	@RequestMapping(value = "/getJimocByLabel.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody 
	public String getJimocByLabel(String label) throws JsonProcessingException { 
		Logger.info("[getJimocByLabel.do] ============");
		Logger.info("[param] : Label - " + label);
		List<JimocVO> list = jimocService.getJimocByLabel(label);
		ObjectMapper mapper = new ObjectMapper();
		String s = mapper.writeValueAsString(list);
		return s;
	}
	
	@RequestMapping(value = "/getManageDocumentByArea.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getManageDocumentByArea(String area) throws JsonProcessingException {
		Logger.info("[getManageDocumentByArea.do] ===========");
		Logger.info("[param] : Area - " + area);
		List<ManageDocVO> list = boardService.getBoardByArea(area);
		ObjectMapper mapper = new ObjectMapper();
		String s = mapper.writeValueAsString(list);
		return s;
	}

}
