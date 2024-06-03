package com.green.jmemory.cate.controller;

import com.green.jmemory.cate.VO.CateVO;
import com.green.jmemory.cate.service.CateService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
