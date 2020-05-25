import React, { FunctionComponent } from 'react';
import s from './App.module.scss';
import StartPage from 'screens/StartPage/StartPage';

export interface IApp {}

/**
 * Компонент
 */
const App: FunctionComponent<IApp> = () => {
  //const {} = props;

  return (
    <div className={s.wrapper}>
      <StartPage />
    </div>
  );
};

export default App;
