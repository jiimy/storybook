import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import s from './sheet.module.scss';

type SheetProps = {
  // isToggle: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: boolean;
  onClose: () => void;
  children?: ReactNode;
  isDim?: boolean;
  height?: string;
}

// const SheetWrapStyle = styled.div<{ isShow: boolean }>` `

// TODO: 코드 개선 필요
const SheetStyle = styled.div<{ isShow: boolean, height: string }>`
  top: ${(props) => (props.isShow ? `calc(100% - ${props.height})` : `100%`)};
`

const Sheet = ({ children, isDim = false, isShow = false, height = '50%', onClose }: SheetProps) => {

  return (
    <>
      {isDim && isShow && <div className={s.dim} />}
      {
        <SheetStyle className={s.sheet} height={height} isShow={isShow}>
          <div className={s.sheet_header} onClick={() => onClose()}>
            <span></span>
          </div>
          {children}
        </SheetStyle>
      }
    </>
  );
};

export default Sheet;