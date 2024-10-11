package egovframework.example.board.service.impl;

import java.util.List;

import egovframework.example.board.service.BoardVO;
import egovframework.example.board.service.ManageDocVO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("boardMapper")
public interface BoardMapper {
	List<BoardVO> selectList() throws Exception;

	List<ManageDocVO> getBoardByArea(String area);
}
