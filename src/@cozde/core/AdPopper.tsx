import { ClickAwayListener, Popover, PopperPlacementType } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react';

interface AdPopperProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  popup: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  placement?: PopperPlacementType;
}

function AdPopper(props: AdPopperProps) {
  const { children, popup, ...popperProps } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const clone = React.cloneElement(props.children, {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      console.log(event.currentTarget, anchorEl);
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
  });

  const handleClose = () => setAnchorEl(null);

  const isOpen = useMemo(() => !!anchorEl, [anchorEl]);

  return (
    <>
      {clone}
      <Popover {...popperProps} open={isOpen} anchorEl={anchorEl} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }} onClose={handleClose}>
        <ClickAwayListener onClickAway={handleClose}>
          {popup}
        </ClickAwayListener>
      </Popover>
    </>
  );
}

export default AdPopper;
