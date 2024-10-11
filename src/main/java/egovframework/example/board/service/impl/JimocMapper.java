package egovframework.example.board.service.impl;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import egovframework.example.board.service.JimocVO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("jimocMapper")
public interface JimocMapper {

	List<JimocVO> getJimocByLabel(@Param("label") String label);

}
