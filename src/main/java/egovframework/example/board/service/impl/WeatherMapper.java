package egovframework.example.board.service.impl;

import java.util.Map;

import org.apache.ibatis.annotations.Param;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("weatherMapper")
public interface WeatherMapper {
	Map<String, String> getWeatherCode(@Param("label") String label);
}
