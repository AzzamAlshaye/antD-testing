// src/pages/Dashboard/components/HeroHeader.tsx
import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const HeroHeader: React.FC<{ userName: string }> = ({ userName }) => {
  return (
    <div className="relative mx-auto w-full">
      <div className="pt-[8px] pb-3">
        <Title
          level={2}
          className="!m-0 !text-white"
          style={{
            color: "#fff",
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
