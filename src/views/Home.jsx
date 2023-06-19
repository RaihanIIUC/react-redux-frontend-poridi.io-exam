import React, { useEffect, useState } from 'react'
import { Tabs, Tab } from "react-bootstrap";
import { useDispatch , useSelector } from 'react-redux';
import { requestClientList } from '../Redux/action/ClientLIstAction';
import ClientTable from './ClientTable';
import { Link } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();

  const  {clients} = useSelector((store) => store.clientStore);
   const [type, setType] = useState('ONLINE');

  console.log(clients,type,);


  useEffect(() => {
    dispatch(requestClientList(type));

  }, [type]);
  function handleClick(e) {
    setType(e);
 }

  return (
    <div>
      <div className="row">
    <div className="col">
        <div className="text-end">
            <Link to="/create"  className="btn btn-secondary">Add New Client</Link>
        </div>
    </div>
</div>

        <Tabs   onSelect={(e) => handleClick(e)}>
      <Tab eventKey="ONLINE" title="Online">
      <ClientTable clients={clients} />
      </Tab>
      <Tab eventKey="INHOUSE" title="INHOUSE">
      <ClientTable clients={clients} />
      </Tab>
      <Tab eventKey="MODERN_TRADE" title="Modern Trade">
      <ClientTable clients={clients} />
      </Tab>
      
    </Tabs>
    </div>
  )
}

export default Home