import * as C from '../../components';
import { IModal } from './modal.models';

import './style.scss';

export const Modal: React.FC<IModal> = ({ isVisibile, ...btnProps }) => {
  return isVisibile ? (
    <>
      <h1>Title</h1>
      <p>message</p>
      <C.Btn {...btnProps}>click</C.Btn>
    </>
  ) : null;
};
