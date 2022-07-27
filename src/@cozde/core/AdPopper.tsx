import { ClickAwayListener, Popper, PopperPlacementType } from '@mui/material';
import React, { useRef, useState } from 'react';

interface AdPopperProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  popup: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  placement?: PopperPlacementType;
}

function AdPopper(props: AdPopperProps) {
  const { children, popup, ...popperProps } = props;
  const ref = React.createRef<any>();
  const [open, setOpen] = useState<boolean>(false);

  const clone = React.cloneElement(props.children, {
    onClick: (_event: MouseEvent) => {
      setOpen(!open);
    },
    ref,
  });

  console.log(ref);

  const handleClose = () => {
    console.log('closing')
    setOpen(false);
  };

  return (
    <>
      {clone}
      <Popper {...popperProps} open={open} anchorEl={ref.current} transition>
        <ClickAwayListener onClickAway={handleClose}>
          {popup}
        </ClickAwayListener>
      </Popper>
    </>
  );
}

export default AdPopper;
