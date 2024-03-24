// import dynamic from "next/dynamic";
// import mobileOK from "@/libs/mok_Key_Manager_v1.0.2";
// import crypto from "crypto";

export async function POST(request) {
  // const mobileOK= require("");
  // const mobileOK = dynamic(()=> import("@/libs/mok_Key_Manager_v1.0.2"));
  let mobileOK;
  try {
    mobileOK = await require("@/libs/mok_Key_Manager_v1.0.2");
  } catch (error) {
    console.log("mok_Key_Manager 파일의 경로가 올바르지 않습니다.");
  }

  /* 2. 본인확인 인증결과 경로설정 */
  /* 2-1 본인확인 인증결과 MOKResult API 요청 URL */
  const MOK_RESULT_REQUEST_URL =
    "https://scert.mobile-ok.com/gui/service/v1/result/request"; // 개발
  // const MOK_RESULT_REQUEST_URL = 'https://cert.mobile-ok.com/gui/service/v1/result/request';  // 운영

  /* 2-1 본인확인 Node.js서버 매핑 URL */
  const requestUri = "https://본인확인 요청 URL/mok/mok_std_request"; // mok 인증 요청 URI
  const resultUri = "https://본인확인 요청 URL/mok/mok_std_result"; // mok 결과 요청 URI

  /* 2-3 결과 수신 후 전달 URL 설정 - "https://" 포함한 URL 입력 */
  const resultUrl = "api/mok/mok_std_result";

  /* 3. 본인확인 서비스 API 설정 */
  /* 3-1 키파일 경로(본인확인 키정보파일 Path)설정 */
  /* 키파일은 반드시 서버의 안전한 로컬경로에 별도 저장. 웹URL 경로에 파일이 있을경우 키파일이 외부에 노출될 수 있음 주의 */
  // const keyPath = "../keys/mok_keyInfo.dat";
  // /* 3-2 키파일 비밀번호(본인확인 키파일 패스워드)설정 */
  // const password = "livincar123";
  mobileOK.keyInit();

  // 이용기관 거래ID생성시 이용기관별 유일성 보장을 위해 설정, 이용기관식별자는 이용기관코드 영문자로 반드시 수정
  const clientPrefix = "EOPTEST";
  /* 1. 본인확인-표준창 거래요청정보 생성  */

  /* 1.1 이용기관 거래ID 생성, 20자 이상 40자 이내 이용기관 고유 트랜잭션ID (예시) 이용기관식별자+UUID, ...  */
  // - 본인확인-표준창 거래ID 는 유일한 값이어야 하며 기 사용한 거래ID가 있는 경우 오류 발생
  // - 이용기관이 고유식별 ID로 유일성을 보장할 경우 고객이 이용하는 ID사용 가능
  let sampleClientTxId = clientPrefix + uuid();

  /* 1.2 인증 결과 검증을 위한 거래 ID 세션 저장 (권고) */
  // 동일한 세션내 요청과 결과가 동일한지 확인 및 인증결과 재사용 방지처리, "MOKResult" 응답결과 처리시 필수 구현
  // 별도의 세션서버등을 통해 sampleClientTxId 값 보관

  /* 1.3 본인확인-표준창 거래요청정보 생성  */
  const clientTxId = sampleClientTxId + "|" + getCurrentDate();
  console.log(clientTxId);
  /* 1.4 본인확인-표준창 거래요청정보 암호화 */
  const encClientTxId = await mobileOK.RSAEncrypt(clientTxId);

  /* 1.5 본인확인-표준창 거래요청정보 설정 */
  const authRequestObject = {
    /* 본인확인 서비스 용도 */
    /* 01001 : 회원가입, 01002 : 정보변경, 01003 : ID찾기, 01004 : 비밀번호찾기, 01005 : 본인확인용, 01006 : 성인인증, 01007 : 상품구매/결제, 01999 : 기타 */
    usageCode: "01001",
    /* 본인확인 서비스 ID */
    serviceId: mobileOK.getServiceId(),
    /* 암호화된 본인확인 거래 요청 정보 */
    encryptReqClientInfo: encClientTxId,
    /* 이용상품 코드 */
    /* 이용상품 코드, telcoAuth : 휴대폰본인확인 (SMS인증시 인증번호 발송 방식 "SMS")*/
    /* 이용상품 코드, telcoAuth-LMS : 휴대폰본인확인 (SMS인증시 인증번호 발송 방식 "LMS")*/
    serviceType: "telcoAuth",
    /* 본인확인 결과 타입 */
    /* 본인확인 결과 타입, "MOKToken"  : 개인정보 응답결과를 이용기관 서버에서 본인확인 서버에 요청하여 수신 후 처리 */
    /* 본인확인 결과 타입, "MOKResult" : 개인정보 응답결과를 이용자 브라우져로 수신 후 처리 (이용시 반드시 재사용 방지처리 개발) */
    retTransferType: "MOKToken",
    // , 'retTransferType' : 'MOKResult'
    /* 본인확인 결과 수신 URL */
    returnUrl: resultUrl,
  };

  /* 1.6 거래 요청 정보 JSON 반환 */
  // return Response.json(JSON.stringify(authRequestObject));
}

function uuid() {
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}

/* 본인확인 거래 ID(요청 시간) 생성 예제 함수 */
function getCurrentDate() {
  let newDate = new Date();
  newDate.toLocaleString("ko-kr");

  let year = newDate.getFullYear();
  let mon = newDate.getMonth() + 1;
  let date = newDate.getDate();

  let hour = newDate.getHours();
  let min = newDate.getMinutes();
  let sec = newDate.getSeconds();

  const reqDate =
    year +
    (mon < 10 ? `0${mon}` : `${mon}`) +
    (date < 10 ? `0${date}` : `${date}`) +
    (hour < 10 ? `0${hour}` : `${hour}`) +
    (min < 10 ? `0${min}` : `${min}`) +
    (sec < 10 ? `0${sec}` : `${sec}`);

  return reqDate;
}

function getOldTime(oldTime) {
  let year = oldTime.getFullYear();
  let mon = oldTime.getMonth() + 1;
  let date = oldTime.getDate();

  let hour = oldTime.getHours();
  let min = oldTime.getMinutes() + 10;
  let sec = oldTime.getSeconds();

  if (min >= 60) {
    min = min - 60;

    hour = hour + 1;
  }
  if (hour >= 24) {
    hour = hour - 24;

    date = date + 1;
  }
  if (date > new Date(year, mon, 0).getDate()) {
    date = date - new Date(year, mon, 0).getDate();

    mon = mon + 1;
  }
  if (mon >= 13) {
    mon = mon - 12;

    year = year + 1;
  }

  const reqDate =
    year +
    (mon < 10 ? `0${mon}` : `${mon}`) +
    (date < 10 ? `0${date}` : `${date}`) +
    (hour < 10 ? `0${hour}` : `${hour}`) +
    (min < 10 ? `0${min}` : `${min}`) +
    (sec < 10 ? `0${sec}` : `${sec}`);

  return reqDate;
}

// /* 본인확인 서버 통신 예제 함수 */
// async function sendPost(targetUrl, encryptMOKKeyToken) {
//   try {
//     let responseData = await axios({
//       method: "post",
//       url: targetUrl,
//       data: encryptMOKKeyToken,
//     });

//     return responseData.data;
//   } catch (AxiosError) {
//     console.log("본인확인 서버 통신URL이 잘 못 되었습니다.");
//   }
// }
