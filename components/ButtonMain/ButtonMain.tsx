import React from 'react';
import { Button } from '@mui/material';

interface Props {
  buttonType: 'button' | 'submit' | 'reset',
  text: string,
  classVariant: string,
  onHandleClick: () => void,
}

export const ButtonMain: React.FC<Props> = ({
  buttonType,
  classVariant,
  text,
  onHandleClick,
}) => {
  return (
    <>
      <Button
        type={buttonType}
        variant="outlined"
        className={classVariant}
        onClick={onHandleClick}
      >
        {text}
      </Button>
    </>
  );
};
