import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { baseTheme } from '@teambit/use-case-examples.theme.base-theme';

export type ThemeContextProps = { theme } & HTMLAttributes<HTMLDivElement>;

export function ThemeContext({ children, className, theme, ...rest }: ThemeContextProps) {
  return (
    <div 
      {...rest} 
      className={classNames(
        theme || baseTheme,
        className,
      )}
    >
      {children}
    </div>
  );
}
