import React from 'react';
import { Button } from './button';

export const PrimaryButton = () => {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Primary Button
    </Button>
  );
};

export const SecondaryButtonPreview = () => {
  return <Button variant="secondary">Secondary Button</Button>;
};

export const DisabledButton = () => {
  return (
    <Button disabled variant="primary">
      Disabled Button
    </Button>
  );
};
