package com.green.jmemory.album.controller;

import com.green.jmemory.album.VO.AlbumVO;
import com.green.jmemory.album.service.AlbumService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AlbumController {
    @Resource(name = "albumService")
    private AlbumService albumService;

    @GetMapping("/selectAlbum/{cateCode}")
    public List<AlbumVO> selectAlbum(@PathVariable (name = "cateCode") int cateCode){
        System.out.println(cateCode);
        return albumService.albumSelect(cateCode);
    }

    @DeleteMapping("/delete/{albumCode}")
    public void deleteAlbum(@PathVariable (name = "albumCode") int albumCode){
        System.out.println(albumCode);
    }

    @PostMapping("/updateAlbumName/{albumCode}")
    public void updateAlbumName(@PathVariable(name = "albumCode") int albumCode){
        System.out.println(albumCode);
    }

}
