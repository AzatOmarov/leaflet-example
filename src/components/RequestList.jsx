import React from 'react';
import ClientCard from './ClientCard';
import { FixedSizeList as List } from 'react-window';
import * as faker from 'faker';

export default function RequestList(props) {
  const { clientList } = props;
  return (
    <div className='card'>
      <div className='card-body'>
        <h6 className='card__heading'>Список клиентов и заявок</h6>
        {clientList.length && <List
          itemKey={faker.datatype.uuid}
          innerElementType='ul'
          itemData={clientList}
          itemCount={clientList.length}
          itemSize={150} // высота
          height={850}
          className='general-list'
        >
          {({data, index, style }) => {
            return (
              <ClientCard data={data} index={index} style={style} />
            );
          }}
        </List>}
      </div>
    </div>
  );
}
