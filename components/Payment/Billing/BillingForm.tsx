"use client";

import { pretendard } from "@/app/fonts";
import classes from "./BillingForm.module.css";
import Plus from "@/public/svgs/plus.svg";
import RadioButton from "@/public/svgs/radio-button.svg";
import RadioButtonHollow from "@/public/svgs/radio-button-hollow.svg";
import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import { loadBiilingAuth } from "@/libs/toss";
import { getBillingInfo } from "@/actions/get-billing-info";
import { CardClient } from "@/models/card";
import Spinner from "@/components/UI/Spinner";
import deleteCard from "@/actions/delete-card";
import payRecurringPayment from "@/actions/pay-recurring-payment";
import Modal from "@/components/UI/Modal";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import CheckBox from "@/components/UI/CheckBox";

const BillingForm = () => {
  const [selected, setSelected] = useState<string>("");
  const [currentPrice, setCurrentPrice] = useState<string | null>(null);
  const [data, setData] = useState<CardClient | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [billingCheck, setBillingCheck] = useState<boolean>(false);

  const { data: session, update } = useSession();

  const router = useRouter();

  const handleClickCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = useCallback((message: string) => {
    setIsModalOpen(true);
    setModalMessage(message);
  }, []);

  useEffect(() => {
    startTransition(async () => {
      const info = await getBillingInfo(session?.user.id!);
      setData(info);
    });
  }, []);

  const handleClickDeleteButton = useCallback(async () => {
    startTransition(async () => {
      await deleteCard(data?.id!);
      const info = await getBillingInfo(session?.user.id!);
      setData(info);
    });
  }, [data]);

  const handleClickPayButton = useCallback(async () => {
    if (!data?.id) {
      return openModal("결제 수단을 등록해주세요.");
    }
    if (!currentPrice) {
      return openModal("결제 옵션을 선택해주세요.");
    }
    if (parseInt(currentPrice) < 5000)
      return openModal("5,000원 이상 입력해주세요.");

    try {
      await payRecurringPayment(currentPrice, data?.customerKey!);
    } catch (error) {
      if (error instanceof Error) {
        openModal(error.message);
      } else {
        openModal("오류가 발생했습니다.");
      }
      return;
    }
    update();
    router.push("/profile");
  }, [currentPrice, data]);

  // const handleClickPayButton = async () => {
  //   await payRecurringPayment(currentPrice, data?.customerKey!);
  // }

  // const addComma = (price: string) => {
  //   let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   return returnString;
  // };

  // const handleChangePoints = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   let str = value.replaceAll(/\D/g, "");
  //   setInputPrice(str);
  //   setCurrentPrice(str);
  //   if (selected !== "input") {
  //     setSelected("input");
  //   }
  // };

  const handleChangePrice = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentPrice(e.currentTarget.value);
    setSelected(e.currentTarget.value);
  };

  const billingBtnEvent = () => {
    if (billingCheck === false) {
      setBillingCheck(true);
    } else {
      setBillingCheck(false);
    }
  };

  return (
    <>
      <div className={`${classes.box} ${pretendard.className}`}>
        <div className={classes.title}>결제 옵션</div>
        <div className={classes.selectPrice}>
          <button
            type="button"
            className={
              selected === "9900"
                ? classes.selectedButton
                : classes.defaultButton
            }
            onClick={(e) => handleChangePrice(e)}
            value="9900"
          >
            <div className={classes.buttonContainer}>
              <div className={classes.buttonTitle}>월 정기구독</div>
              <div className={classes.buttonPrice}>9,900원</div>
            </div>
            <div className={classes.svgRadioButton}>
              {selected === "9900" ? (
                <RadioButton
                  style={{ width: "100%", height: "100%" }}
                ></RadioButton>
              ) : (
                <RadioButtonHollow
                  style={{ width: "100%", height: "100%" }}
                ></RadioButtonHollow>
              )}
            </div>
          </button>
          <button
            type="button"
            className={
              selected === "99000"
                ? classes.selectedButton
                : classes.defaultButton
            }
            onClick={(e) => handleChangePrice(e)}
            value="99000"
          >
            <div className={classes.buttonContainer}>
              <div className={classes.buttonTitle}>연 정기구독</div>
              <div className={classes.buttonPrice}>
                99,000원 <span>&#40;월 8,250원&#41;</span>
              </div>
            </div>
            <div className={classes.svgRadioButton}>
              {selected === "99000" ? (
                <RadioButton
                  style={{ width: "100%", height: "100%" }}
                ></RadioButton>
              ) : (
                <RadioButtonHollow
                  style={{ width: "100%", height: "100%" }}
                ></RadioButtonHollow>
              )}
            </div>
          </button>
        </div>
        <div className={classes.title}>결제 수단</div>
        {isPending || !data ? (
          <div className={classes.cardButton}>
            <Spinner width={"3rem"} height={"3rem"}></Spinner>
          </div>
        ) : data.id ? (
          <div className={classes.cardBox}>
            <div className={classes.card}>
              <div className={classes.svgRadioButton}>
                <RadioButton
                  style={{ width: "100%", height: "100%" }}
                ></RadioButton>
              </div>
              <div className={classes.cardNumber}>
                카드번호: {data.cardNumber}
              </div>
            </div>
            <button
              className={classes.deleteButton}
              onClick={handleClickDeleteButton}
            >
              삭제
            </button>
          </div>
        ) : (
          <div className={classes.cardButton}>
            <button
              type="button"
              onClick={() => loadBiilingAuth(data.customerKey!)}
            >
              <div className={classes.svgPlus}>
                <Plus style={{ width: "100%", height: "100%" }}></Plus>
              </div>
            </button>
            <div>카드를 등록해주세요</div>
          </div>
        )}
      </div>
      <div className={classes.agreementBox}>
        <CheckBox
          id={"check3"}
          checked={billingCheck}
          size={20}
          borderColor="C1C9C9"
          onChange={billingBtnEvent}
        ></CheckBox>
        <div className={classes.agreementText}>
          &#40;필수&#41; 본 서비스는 정기구독 서비스로, 이용기한 만료 시 자동
          갱신됩니다.
        </div>
      </div>
      <div className={`${classes.buttonBox} ${pretendard.className}`}>
        <button
          type="button"
          className={classes.payButton}
          onClick={handleClickPayButton}
          disabled={!(currentPrice && data?.id && billingCheck)}
        >
          결제하기
        </button>
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleClickCloseModal}
        message={modalMessage}
      ></Modal>
    </>
  );
};

export default BillingForm;
