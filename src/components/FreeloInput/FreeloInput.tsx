import React, { FunctionComponent, useState, useEffect } from 'react';
import s from './FreeloInput.module.scss';

export interface IFreeloInput {
  // Событие клика по полю ввода
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  // Событие при нажатии на кнопку
  onKeyPress?(event: React.KeyboardEvent<HTMLElement>): void;
  // Событие изменения в поле ввода
  onChange?(value: string): void;

  placeholder?: string;
}

/**
 * Компонент поля ввода
 */
const FreeloInput: FunctionComponent<IFreeloInput> = (props) => {
  const {
    onChange,
    onKeyPress,
    onClick,
    placeholder,
  } = props;

  const [value, setValue] = useState('');

  useEffect(() => {
    if (onChange) onChange(value);
  });

  // Handlers
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) onClick(e);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (onKeyPress) onKeyPress(e);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <input
      className={s.input}
      value={value}
      placeholder={placeholder}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
    />
  );
};

export default React.memo(FreeloInput);
