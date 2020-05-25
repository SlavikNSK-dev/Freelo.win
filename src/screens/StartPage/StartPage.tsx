import React, { FunctionComponent } from 'react';
import s from './StartPage.module.scss';
import FreeloSelect from 'components/FreeloSelect/FreeloSelect';
import FreeloInput from 'components/FreeloInput/FreeloInput';
import FreeloButton from 'components/FreeloButton/FreeloButton';

export interface IStartPage { }

/**
 * Компонент
 */
const StartPage: FunctionComponent<IStartPage> = () => {
  //const {} = props;

  return (
    <div className={s.wrapper}>
      <div className={s.searchSummoner}>
        <div className={s.select}>
          <FreeloSelect />
        </div>

        <div className={s.input}>
          <FreeloInput />
        </div>

        <div className={s.button}>
          <FreeloButton title={'.GG'} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(StartPage);
