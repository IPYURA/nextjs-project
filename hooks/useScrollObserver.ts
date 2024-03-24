import { useRef, useState, useEffect } from "react";

export const useScrollAnimation = () => {
  const [isInViewport, setIsInViewport] = useState<boolean | null>(null);
  const [isAboveViewport, setIsAboveViewport] = useState<boolean | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(ref.current);
    if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단
    console.log("시작")
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // console.log("intersectionRatio : " + entry.intersectionRatio);
        console.log("isInViewport : " + !(!entry.isIntersecting));
        // console.log("isAboveViewport : " + !(!(entry.boundingClientRect.y < entry.rootBounds?.height! / 2)));
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타났을 경우
          setIsInViewport(true);
        } else {
          // 요소가 뷰포트를 벗어난 경우
          setIsInViewport(false);
        }
        if (entry.boundingClientRect.y < entry.rootBounds?.height! / 2) {
          setIsAboveViewport(true);
        } else {
          setIsAboveViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 1 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current); // 요소 관찰 시작

    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);

  return { isInViewport, isAboveViewport, ref };
};
