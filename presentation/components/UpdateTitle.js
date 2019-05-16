import React, { useLayoutEffect } from 'react';

export const UpdateTitle = ({title}) => {
  useLayoutEffect(() => {
    document.title = title;
  });

  return (<></>);
};
