package egovframework.example.people.service.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import egovframework.example.people.service.People_VO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("peopleMapper")
public interface PeopleMapper {

	List<?> selectPeopleList();
	
	List<People_VO> selectPeopleListByLabel(String label);

	List<Map<?,?>> selectPeopleSIList();

	List<?> selectPeopleListBySetting(@Param("sex") String sex,@Param("age") String age);

	List<?> selectPeopleSIListBySetting(@Param("sex") String sex,@Param("age") String age);

	List<?> selectPeopleCityListBySetting(@Param("sex") String sex,@Param("age") String age);

	List<?> selectPeopleCityList();

	List<?> selectPeopleByCode(int code);

}
