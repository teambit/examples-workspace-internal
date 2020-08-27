import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';

const codeString = `capitalize("my upper case letters")
// => MY UPPER CASE LETTERS
`;

export default function Overview() {
  return <div><CodeSnippet>{codeString}</CodeSnippet></div>;
}

export const labels = ['strings']

export const abstract = 'Capitilize a string'
