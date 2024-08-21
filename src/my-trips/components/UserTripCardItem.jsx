import React from "react";
import { GetPlacesDetails } from "@/service/globalApi";
import { useEffect, useState } from "react";
import { PHOTO_REF_URL } from "@/service/globalApi";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
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
    <Link to={`/view-trip/`+trip?.id}>
    <div className="hover:scale-105 transition-all cursor-pointer ">
      <img
        src={photoUrl ? photoUrl : "/placeholder.jpg"}
        className="object-cover rounded-xl h-[220px]"
      />
      <div>
        <h2 className="font-bold text-lg">
          {trip?.userSelection?.location?.label}
        </h2>
        <p className="text-sm text-gray-500">
          {trip?.userSelection?.noOfDays} Days with{" "}
          {trip?.userSelection?.budget} Budget
        </p>
      </div>
    </div>
    </Link>
  );
}

export default UserTripCardItem;
