'use client'
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GET } from '@/app/api/destination/route'; // Adjust based on your API setup

const DestinationDetailPage = () => {
  const pathname = usePathname()
  const {id} = pathname.query;
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    async function fetchDestinationData() {
      try {
        const response = await GET(`/dashboard/destination/${id}`); // Adjust endpoint based on your API structure
        const data = await response.json();
        setDestination(data); // Set state with fetched destination data
      } catch (error) {
        console.error('Failed to fetch destination details:', error);
      }
    }

    if (id) {
      fetchDestinationData();
    }
  }, [id]);

  if (!id) {
    return <p>Loading...</p>; // Handle case where 'id' is not defined yet
  }

  return (
    <div className='bg-black'>
      <h1>{destination.name}</h1>
      <p>{destination.category}</p>
      {/* Render other details like images, amenities, etc. */}
    </div>
  );
};

export default DestinationDetailPage;
