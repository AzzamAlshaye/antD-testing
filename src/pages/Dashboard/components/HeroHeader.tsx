import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const HeroHeader: React.FC<{ userName: string }> = ({ userName }) => {
  return (
    <div className="relative z-[10000] mx-auto w-full max-w-[1440px] px-10">
      <div className="pt-[44px] pb-6">
        <Title
          level={2}
          className="!m-0 text-white"
          style={{
            fontFamily: "Rubik",
            fontWeight: 600,
            fontSize: 35,
            lineHeight: "41px",
          }}
        >
          Good morning, {userName}
        </Title>
      </div>
    </div>
  );
};

export default HeroHeader;
