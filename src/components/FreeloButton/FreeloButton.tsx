import React, { FunctionComponent } from 'react';
import s from './FreeloButton.module.scss';

export interface IFreeloButton {
  // Клик по кнопке
  onClick?(): void;

  // Надпись на кнопке
  title?: string;
  // Расположение иконки
  iconPosition?: 'start' | 'end';
}

/**
 * Компонент кастомной кнопки
 *
 * @example Добавление кнопки с иконкой
 * import icon from 'assets/images/icons/icon.svg';
 * <FreeloButton btnTitle={'Refresh'}>
 *   <img src={icon} alt="icon" />
 * </FreeloButton>
 */
const FreeloButton: FunctionComponent<IFreeloButton> = (props) => {
  const {
    title = 'title',
    iconPosition = 'start',
    onClick,
    children,
  } = props;

  // Handlers
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button className={s.button} onClick={handleClick}>
      {iconPosition === 'start' && children}
      <span>{title}</span>
      {iconPosition === 'end' && children}
    </button>
  );
};

export default FreeloButton;
