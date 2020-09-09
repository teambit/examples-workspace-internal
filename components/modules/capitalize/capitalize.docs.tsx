import React from 'react';
import { capitalize } from './capitalize';

const codeString = `() => {
  let text = capitalize("a capitalized 'a'.")
  return (
    <>
      <p>{text}</p>
    </>
  )
}`;

export const labels = ['strings'];

export const abstract = 'Transforms the first character in a string to uppercase.';

export const examples = [
  {
    scope: {
      capitalize,
    },
    title: 'Using the Capitalize function',
    description: "Change the 'text' value to see its first character transformed to uppercase.",
    code: codeString,
  },
];
