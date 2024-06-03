package com.green.jmemory.member.service;

import com.green.jmemory.member.vo.MemberVO;

public interface MemberService {
    //회원가입
    void joinMember(MemberVO memberVO);

    //아이디 중복확인
    int idOverlappingChk(String memberId);

    //닉네임 중복 확인
    int nicknameOverlappingChk(String memberNickname);

    MemberVO login(String memberId);
}
