import React from 'react';
import { Tag } from './tag';

export const LightTag = () => {
  return <Tag>light Tag</Tag>;
};
export const DarkTag = () => {
  return <Tag style={{ backgroundColor: '#414141', color: 'white' }}>dark Tag</Tag>;
};

export const AlertTag = () => {
  return <Tag onPick={() => alert('tag selected!')}>Alert Tag</Tag>;
};
