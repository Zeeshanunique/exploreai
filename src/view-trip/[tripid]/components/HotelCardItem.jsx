import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetPlacesDetails } from "@/service/globalApi";
import { PHOTO_REF_URL } from "@/service/globalApi";

function HotelCardItem({ hotel }) {
    const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName
    };

    const result = await GetPlacesDetails(data).then((resp) => {

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + " ," + hotel?.hotelAddress} target='_blank'>
      <div className='hover:scale-105 transition-all cursor-pointer'>
        <img src={photoUrl?photoUrl:"/placeholder.jpg"} className='rounded-xl h-[150px] w-full object-cover' />
        <div className='my-2 flex flex-col'>
          <h2 className='font-medium'>{hotel?.hotelName}</h2>
          <h2 className='text-xs text-gray-500'> 📍 {hotel?.hotelAddress}</h2>
          <h2 className='text-sm '>💰 {hotel?.price}</h2>
          <h2 className='text-sm '>⭐ {hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
