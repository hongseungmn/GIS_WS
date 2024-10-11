package egovframework.example.people.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.example.board.service.impl.BoardMapper;
import egovframework.example.people.service.PeopleService;
import egovframework.example.people.service.People_VO;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("peopleService")
public class PeopleServiceImpl extends EgovAbstractServiceImpl implements PeopleService {

	@Resource(name="peopleMapper")
	private PeopleMapper peopleMapper;
	
	@Override
	public List<?> selectPeopleList() {
		return peopleMapper.selectPeopleList();
	}

	@Override
	public Map<String, Integer> selectPeopleListByLabel(String label) {
		List<People_VO> peopleList =  peopleMapper.selectPeopleListByLabel(label);
		Map<String, Integer> total = new HashMap<String, Integer>();
		int tot = 0;
		int m_tot = 0;
		int w_tot = 0;
		int children = 0;
		int adult = 0;
		int elder = 0;
		for(People_VO vo : peopleList) {
//			System.out.println(vo);
			tot += vo.getTot_tot();
			m_tot += vo.getM_tot();
			w_tot += vo.getW_tot();
			children += vo.getM_children() + vo.getW_children();
			adult += vo.getM_adult() + vo.getW_adult();
			elder += vo.getM_elder() + vo.getW_elder();
		}
		total.put("tot", tot);
		total.put("m_tot", m_tot);
		total.put("w_tot", w_tot);
		total.put("children", children);
		total.put("adult", adult);
		total.put("elder", elder);
		return total;
	}

	@Override
	public List<Map<?, ?>> selectPeopleSIList() {
		return peopleMapper.selectPeopleSIList();
	}

	@Override
	public List<?> selectPeopleListBySetting(String sex, String age) {
		return peopleMapper.selectPeopleListBySetting(sex, age);
	}

	@Override
	public List<?> selectPeopleSIListBySetting(String sex, String age) {
		return peopleMapper.selectPeopleSIListBySetting(sex, age);
	}

	@Override
	public List<?> selectPeopleCityListBySetting(String sex, String age) {
		return peopleMapper.selectPeopleCityListBySetting(sex, age);
	}

	@Override
	public List<?> selectPeopleCityList() {
		return peopleMapper.selectPeopleCityList();
	}

	@Override
	public List<?> selectPeopleByCode(String code) {
		return peopleMapper.selectPeopleByCode(Integer.parseInt(code));
	}

}
