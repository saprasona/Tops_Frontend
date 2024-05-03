import React, { useState } from 'react';
import CardsTable from '../ProductApi/CardsTable';
import { Button } from 'reactstrap';
import ProductForm from '../ProductApi/ProductForm';

export default function Cards() {
  let [refresh, setRefresh] = useState(true);
  let [modal, setModal] = useState(false);
  let [updateMode, setUpdateMode] = useState(false);
  let [defaultData, setDefaultData] = useState({});

  let refetch = () => {
    setRefresh(!refresh);
  };

  const toggle = () => {
    setModal(!modal);
    setUpdateMode(false);
    setDefaultData({});
  };

  return (
    <div>
      <ProductForm
        toggle={toggle}
        modal={modal}
        refetch={refetch}
        defaultData={defaultData}
        updateMode={updateMode}
      />
      <CardsTable refetch={refetch} refresh={refresh} toggle={toggle} setDefaultData={setDefaultData} />
    </div>
  );
}
