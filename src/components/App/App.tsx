import React, { FunctionComponent } from 'react';
import s from './App.module.scss';

export interface IApp {}

/**
 * Компонент
 */
const App: FunctionComponent<IApp> = () => {
  //const {} = props;

  return (
    <div className={s.wrapper}>
      App
    </div>
  );
};

export default React.memo(App);
