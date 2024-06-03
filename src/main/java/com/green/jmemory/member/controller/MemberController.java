package com.green.jmemory.member.controller;

import com.green.jmemory.member.service.MemberService;
import com.green.jmemory.member.vo.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class MemberController {
    @Resource(name="memberService")
    private MemberService memberService;

    @PostMapping("/joinMember")
    public void joinMember(@RequestBody MemberVO memberVO){
        System.out.println("join실행~~~~~~~~");
        System.out.println(memberVO);
//        memberService.joinMember(memberVO);
    }

    @PostMapping("/idOverlappingChk")
    public int idOverlappingChk(@RequestBody Map<String,String> memberId){
        System.out.println("아이디중복체크");
        System.out.println(memberId.get("memberId"));
        return memberService.idOverlappingChk(memberId.get("memberId"));
    }
    @PostMapping("/nicknameOverlappingChk")
    public int nicknameOverlappingChk(@RequestBody Map<String,String> memberNickname){
        System.out.println("닉네임중복체크");
        System.out.println(memberNickname.get("memberNickname"));
        return memberService.nicknameOverlappingChk(memberNickname.get("memberNickname"));
    }
}
