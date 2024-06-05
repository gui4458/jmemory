package com.green.jmemory.album.service;

import com.green.jmemory.album.VO.AlbumVO;

import java.util.List;

public interface AlbumService {
    List<AlbumVO> albumSelect (int cateCode);

    int deleteAlbum(int albumCode);
    int updateAlbumName(int albumCode);
}
