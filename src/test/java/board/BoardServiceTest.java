package board;

import org.junit.Before;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import egovframework.example.board.service.BoardVO;
import egovframework.example.board.service.ManageDocVO;
import egovframework.example.board.service.impl.BoardMapper;
import egovframework.example.board.service.impl.BoardServiceImpl;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
public class BoardServiceTest {

    @Mock
    private BoardMapper boardMapper; // Mock으로 생성할 객체

    @InjectMocks
    private BoardServiceImpl boardService; // Mock을 주입할 실제 서비스 객체

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.openMocks(this); // Mock 초기화

    }

    @Test
    public void givenMockedBoardMapper_whenSelectBoardListCalled_thenReturnExpectedList() throws Exception {
        // Mock이 반환할 값 설정
    	 BoardVO doc1 = new BoardVO(/* 필드 초기화 */);
    	 BoardVO doc2 = new BoardVO(/* 필드 초기화 */);
    	 BoardVO doc3 = new BoardVO(/* 필드 초기화 */);
        List<BoardVO> mockList = Arrays.asList(doc1, doc2, doc3); // 예시 데이터
        when(boardMapper.selectList()).thenReturn(mockList);

        // BoardService의 selectBoardList() 메소드 호출
        List<?> result = boardService.selectBoardList(); // 반환 타입에 맞게 수정

        // 결과 검증
        assertNotNull(result);
        assertEquals(3, result.size()); // 리스트의 크기 검증
    }
    
    @Test
    public void givenMockedBoardMapper_whenGetBoardListCalledWithLabel_thenReturnExceptedList() throws Exception {
        ManageDocVO doc1 = new ManageDocVO(/* 필드 초기화 */);
        ManageDocVO doc2 = new ManageDocVO(/* 필드 초기화 */);
        ManageDocVO doc3 = new ManageDocVO(/* 필드 초기화 */);
    	List<ManageDocVO> mockList = Arrays.asList(doc1, doc2, doc3);
    	when(boardMapper.getBoardByArea("원삼면")).thenReturn(mockList);
    	
    	List<?> result=  boardService.getBoardByArea("원삼면");
    	
    	assertNotNull(result);
    	assertEquals(3, result.size());
    }
}