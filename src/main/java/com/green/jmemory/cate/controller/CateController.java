package com.green.jmemory.cate.controller;

import com.green.jmemory.cate.VO.CateVO;
import com.green.jmemory.cate.service.CateService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CateController {
    @Resource(name="cateService")
    private CateService cateService;

    @GetMapping("/selectCate")
    public List<CateVO> selectCate(){
        System.out.println("!!!!");
        return cateService.cateGorySelect();
    }
}
