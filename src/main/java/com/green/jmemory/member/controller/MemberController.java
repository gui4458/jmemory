package com.green.jmemory.member.controller;

import com.green.jmemory.member.service.MemberService;
import com.green.jmemory.member.vo.MemberVO;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/member")
public class MemberController {
    @Resource(name="memberService")
    private MemberService memberService;

    @PostMapping("/joinMember")
    public void joinMember(@RequestBody MemberVO memberVO){
        System.out.println("join 실행");
        System.out.println(memberVO);
        memberService.joinMember(memberVO);
    }

    @PostMapping("/idOverlappingChk")
    public int idOverlappingChk(@RequestBody Map<String,String> memberId){
        System.out.println("아이디 중복 체크");
        System.out.println(memberId.get("memberId"));
        return memberService.idOverlappingChk(memberId.get("memberId"));
    }

    @PostMapping("/nicknameOverlappingChk")
    public int nicknameOverlappingChk(@RequestBody Map<String,String> memberNickname){
        System.out.println("닉네임 중복 체크");
        System.out.println(memberNickname.get("memberNickname"));
        return memberService.nicknameOverlappingChk(memberNickname.get("memberNickname"));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> loginData, HttpSession session) {
        String memberId = loginData.get("memberId");
        String memberPw = loginData.get("memberPw");

        //사용자 정보를 가져옴
        MemberVO member = memberService.login(memberId);

        if (member != null && member.getMemberPw().equals(memberPw)) {
            // 로그인 성공 시 세션에 사용자 정보 저장
            session.setAttribute("memberInfo", member);
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        new SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().getAuthentication());
        System.out.println("로그아웃 완료");
    }

    @GetMapping("/status")
    public ResponseEntity<?> status(HttpSession session) {
        String memberId = (String) session.getAttribute("memberId");
        if (memberId != null) {
            MemberVO member = memberService.login(memberId);
            return ResponseEntity.ok(Map.of("isAuthenticated", true, "memberInfo", member));
        } else {
            return ResponseEntity.ok(Map.of("isAuthenticated", false));
        }
    }
}