import React, { ReactNode } from 'react';

type SheetProps = {
  open?: boolean;
  childern?: ReactNode;
}

const Sheet = ({open, childern }: SheetProps) => {
  return (
    <div>
      시트
      {childern}
    </div>
  );
};

export default Sheet;