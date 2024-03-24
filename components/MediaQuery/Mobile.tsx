"use client";

import useIsMobile from "@/hooks/useIsMobile";

const Mobile = ({ children }: { children: React.ReactNode }) => {
  const { mobile } = useIsMobile();
  return mobile === null ? null : mobile ? children : null;
};

export default Mobile;
