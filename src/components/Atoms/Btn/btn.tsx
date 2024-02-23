import React from 'react';
import { IBtn } from './btn.models';

export const Btn: React.FC<IBtn> = p => (
  <button className='btn'>{p.children}</button>
);
