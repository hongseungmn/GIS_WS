package egovframework.example.people.service;

import java.util.List;
import java.util.Map;

public interface PeopleService {
	public List<?> selectPeopleList();

	public Map<String, Integer> selectPeopleListByLabel(String label);
	
	public List<Map<?, ?>> selectPeopleSIList();

	public List<?> selectPeopleListBySetting(String sex, String age);

	public List<?> selectPeopleSIListBySetting(String sex, String age);

	public List<?> selectPeopleCityListBySetting(String sex, String age);

	public List<?> selectPeopleCityList();

	public List<?> selectPeopleByCode(String code);
}
