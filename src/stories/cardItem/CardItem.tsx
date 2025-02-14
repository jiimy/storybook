import React from 'react';
import CardItemTitle from './item/CardItemTitle';
import CardItemContent from './item/CardItemContent';
import CardItemSchedule from './item/CardItemSchedule';
import CardItemPay from './item/CardItemPay';
import CardItemRecruit from './item/CardItemRecruit';
import s from './carditem.module.scss';

const CardItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.card_item}>
      {children}
    </div>
  );
};

CardItem.ItemTitle = CardItemTitle;
CardItem.ItemContent = CardItemContent;
CardItem.ItemSchedule = CardItemSchedule;
CardItem.ItemPay = CardItemPay;
CardItem.ItemRecruit = CardItemRecruit;

export default CardItem;