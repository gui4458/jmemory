package com.green.jmemory.album.service;

import com.green.jmemory.album.VO.AlbumVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("albumService")
public class AlbumServiceImpl implements AlbumService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<AlbumVO> albumSelect(int cateCode) {
        return sqlSession.selectList("albumMapper.albumSelect" , cateCode);
    }

    @Override
    public int deleteAlbum(int albumCode) {
        return sqlSession.delete("albumMapper.deleteAlbum", albumCode);
    }

    @Override
    public int updateAlbumName(int albumCode) {
        return sqlSession.update("albumMapper.updateAlbumName", albumCode);
    }
}
