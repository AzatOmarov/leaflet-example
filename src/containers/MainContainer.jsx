import React, { useEffect, useState } from 'react';
import 'Styles/app.scss';
import RequestList from 'Components/RequestList';
import PointsContainer from 'Components/PointsContainer';
import Page from '../components/Page';
import { requestList, clientsList } from 'Constants/mocks';

export default function MainContainer() {
  
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    requestList.forEach(r => {
      r.coords = Object.values(r.coords);
    });
    clientsList.forEach(c => {
      c.requestList = requestList.filter(r => r.client_id === c.id);
    });
    const nClientList = clientsList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
    setClientList(nClientList);
  }, []);

  return (
    <div className='app__client'>
      <div className={'app-content'}>
        <div className='container'>
          <Page>
            <div className='row'>
              <div className='col-md-6'>
                <RequestList clientList={clientList} />
              </div>
              <div className='col-md-18'>
                <PointsContainer clientList={clientList} />
              </div>
            </div>
          </Page>
        </div>
      </div>
    </div>
  );
}
