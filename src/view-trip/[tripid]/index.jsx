import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc } from 'firebase/firestore'
import { db } from '@/service/firebaseConfig'
import { toast } from 'sonner'
import { getDoc } from 'firebase/firestore'
import { useState } from 'react'
import InfoSection from './components/InfoSection.jsx'
import Hotels from './components/Hotels.jsx'
import PlacesToVisit from './components/PlacesToVisit.jsx'
import Footer from './components/Footer.jsx'

function ViewTrip (){
    const { tripid } = useParams()
    const [trip, setTrip] = useState([])
    useEffect(() => {
        tripid&&GetTripData()
    }, [tripid])
    const GetTripData=async()=>{
        const docRef = doc(db, "AITrips", tripid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setTrip(docSnap.data())
        } else {
          console.log("No such document!");
          toast("No Trip Found!");
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56 '>
        {/* Information Section */}
        <InfoSection trip={trip} />

        {/* Recommended Hotels */}
        <Hotels trip={trip}/>

        {/* Daily Plan */}
        <PlacesToVisit trip={trip}/>

        {/* Footer */}
        <Footer trip={trip}/>
    </div>
  )
}

export default ViewTrip