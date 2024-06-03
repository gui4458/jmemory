package com.green.jmemory.cate.service;

import com.green.jmemory.cate.VO.CateVO;
import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("cateService")
public class CateServiceImpl implements CateService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<CateVO> cateGorySelect(){
        return sqlSession.selectList("cateMapper.cateGorySelect");
    }
}
