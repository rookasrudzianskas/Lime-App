// @ts-nocheck
import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';

import LineRoute from '~/components/LineRoute';
import ScooterMarkers from '~/components/ScooterMarkers';
import { useScooter } from '~/providers/ScooterProvider';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

/**
 * Renders a map view with markers for scooters and a route if one is selected.
 *
 * @return {JSX.Element} The rendered map view.
 */
export default function Map() {
  const { directionCoordinates } = useScooter();

  return (
    <MapView style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/dark-v11">
      <Camera followZoomLevel={14} followUserLocation />
      <LocationPuck puckBearingEnabled puckBearing="heading" pulsing={{ isEnabled: true }} />
      <ScooterMarkers />

      {directionCoordinates && <LineRoute coordinates={directionCoordinates} />}
    </MapView>
  );
}
