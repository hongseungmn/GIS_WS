package egovframework.example.board.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.example.board.service.JimocService;
import egovframework.example.board.service.JimocVO;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("jimocService")
public class JimocServiceImpl extends EgovAbstractServiceImpl implements JimocService {
	
	@Resource(name = "jimocMapper")
	JimocMapper jimocMapper;

	@Override
	public List<JimocVO> getJimocByLabel(String label) {
		return jimocMapper.getJimocByLabel(label);
	}

}
