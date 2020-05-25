import React, { FunctionComponent } from 'react';
import s from './FreeloSelect.module.scss';
import arrowDown from 'assets/images/icons/arrow_drop_down_18px.png';

export interface IFreeloSelect { }

/**
 * Компонент
 */
const FreeloSelect: FunctionComponent<IFreeloSelect> = () => {
  //const {} = props;

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <span>eune</span>
        <img className={s.arrow} src={arrowDown} alt="open region select" width="18" height="18" />
      </div>

      <div className={s.dropDown}>
        <span className={s.option}>ru</span>
        <span className={s.option}>euw</span>
        <span className={s.option}>na</span>
      </div>
    </div>
  );
};

export default React.memo(FreeloSelect);
