import React from 'react';
import { requestTypes } from '../constants/mappers';
import { FixedSizeList as List } from 'react-window';
import * as faker from 'faker';

const floatThousandsSeparator = (num) => Number(num).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2});

const Card = (props) => {
  const { data, index, style } = props;
  return <li style={style}>
    <div className='client-card'>
      <div className='client-card__title'>{data[index].name}</div>
      {data[index].requestList.length > 0 && <List
        itemKey={faker.datatype.uuid}
        innerElementType='ul'
        itemData={data[index].requestList}
        itemCount={data[index].requestList.length}
        itemSize={25}
        height={100}
        className='client-card__list'
      >
        {({data, index, style }) => {
          return (
            <li style={style}>
              <div className='client-card__info'>
                <div className='type'>{requestTypes[data[index].type]}</div>
                <div className='amount'>{floatThousandsSeparator(data[index].price)}</div>
              </div>
            </li>
          );
        }}
      </List>
      }
    </div>
  </li>;
};

export default Card;
