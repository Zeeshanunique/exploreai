import React from "react";
import PlaceCartItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">Places To Visit</h2>
      <div>
        {trip.tripData?.itinerary?.map((item, index) => (
          <div key={`day-${index}`} className="mt-5">
            <h2 className="font-medium text-lg">{item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, placeIndex) => (
                <div key={`place-${index}-${placeIndex}`} className="my-3">
                  <h2 className="font-medium text-sm text-orange-600">
                    {place.time}
                  </h2>

                  <PlaceCartItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
