import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useIsNotMobile  = () => {
  // useMediaQuery 훅을 통해 현재 브라우저의 뷰포트가 최대 1024px인지 확인하는 불리언 형태의 변수를 생성한다.
  const isNotMobile = useMediaQuery({ maxWidth: 767 });

  // 이후 useState 훅을 통해 해당 컴포넌트에서 desktop 뷰포트인지 식별할 수 있도록 상태를 선언한다.
  const [notMobile, setNotMobile] = useState<boolean>(false);

  // useEffect 훅을 통해 useMediaQuery로 선언한 불리언 형태의 변수가 변경되면 해당 컴포넌트의 상태가 변화되게 설정한다.
  useEffect(() => {
    setNotMobile(isNotMobile);
  }, [isNotMobile]);

  return { notMobile };
};

export default useIsNotMobile;
