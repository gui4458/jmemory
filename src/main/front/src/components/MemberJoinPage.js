import axios from "axios";
import React, { useState, useEffect } from "react";

const MemberJoinPage = ({ navigate }) => {
    const [isIdValid, setIsIdValid] = useState(false);
    const [isNicknameValid, setIsNicknameValid] = useState(false);
    const [member, setMember] = useState({
        memberId: "",
        memberPw: "",
        memberName: "",
        memberNickname: "",
        memberGender: "남",
        memberEmail: "",
        memberTel: "",
        memberAddr: "",
        postCode: "",
        addrDetail: ""
    });
    const [emailDomain, setEmailDomain] = useState("선택");
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customEmailDomain, setCustomEmailDomain] = useState("");
    const [telFirst, setTelFirst] = useState("");
    const [telMiddle, setTelMiddle] = useState("");
    const [telLast, setTelLast] = useState("");
    const [kakaoMapLoaded, setKakaoMapLoaded] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.async = true;
        script.onload = () => setKakaoMapLoaded(true);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const badWords = ["sex", "fuck"];

    const validateMemberId = (value) => {
        const lowercaseValue = value.toLowerCase();
        if (value !== '') {
            if (badWords.some(word => lowercaseValue.includes(word))) {
                return "부적절한 단어가 포함되어 있습니다.";
            }
            if (!/^[a-zA-Z0-9]{6,}$/.test(value)) {
                return "아이디는 영문자 및 숫자 6자 이상이어야 합니다.";
            }
        }
        return "";
    };

    const validateMemberPw = (value) => {
        if (value !== '') {
            if (!/(?=.*[a-zA-Z])(?=.*\d).{6,}/.test(value)) {
                return "비밀번호는 영문자, 숫자를 포함하여 6자 이상이어야 합니다.";
            }
        }
        return "";
    };

    const validateMemberNickname = (value) => {
        if (value !== '') {
            if (badWords.some(word => value.includes(word))) {
                return "부적절한 단어가 포함되어 있습니다.";
            }
            if (/^([ㄱ-ㅎㅏ-ㅣ])+$/.test(value)) {
                return "사용 할 수 없는 닉네임 입니다.";
            }
        }
        return "";
    };

    const validateMemberName = (value) => {
        if (value !== '') {
            if (!/^([ㄱ-ㅎㅏ-ㅣ가-힣])+$/.test(value)) {
                return "한글로 입력해주세요.";
            }
            if (!/^[가-힣]+$/.test(value)) {
                return "이름을 확인 해주세요.";
            }
        }
        return "";
    };

    const validateMemberEmail = (value) => {
        if (value !== '') {
            if (!value || emailDomain === "선택" || (showCustomInput && !customEmailDomain)) {
                return "이메일을 입력해주세요.";
            }
        }
        return "";
    };

    const validateMemberTel = (value) => {
        if (value !== '') {
            if (!/^01[016789]{1}-?[0-9]{3,4}-?[0-9]{5}$/.test(value)) {
                return "올바른 전화번호를 입력해주세요.";
            }
        }
        return "";
    };

    const validateConfirmPassword = (value) => {
        if (value !== member.memberPw) {
            return "비밀번호가 일치하지 않습니다.";
        }
        return "";
    };

    const validateForm = () => {
        const errors = {};

        errors.memberId = validateMemberId(member.memberId);
        errors.memberPw = validateMemberPw(member.memberPw);
        errors.memberName = validateMemberName(member.memberName);
        errors.memberNickname = validateMemberNickname(member.memberNickname);
        errors.memberEmail = validateMemberEmail(member.memberEmail);
        errors.memberTel = validateMemberTel(member.memberTel);
        errors.confirmPassword = validateConfirmPassword(confirmPassword);
        setErrors(errors);
        return Object.values(errors).every(error => !error);
    };

    const handleMemberIdChange = (e) => {
        setMember({ ...member, memberId: e.target.value });
        setErrors({ ...errors, memberId: validateMemberId(e.target.value) });
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setErrors({ ...errors, confirmPassword: validateConfirmPassword(value) });
    };

    const handleMemberPwChange = (e) => {
        const value = e.target.value;
        setMember({ ...member, memberPw: value });
        setErrors({ ...errors, memberPw: validateMemberPw(value), confirmPassword: validateConfirmPassword(confirmPassword) });
    };

    const handleMemberNicknameChange = (e) => {
        setMember({ ...member, memberNickname: e.target.value });
        setErrors({ ...errors, memberNickname: validateMemberNickname(e.target.value) });
    };

    const handleMemberNameChange = (e) => {
        setMember({ ...member, memberName: e.target.value });
        setErrors({ ...errors, memberName: validateMemberName(e.target.value) });
    };

    const handleEmailChange = (e) => {
        const emailLocalPart = e.target.value.split("@")[0];
        const domain = showCustomInput ? customEmailDomain : emailDomain;
        setMember({
            ...member,
            memberEmail: emailLocalPart + (domain !== "선택" ? `@${domain}` : "")
        });
        setErrors({ ...errors, memberEmail: validateMemberEmail(emailLocalPart + (domain !== "선택" ? `@${domain}` : "")) });
    };

    const handleDomainChange = (e) => {
        const selectedDomain = e.target.value;
        setShowCustomInput(selectedDomain === "custom");
        setEmailDomain(selectedDomain);

        if (selectedDomain !== "custom" && selectedDomain !== "선택") {
            setMember({
                ...member,
                memberEmail: member.memberEmail.split("@")[0] + "@" + selectedDomain
            });
        } else {
            setMember({
                ...member,
                memberEmail: member.memberEmail.split("@")[0]
            });
        }
        setErrors({ ...errors, memberEmail: validateMemberEmail(member.memberEmail.split("@")[0] + (selectedDomain !== "선택" ? `@${selectedDomain}` : "")) });
    };

    const handleCustomEmailDomainChange = (e) => {
        const customDomain = e.target.value;
        setCustomEmailDomain(customDomain);
        setMember({
            ...member,
            memberEmail: member.memberEmail.split("@")[0] + "@" + customDomain
        });
        setErrors({ ...errors, memberEmail: validateMemberEmail(member.memberEmail.split("@")[0] + "@" + customDomain) });
    };

    const handleTelChange = (e, part) => {
        const value = e.target.value;
        if (part === "first") setTelFirst(value);
        if (part === "middle") setTelMiddle(value);
        if (part === "last") setTelLast(value);

        setMember({
            ...member,
            memberTel:
                (part === "first" ? value : telFirst) +
                (part === "middle" ? value : telMiddle) +
                (part === "last" ? value : telLast)
        });
        setErrors({
            ...errors, memberTel: validateMemberTel(
                (part === "first" ? value : telFirst) +
                (part === "middle" ? value : telMiddle) +
                (part === "last" ? value : telLast)
            )
        });
    };

    const handleAddressSearch = () => {
        if (kakaoMapLoaded) {
            new window.daum.Postcode({
                oncomplete: function (data) {
                    const fullAddress = data.address;
                    let extraAddress = "";

                    if (data.addressType === "R") {
                        if (data.bname !== "") {
                            extraAddress += data.bname;
                        }
                        if (data.buildingName !== "") {
                            extraAddress +=
                                extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
                        }
                        fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
                    }

                    setMember({
                        ...member,
                        postCode: data.zonecode,
                        memberAddr: fullAddress
                    });
                }
            }).open();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.post("/member/join", member);

                if (response.status === 200) {
                    alert("회원가입이 완료되었습니다!");
                    navigate("/");
                }
            } catch (error) {
                alert("회원가입 중 오류가 발생했습니다.");
            }
        } else {
            console.log("Form validation failed:", errors);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div>회원가입</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            아이디 :{" "}
                            <input
                                maxLength={20}
                                type="text"
                                value={member.memberId}
                                onChange={handleMemberIdChange}
                                readOnly={isIdValid}
                            />
                            {errors.memberId && <div className="error">{errors.memberId}</div>}
                            <button
                                type="button"
                                onClick={() => {
                                    if (isIdValid) {
                                        setIsIdValid(false);
                                    } else {
                                        if (/^[a-zA-Z0-9]{6,}$/.test(member.memberId)) {
                                            axios.post("/idOverlappingChk", { memberId: member.memberId })
                                                .then((response) => {
                                                    if (response.data === 1) {
                                                        alert("해당 아이디는 이미 존재합니다.\n다시 입력해주세요.")
                                                    } else {
                                                        alert("사용가능한 아이디 입니다.")
                                                        setIsIdValid(true);
                                                    }
                                                })
                                                .catch((error) => {
                                                    console.error("에러 발생:", error);
                                                })
                                        }
                                    }
                                }}
                            >
                                {isIdValid ? "다시 입력" : "중복검사"}
                            </button>
                        </div>
                        <div className="col-12">
                            비밀번호 :{" "}
                            <input
                                maxLength={20}
                                type="password"
                                value={member.memberPw}
                                onChange={handleMemberPwChange}
                            />
                            {errors.memberPw && <div className="error">{errors.memberPw}</div>}
                        </div>
                        <div className="col-12">
                            비밀번호 확인 :{" "}
                            <input
                                maxLength={20}
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                        </div>
                        <div className="col-6">
                            이름 :{" "}
                            <input
                                maxLength={10}
                                type="text"
                                value={member.memberName}
                                onChange={handleMemberNameChange}
                            />
                            {errors.memberName && <div className="error">{errors.memberName}</div>}

                        </div>
                        <div className="col-6">
                            닉네임 :{" "}
                            <input
                                maxLength={20}
                                type="text"
                                value={member.memberNickname}
                                onChange={handleMemberNicknameChange}
                                readOnly={isNicknameValid}
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    if (isNicknameValid) {
                                        setIsNicknameValid(false);
                                    } else {
                                        if (member.memberNickname !== '') {
                                            if (badWords.some(word => member.memberNickname.includes(word))) {
                                                return "부적절한 단어가 포함되어 있습니다.";
                                            }
                                            if (/^([ㄱ-ㅎㅏ-ㅣ])+$/.test(member.memberNickname)) {
                                                return "사용 할 수 없는 닉네임 입니다.";
                                            }
                                            axios.post("/nicknameOverlappingChk", { memberNickname: member.memberNickname })
                                                .then((response) => {
                                                    if (response.data === 1) {
                                                        alert("해당 닉네임은 이미 존재합니다.\n다시 입력해주세요.")
                                                    } else {
                                                        alert("사용가능한 닉네임 입니다.")
                                                        setIsNicknameValid(true);
                                                    }
                                                })
                                                .catch((error) => {
                                                    console.error("에러 발생:", error);
                                                })
                                        }
                                        }
                                }}
                            >
                                {isNicknameValid ? "다시 입력" : "중복검사"}
                            </button>
                            {errors.memberNickname && <div className="error">{errors.memberNickname}</div>}
                        </div>
                        <div className="col-6">
                            성별 : 남{" "}
                            <input
                                type="radio"
                                value="남"
                                name="gender"
                                checked={member.memberGender === "남"}
                                onChange={(e) =>
                                    setMember({ ...member, memberGender: e.target.value })
                                }
                            />
                            여{" "}
                            <input
                                type="radio"
                                value="여"
                                name="gender"
                                checked={member.memberGender === "여"}
                                onChange={(e) =>
                                    setMember({ ...member, memberGender: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-6">
                            Email :{" "}
                            <input
                                maxLength={20}
                                type="text"
                                value={member.memberEmail.split("@")[0]}
                                placeholder="example"
                                onChange={handleEmailChange}
                            />
                            @
                            <select value={emailDomain} onChange={handleDomainChange}>
                                <option value="선택">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="custom">직접입력</option>
                            </select>
                            {showCustomInput && (
                                <input
                                    type="text"
                                    placeholder="직접 입력"
                                    value={customEmailDomain}
                                    onChange={handleCustomEmailDomainChange}
                                />
                            )}
                            {errors.memberEmail && <div className="error">{errors.memberEmail}</div>}
                        </div>
                        <div className="col-12">
                            TEL :{" "}
                            <select value={telFirst} onChange={(e) => handleTelChange(e, "first")}>
                                <option value="">선택</option>
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="017">017</option>
                            </select>
                            -
                            <input
                                type="text"
                                maxLength={4}
                                value={telMiddle}
                                onChange={(e) => handleTelChange(e, "middle")}
                            />
                            -
                            <input
                                type="text"
                                maxLength={4}
                                value={telLast}
                                onChange={(e) => handleTelChange(e, "last")}
                            />
                            {errors.memberTel && <div className="error">{errors.memberTel}</div>}
                        </div>
                        <div className="col-12">
                            ADDR :
                            <input
                                type="text"
                                readOnly
                                value={member.memberAddr}
                                onChange={(e) => setMember({ ...member, memberAddr: e.target.value })}
                            />
                            <button onClick={handleAddressSearch}>주소검색</button>
                            <input
                                type="text"
                                value={member.postCode}
                                placeholder="우편번호"
                                readOnly
                            />
                            <input
                                type="text"
                                value={member.addrDetail}
                                placeholder="상세주소"
                                onChange={(e) => setMember({ ...member, addrDetail: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div>ID : {member.memberId}</div>
                            <div>PW : {member.memberPw}</div>
                            <div>NAME : {member.memberName}</div>
                            <div>GENDER : {member.memberGender}</div>
                            <div>EMAIL : {member.memberEmail}</div>
                            <div>TEL : {member.memberTel}</div>
                            <div>ADDR : {member.memberAddr}</div>
                            <div>우편번호 : {member.postCode}</div>
                            <div>상세주소 : {member.addrDetail}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary" onClick={() => {
                                if (validateForm()) {
                                    axios.post('/joinMember', member)
                                        .then(response => {
                                            alert(`${member.memberId}님 환영합니다.`)
                                            navigate("/")
                                        }).catch(error => {

                                        });
                                }
                            }}>
                                회원가입
                            </button>
                            <button className="btn btn-primary" onClick={() => navigate("/")}>
                                메인으로
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MemberJoinPage;