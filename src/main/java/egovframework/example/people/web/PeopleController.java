package egovframework.example.people.web;

import java.util.List;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import egovframework.example.people.service.PeopleService;

/**
 * 지역별 인구수 요청을 담당하는 컨트롤러 
 * @author admin
 *
 */
@Controller
public class PeopleController {
	
	private Logger Logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "peopleService")
	private PeopleService peopleService;

	
	/**
	 * 지역별 인구의 모든 데이터를 가져오는 컨트롤러 
	 * @return
	 * @throws JsonProcessingException
	 */
	@RequestMapping(value="/getPeopleData.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getPeopleData() throws JsonProcessingException {
		Logger.debug("[getPeopleData.do] ===============");
		ObjectMapper mapper = new ObjectMapper();
		List<?> list = peopleService.selectPeopleList();
		String s = mapper.writeValueAsString(list);
		return s;
	}
	
	@RequestMapping(value="/getPeopleDataSI.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getPeopleDataSI() throws JsonProcessingException {
		Logger.debug("[getPeopleDataSI.do] ===============");
		ObjectMapper mapper = new ObjectMapper();
		List<?> list2 = peopleService.selectPeopleSIList();
		String s2 = mapper.writeValueAsString(list2);
		return s2;
	}
	
	@RequestMapping(value="/getPeopleDataCity.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getPeopleDataCity() throws JsonProcessingException {
		Logger.debug("[getPeopleDataCity.do] ===============");
		ObjectMapper mapper = new ObjectMapper();
		List<?> list2 = peopleService.selectPeopleCityList();
		String s2 = mapper.writeValueAsString(list2);
		return s2;
	}
	
	@RequestMapping(value="/getPeopleDataBySetting.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getPeopleDataBySetting(@RequestParam String sex, @RequestParam String age) throws JsonProcessingException {
		Logger.debug("[getPeopleDataBySex.do] ===============");
		Logger.debug("[param] : SEX - " + sex);
		Logger.debug("[param] : AGE - " + age);
		ObjectMapper mapper = new ObjectMapper();
		List<?> list = peopleService.selectPeopleListBySetting(sex, age);
		String s = mapper.writeValueAsString(list);
		return s;
	}
	
	@RequestMapping(value="/getPeopleDataSIBySetting.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getPeopleDataSIBySetting(@RequestParam String sex, @RequestParam String age) throws JsonProcessingException {
		Logger.debug("[getPeopleDataBySex.do] ===============");
		Logger.debug("[param] : SEX - " + sex);
		Logger.debug("[param] : AGE - " + age);
		ObjectMapper mapper = new ObjectMapper();
		List<?> list = peopleService.selectPeopleSIListBySetting(sex, age);
		String s = mapper.writeValueAsString(list);
		return s;
	}
	
	@RequestMapping(value="/getPeopleDataCityBySetting.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getPeopleDataCityBySetting(@RequestParam String sex, @RequestParam String age) throws JsonProcessingException {
		Logger.debug("[getPeopleDataCityBySetting.do] ===============");
		Logger.debug("[param] : SEX - " + sex);
		Logger.debug("[param] : AGE - " + age);
		ObjectMapper mapper = new ObjectMapper();
		List<?> list = peopleService.selectPeopleCityListBySetting(sex, age);
		String s = mapper.writeValueAsString(list);
		return s;
	}
	
	@RequestMapping(value="/getPeopleDataByCode.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getPeopleDataByCode(@RequestParam String code) throws JsonProcessingException {
		Logger.debug("[getPeopleDataByCode.do] ===============");
		Logger.debug("[param] : CODE - " + code);
		ObjectMapper mapper = new ObjectMapper();
		List<?> list = peopleService.selectPeopleByCode(code);
		String s = mapper.writeValueAsString(list);
		Logger.debug("return String : " + s);
		return s;
	}
	
	@RequestMapping(value="/getPersonByLabel.do", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getPersonByLabel(@RequestParam String label) throws JsonProcessingException {
		Logger.debug("[getPersonByLabel.do] ==============");
		Logger.debug("[param] : Label - " + label);
		Map<String, Integer> map = peopleService.selectPeopleListByLabel(label);
		ObjectMapper mapper = new ObjectMapper();
		String s = mapper.writeValueAsString(map);
		return s;
	}
	
}
