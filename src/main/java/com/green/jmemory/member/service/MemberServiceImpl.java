package com.green.jmemory.member.service;

import com.green.jmemory.member.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("memberService")
public class MemberServiceImpl implements MemberService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //회원가입
    @Override
    public void joinMember(MemberVO memberVO) {
        sqlSession.insert("memberMapper.joinMember",memberVO);
    }

    //아이디 중복체크
    @Override
    public int idOverlappingChk(String memberId) {
        return sqlSession.selectOne("memberMapper.idOverlappingChk",memberId);
    }
    //닉네임 중복 체크
    @Override
    public int nicknameOverlappingChk(String memberNickname) {
        return sqlSession.selectOne("memberMapper.nicknameOverlappingChk",memberNickname);
    }
}
