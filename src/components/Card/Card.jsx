import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

export default function Card() {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [uniqueId, setUniqueId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleSort = () => {
    const sortedData = data.sort((a, b) => {
      return new Date(b.published_in) - new Date(a.published_in);
    });
    setData([...data, sortedData]);
  };

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueId]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);
  return (
    <>
      <div onClick={handleSort}>
        <Button title="Sort By Date" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6">
        {data?.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData
            singleData={singleData}
            key={singleData.id}
            setUniqueId={setUniqueId}
          />
        ))}
        <Modal singleData={singleData} />
      </div>
      {!showAll && (
        <div onClick={handleShowAll} className="mb-12">
          <Button title="See More" />
        </div>
      )}
    </>
  );
}
