import React from "react";
import { Tag } from "./tag";

export const LightTag = () => {
  return (
    <Tag>light Tag</Tag>
  );
};
export const DarkTag = () => {
  return (
    <Tag style={{backgroundColor: '#414141', color: 'white'}}>dark Tag</Tag>
  );
};
