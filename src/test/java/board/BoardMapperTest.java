package board;

import static org.junit.Assert.assertFalse;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.hamcrest.CoreMatchers.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import egovframework.example.board.service.BoardVO;
import egovframework.example.board.service.ManageDocVO;
import egovframework.example.board.service.impl.BoardMapper;

@Configuration
@ImportResource(locations = {
		"classpath:egovframework/spring/context-datasource.xml",
		"classpath:egovframework/spring/context-mapper.xml",
		"classpath:egovframework/sqlmap/example/mappers/BoardMapper.xml"
})
@MapperScan(basePackageClasses = BoardMapper.class)
class BoardMapperTestConfig {
	
}

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(
	classes = {
			BoardMapperTestConfig.class
	}
)
public class BoardMapperTest {

	@Autowired
	private BoardMapper boardMapper;
	
	
	
	@Test
	public void givenValidRequest_whenSelectedListCalled_thenReturnsExpectedResults() throws Exception {
		// Arrange: 모든 지역에 대한 보드 데이터를 가져옵니다.
		List<BoardVO> resultList = boardMapper.selectList();
		
		// Assert: 결과 리스트가 null이 아닌지 확인합니다.
	    assertNotNull("Result list should not be null", resultList);
	    
	    // Assert: 결과 리스트의 크기가 전체 데이터크기인 1060개인지 확인합니다.
		assertTrue("Result list size should be 1060",resultList.size() == 1060);
		
		// Assert: 가져온 데이터의 첫 번째 요소의 b_num 필드가 1인지 확인합니다.
		assertTrue("First Element of Result list b_num field should be 1",resultList.get(0).getB_num().equals("1"));
	}
	
	@Test
	public void givenEmptyArea_whenGetBoardByAreaCalled_thenReturnsNonEmptyList() throws Exception {
		// Arrange: 주어진 문자열이 없으면 모든 지역에 대한 보드 데이터를 가져옵니다.
		List<ManageDocVO> resultList = boardMapper.getBoardByArea("");
		
		// Assert: 결과 리스트가 null이 아닌지 확인합니다.
	    assertNotNull("Result list should not be null", resultList);
	    
	    // Assert: 결과 리스트의 크기가 0보다 큰지 확인합니다.
	    assertFalse("Result list should contain elements", resultList.isEmpty());
	}
	
	@Test
	public void givenOneSamMyeonArea_whenGetBoardByAreaCalled_thenReturnsOneSamMyeonList() throws Exception {
		// Arrange: 주어진 원삼면 지역에 대한 보드 데이터를 가져옵니다.
	    List<ManageDocVO> resultList = boardMapper.getBoardByArea("원삼면");

	    // Assert: 결과 리스트가 null이 아닌지 확인합니다.
	    assertNotNull("Result list should not be null", resultList);
	    
	    // Assert: 결과 리스트의 크기가 0보다 큰지 확인합니다.
	    assertFalse("Result list should contain elements", resultList.isEmpty());

	    // Assert: 각 ManageDocVO 객체의 b_input_address 필드가 "원삼면"을 포함하는지 확인합니다.
	    for (ManageDocVO vo : resultList) {
	    	String address = vo.getB_input_address();
	    	// '원삼면'이 포함되는지 확인
	        assertThat("Address should contain '원삼면'", address, containsString("원삼면"));
	        // 다른 지역은 포함되지 않아야 하는지 확인
	        assertFalse("Address should not contain '남사읍'", address.contains("남사읍"));
	        assertFalse("Address should not contain '백암면'", address.contains("백암면"));
	        assertFalse("Address should not contain '동부동'", address.contains("동부동"));
	        assertFalse("Address should not contain '양지면'", address.contains("양지면"));
	        assertFalse("Address should not contain '포곡읍'", address.contains("포곡읍"));
	    }
	}
}
