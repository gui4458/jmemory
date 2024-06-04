package com.green.jmemory.member.vo;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberVO {
    private String memberId;
    private String memberPw;
    private String memberName;
    private String memberNickname;
    private String memberGender;
    private String memberEmail;
    private String memberTel;
    private String memberRoll;
    private String memberAddr;
    private String postCode;
    private String addrDetail;

    public MemberVO(String memberId, String memberName) {
        this.memberId = memberId;
        this.memberName = memberName;
    }
}