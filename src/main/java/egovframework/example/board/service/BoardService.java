package egovframework.example.board.service;

import java.util.List;

public interface BoardService {
	public List<BoardVO> selectBoardList() throws Exception;

	public List<ManageDocVO> getBoardByArea(String area);
}
