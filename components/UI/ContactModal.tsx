"use client";

import ReactDOM from "react-dom";
import React, {
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import classes from "./ContactModal.module.css";
import { pretendard } from "@/app/fonts";
import CheckBox from "./CheckBox";
import LongFormButton from "./LongFormButton";
import ModalCloseButton from "./ModalCloseButton";
import { contactUs } from "@/actions/contact-us";
// import { isValidPhone, isValidEmail } from "@/utils/user-info-check";
import ContactSecondModal from "./ContactSecondModal";
import { PreventScroll, AllowScroll } from "../ScrollBan/HandleScroll";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}
interface IFormData {
  currentName: string;
  currentInstitution?: string;
  currentEmail: string;
  currentPhone: string;
  currentInquiry: string;
  currentInquiryContent: string;
}

const ContactModal = ({ open, onClose }: ModalProps) => {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isTeam, setIsTeam] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>();
  const [validName, setValidName] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validPhone, setValidPhone] = useState<boolean>(false);
  const [validInquiry, setValidInquiry] = useState<boolean>(false);
  const [validInquiryContent, setValidInquiryContent] =
    useState<boolean>(false);
  const [termCheck, setTermCheck] = useState<boolean>(false);
  const [rawPhone, setRawPhone] = useState<string>("");
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);

  const [formData, setFormData] = useState<IFormData>({
    currentName: "",
    currentInstitution: "",
    currentEmail: "",
    currentPhone: "",
    currentInquiry: "",
    currentInquiryContent: "",
  });

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (open) {
      const prevScrollY = PreventScroll();
      return () => {
        AllowScroll(prevScrollY);
      };
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [open]);

  const buttonAbleCheck = () => {
    validName &&
    validPhone &&
    validEmail &&
    validInquiry &&
    validInquiryContent &&
    termCheck
      ? setButtonDisable(false)
      : setButtonDisable(true);
  };

  useEffect(() => {
    isTeam
      ? validName &&
        validPhone &&
        validEmail &&
        validInquiry &&
        validInquiryContent &&
        termCheck &&
        formData.currentInstitution!.length > 0
        ? setButtonDisable(false)
        : setButtonDisable(true)
      : buttonAbleCheck();
  }, [formData, termCheck, isTeam]);

  const instInputRef = useRef<HTMLInputElement>(null);

  const handleClickCloseSecondModal = useCallback(() => {
    setIsSecondModalOpen(false);
  }, []);
  const openModal = useCallback(() => {
    setIsSecondModalOpen(true);
  }, []);

  //------------------------
  if (!open) return null;

  const addHypen = (phoneNumber: string) => {
    let returnString = phoneNumber
      ?.toString()
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, "$1-$2-$3");
    return returnString;
  };

  const textValidCheck = (text: string, minlength: number): boolean => {
    return text.length < minlength ? false : true;
  };

  const onClickLabel = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    console.log(e.currentTarget.innerHTML);

    if (e.currentTarget.innerHTML === "팀") {
      setIsTeam(true);
      instInputRef.current?.focus();
    } else {
      setIsTeam(false);
    }
  };

  const onChangeInputVal = (
    dataCategory: string
  ): ((
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void) => {
    return (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { value } = e.target;
      switch (dataCategory) {
        case "name":
          setFormData({ ...formData, currentName: value });
          setValidName(textValidCheck(value, 2));
          break;
        case "institution":
          setFormData({ ...formData, currentInstitution: value });
          break;
        case "inquiry":
          setFormData({ ...formData, currentInquiry: value });
          setValidInquiry(textValidCheck(value, 4));
          break;
        case "inquiryContent":
          setFormData({ ...formData, currentInquiryContent: value });
          setValidInquiryContent(textValidCheck(value, 8));
          break;
      }
    };
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let phoneNumber = value.replace(/\D/g, "");
    setFormData({ ...formData, currentPhone: value });
    setValidPhone(textValidCheck(value, 9));
    setRawPhone(addHypen(phoneNumber));
  };

  const onChangeEmailCheckValid = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-za-z0-9\-]+/;
    const { value } = e.target;
    setFormData({ ...formData, currentEmail: value });
    let slicedDomain = value.split("@");
    let patternCheck = pattern.test(value);
    patternCheck === true && slicedDomain[0].length >= 2
      ? setValidEmail(true)
      : setValidEmail(false);
  };

  const onChangeChecked = () => {
    setTermCheck(!termCheck);
  };

  return ReactDOM.createPortal(
    <>
      <div className={`${classes.wrap} ${pretendard.className}`}>
        <div className={classes.modalWrap}>
          <ContactSecondModal
            open={isSecondModalOpen}
            onClose={handleClickCloseSecondModal}
          />
          <ModalCloseButton
            onClose={onClose}
            location={screenWidth! > 768 ? 40 : 16}
          />
          <form action={contactUs}>
            <div className={classes.title}>
              Contact Us
              <div className={classes.category}>
                <input
                  className={classes.radio}
                  type="radio"
                  name="type"
                  id="personal"
                  value="personal"
                  defaultChecked
                />
                <label
                  className={classes.labelForRadio}
                  htmlFor="personal"
                  onClick={onClickLabel}
                >
                  개인
                </label>
                <input
                  className={classes.radio}
                  type="radio"
                  name="type"
                  id="team"
                  value="team"
                />
                <label
                  className={classes.labelForRadio}
                  htmlFor="team"
                  onClick={onClickLabel}
                >
                  팀
                </label>
              </div>
            </div>

            <div className={classes.scrollWrap}>
              <div className={classes.formSection}>
                <div className={classes.cell}>
                  <label htmlFor="name">이름 *</label>
                  <input
                    className={
                      validName
                        ? `${classes.valid}`
                        : formData.currentName.length === 0
                        ? ""
                        : `${classes.invalid}`
                    }
                    type="text"
                    id="name"
                    value={formData.currentName}
                    onChange={onChangeInputVal("name")}
                    required
                    name="name"
                    placeholder="이름을 입력하세요."
                  />
                </div>
                <div className={classes.cell}>
                  <label htmlFor="organization">
                    소속기관 {isTeam ? "*" : ""}
                  </label>
                  <input
                    ref={instInputRef}
                    type="text"
                    id="organization"
                    value={formData.currentInstitution}
                    onChange={onChangeInputVal("institution")}
                    name="organization"
                    placeholder="학교/회사/팀명을 입력하세요."
                    required={isTeam}
                    className={
                      isTeam
                        ? formData.currentInstitution!.length > 0
                          ? `${classes.valid}`
                          : `${classes.invalid}`
                        : ""
                    }
                  />
                </div>
              </div>
              <div className={classes.formSection}>
                <div className={classes.cell}>
                  <label htmlFor="phone">전화번호 *</label>
                  <input
                    className={
                      validPhone
                        ? `${classes.valid}`
                        : formData.currentPhone.length === 0
                        ? ""
                        : `${classes.invalid}`
                    }
                    value={rawPhone}
                    onChange={onChangePhone}
                    type="text"
                    maxLength={13}
                    id="phone"
                    required
                    name="phone"
                    placeholder="010-1234-5678"
                  />
                </div>
                <div className={classes.cell}>
                  <label htmlFor="email">이메일 *</label>
                  <input
                    className={
                      validEmail
                        ? `${classes.valid}`
                        : formData.currentEmail.length === 0
                        ? ""
                        : `${classes.invalid}`
                    }
                    type="text"
                    id="email"
                    value={formData.currentEmail}
                    onChange={onChangeEmailCheckValid}
                    required
                    name="email"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <div className={`${classes.formSection} ${classes.vertical}`}>
                <label htmlFor="title">문의사항 제목 *</label>
                <input
                  className={
                    validInquiry
                      ? `${classes.valid}`
                      : formData.currentInquiry.length === 0
                      ? ""
                      : `${classes.invalid}`
                  }
                  type="text"
                  id="title"
                  value={formData.currentInquiry}
                  onChange={onChangeInputVal("inquiry")}
                  required
                  name="title"
                  placeholder="4자 이상 입력하세요."
                />
              </div>
              <div className={`${classes.formSection} ${classes.vertical}`}>
                <label htmlFor="content">문의사항 내용 *</label>
                <textarea
                  className={
                    validInquiryContent
                      ? `${classes.valid} ${classes.textarea} ${pretendard.className}`
                      : formData.currentInquiryContent.length === 0
                      ? `${classes.textarea} ${pretendard.className}`
                      : `${classes.invalid} ${classes.textarea} ${pretendard.className}`
                  }
                  name="content"
                  id="content"
                  value={formData.currentInquiryContent}
                  onChange={onChangeInputVal("inquiryContent")}
                  placeholder="8자 이상 입력하세요."
                />
              </div>
            </div>

            <div className={classes.checkWrap}>
              <CheckBox
                id={"all-check"}
                checked={termCheck}
                size={screenWidth! > 768 ? 24 : 16}
                borderColor="2b2f2f"
                onChange={onChangeChecked}
              />
              <div>
                <button type="button" onClick={openModal}>
                  개인정보 수집 및 이용
                </button>
                에 동의합니다.
              </div>
            </div>
            <LongFormButton disabled={buttonDisable}>
              <div className={classes.submit}>제출하기</div>
            </LongFormButton>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("global-modal") as HTMLElement
  );
};

export default ContactModal;
