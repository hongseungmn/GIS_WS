package egovframework.example.board.service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Map;

public interface WeatherService {

	String getWeatherByLabel(String label) throws UnsupportedEncodingException, IOException;
	
}
