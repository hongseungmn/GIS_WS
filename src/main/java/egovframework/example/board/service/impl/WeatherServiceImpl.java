package egovframework.example.board.service.impl;

import java.io.BufferedReader;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import egovframework.example.board.service.WeatherService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("weatherService")
public class WeatherServiceImpl extends EgovAbstractServiceImpl implements WeatherService{
	
	@Resource(name="weatherMapper")
	private WeatherMapper weatherMapper;

	@Override
	public String getWeatherByLabel(String label) throws IOException {
		Map<String,String> result = weatherMapper.getWeatherCode(label);
		System.out.println(result);
		LocalDateTime now = LocalDateTime.now();
		String formatedNow = now.format(DateTimeFormatter.ofPattern("yyyyMMdd,HHmm"));
		System.out.println("result.nx : " + String.valueOf(result.get("x")));
		System.out.println("result.ny : " + String.valueOf(result.get("y")));
		
		
		String resultMap = WeatherAPI.getWeather(formatedNow.split(",")[0], "0500", String.valueOf(result.get("x")), String.valueOf(result.get("y")));
		return resultMap;
	}

}

class WeatherAPI {
	private static String url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
	private static String key = "j5rebbLWl1Ef3cH4QlVjI20yhBhMi8OP%2B5PSFlwTfWCBiDA6VHDXi8wLUHLjH231pryh46CFAtZhRyLxtzWh%2Bw%3D%3D";
	private static String type = "json";
	
	public static String getWeather(String baseDate, String baseTime, String nx, String ny) throws IOException {
		StringBuilder query = new StringBuilder(url);
		query.append("?" + URLEncoder.encode("ServiceKey","UTF-8") + "="+key);
		query.append("&" + URLEncoder.encode("dataType","UTF-8") + "=" + URLEncoder.encode(type, "UTF-8")); //데이터 타입
		query.append("&" + URLEncoder.encode("nx","UTF-8") + "=" + URLEncoder.encode(nx, "UTF-8")); //위도
		query.append("&" + URLEncoder.encode("ny","UTF-8") + "=" + URLEncoder.encode(ny, "UTF-8")); //경도
		query.append("&" + URLEncoder.encode("base_date","UTF-8") + "=" + URLEncoder.encode(baseDate, "UTF-8")); //날짜
		query.append("&" + URLEncoder.encode("base_time","UTF-8") + "=" + URLEncoder.encode(baseTime, "UTF-8")); //시간
        /*
         * GET방식으로 전송해서 파라미터 받아오기
         */
        URL url = new URL(query.toString());

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        System.out.println(sb.toString());
        
		return sb.toString();
	}
}
