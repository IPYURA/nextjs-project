"use client";

import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import classes from "./TextModal.module.css";
import { pretendard } from "@/app/fonts";
import ModalCloseButton from "../UI/ModalCloseButton";
import { PreventScroll, AllowScroll } from "../ScrollBan/HandleScroll";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const TextModal = ({ open, onClose }: ModalProps) => {
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

  if (!open) return null;
  return ReactDOM.createPortal(
    <div className={`${classes.container} ${pretendard.className}`}>
      <div className={classes.modalWrap}>
        <ModalCloseButton onClose={onClose} location={24} />
        <div className={classes.content}>
          &nbsp;나는 완벽을 향한 결벽적 충동을 느껴왔다. 이 원고는 나의 피가
          잉크로 떨어져서 쓰인 글이다. 내가 이것을 논문 형식으로 투고하지 않는
          것은, 나는 증명하려고 쓰는 것이 아니라, 선언하려고 쓰는 것이기
          때문이다. 나는 이 원고가 논문처럼 읽히길 바라지 않고, 불멸의 경전처럼
          읽히길 바란다. 경전에서, 무언가는 &#39;설명&#39;되지 않는다. 오직
          &#39;계시&#39;처럼 내세워질 뿐이다. 나는 바로 그런 것을 원한다.
          그리고, 그러한 스타일만이 이 원고의 미학적 완성도를 가장 높은
          곳으로까지 끌어올릴 수 있는 유일한 서술 형식이라고 생각한다.
          <br />
          <br />
          &nbsp;나는, 만으로 갓 스물세 살이 되었던 2016년 9월 1일부터 2023년 3월
          26일까지 약 6년 7개월, 그리고 나의 어림상으로 대략 19,000시간에 걸쳐
          본 연구를 수행하였으며, 이 단 하나의 작업에 말 그대로 나의 전 존재를
          바쳤다. 나는 형언하기 어려운 강렬한 이끌림에 의해 광적으로 몰두했다.
          쓰러질 때까지 연구했으며, 쓰러지고 나서 깨어나면 다시 쓰러질 때까지
          연구했다. 한 인간으로서 내가 할 수 있는 모든 것들을 다 했으며, 어느 것
          하나조차도 상상을 초월할 정도로 극도로 섬세하게 신경 쓰지 않은 것이
          없고, 그러므로 극한까지 나 자신을 무자비하게 몰아붙여 끝없는 사투를
          벌였다고 느낀다. 나는, 나만의 무언가를 해봤다. 이 점에서 나는 진정으로
          숭고한 영적 만족감을 느낀다.
          <br />
          <br />
          &nbsp;이 원고를 집필하면서 내가 추구했었던 궁극적 목표는 이데아들의
          표현이다. 그 외의 모든 것들은 불결한 군더더기들로 느껴졌다. 그러므로,
          나는 이 원고의 모든 명제들을 만연체가 아니라 간결체로 서술했다. 본
          서문을 포함해서 이 원고에는 쓰여진 것들보다 쓰여지지 않은 것들이 훨씬
          많다. 쓰여진 것들 각각은, 거기에 쓰여지지 않은 것들까지도 극도로
          농축된 것이다. 단 하나의 명제가 쓰여지기 위해, 도대체 얼마나 많은 다른
          아이디어들이 더없이 깊게 숙고되어야 하는가를 생각해보면, 정신이
          아찔해진다. 그렇다. 실제로는 온갖 무수한 요소들이 미시적으로 더
          긴밀하게 얽히고설킨, 훨씬 더 거대하고 복잡한 세계의 그물망이 있다.
          그러므로, 만약 누군가가 내가 구축한 논리적 규정들 속에만 갇혀 비좁은
          그 안을 배회한다면, 그것은 결코 나의 의도가 올바르게 전달된 것이라고
          볼 수 없으리라. 오히려, 나는 감각을 무한대로 개방시켜두라고
          표현해두겠다.
          <br />
          <br />
          &nbsp;비언어라는 심연을, 언어와 언어들의 체계라는 조악한 도구들로써
          완전하게 복제하고 모사할 수는 없다. 그러나 그렇다고 하더라도, 나는
          내가 인식한 것들을 표현하기 위해서, 언어와 언어들의 체계라는 도구들을
          사용하지 않을 수도 없었다. 그러므로, 나는 기껏해야 내가 보았던 그 모든
          것들을 흐릿하게 스케치하여 아주 어렴풋이 암시만 할 수 있을 뿐이다.
          그것에 대해 나는 근원적인 외로움과 서글픔을 느낀다. 그러나, 이러한
          조언을 덧붙여두는 것까지가 결국 내가 할 수 있는 최선이라고 느낀다.
          이제, 나는 극히 깊고 풍부한, 훨씬 더 다채로운 연관들과 함의들을,
          독자들이 스스로 헤아려볼 수 있기를 바랄 뿐이다.
          <br />
          <br />
          &nbsp;그 모든 어리석은 날들이 있었기에, 나는 조금이나마 더 현명해질 수
          있었다. 그러나 나는 앞으로도 여전히 계속 어리석을 것이다. 하지만
          기꺼이 그 어리석음들을 즐기고 싶다.
          <br />
          <br />
          &nbsp;완벽이란, 더 이상 더할 게 없는 상태가 아니라, 더 이상 뺄 게 없는
          상태를 의미한다. 그러므로, 이제 나는 나머지 모든 나의 목소리들을 저
          거대하고 시커먼 심해 속에 집어삼켜지도록, 던져버린다.
          <br />
          <br />
          <div>- 2023년 대한민국에서, 조원준</div>
        </div>
      </div>
    </div>,
    document.getElementById("global-modal") as HTMLElement
  );
};

export default TextModal;
