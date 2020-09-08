import React from "react";
import { TagList } from "./tag-list";

const list = [
  'light tag',
  'light tag2'
]

export const LightTag = () => {
  return (
      <TagList>{list}</TagList>
  );
};
