import React, { memo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const MapMain = ({
  children, center, zoom = 9, ...props
}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API,
  })
  if (loadError) {
    return (
            <h1>
                Error loading map
            </h1>
    )
  }

  return (
        <div>
            {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '30vh' }}
                  center={center}
                  zoom={zoom}
                  {...props}
                >
                    {children}
                </GoogleMap>
            ) : (
                <h1>
                    Loading...
                </h1>
            )}
        </div>
  )
}

export default memo(MapMain)
