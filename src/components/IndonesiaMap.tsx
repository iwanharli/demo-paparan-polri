import { MapContainer, GeoJSON, ZoomControl } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import geoData from '../lib/assets/indonesia.json';
import { PROVINSI } from '../data/dashboardData';
import type { Provinsi } from '../data/dashboardData';

interface IndonesiaMapProps {
  onProvClick: (prov: Provinsi) => void;
}

export function IndonesiaMap({ onProvClick }: IndonesiaMapProps) {
  const center: LatLngExpression = [-2.5489, 118.0149]; // Center of Indonesia

  const getProvData = (name: string) => {
    return PROVINSI.find(p => p.n.toLowerCase() === name.toLowerCase());
  };


  const getStyle = (feature: any) => {
    const provName = feature.properties.PROVINSI;
    const data = getProvData(provName);
    
    let color = 'rgba(0, 255, 157, 0.25)'; // Default normal
    if (data?.s === 'kritis') color = 'rgba(255, 45, 85, 0.5)';
    if (data?.s === 'siaga') color = 'rgba(255, 214, 0, 0.4)';

    return {
      fillColor: color,
      weight: 1,
      opacity: 0.5,
      color: 'rgba(0, 238, 255, 0.25)', // Border color
      fillOpacity: 0.5,
      className: 'prov-polygon'
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    const provName = feature.properties.PROVINSI;
    const data = getProvData(provName);

    layer.on({
      mouseover: (e: any) => {
        const l = e.target;
        l.setStyle({
          weight: 2,
          color: 'var(--c)',
          fillOpacity: 0.75,
        });
      },
      mouseout: (e: any) => {
        const l = e.target;
        l.setStyle(getStyle(feature));
      },
      click: () => {
        if (data) {
          onProvClick(data);
        } else {
          console.warn(`No dashboard data found for GeoJSON province: ${provName}`);
        }
      }
    });

    if (data) {
      layer.bindTooltip(`
        <div style="font-family: 'Share Tech Mono', monospace; font-size: 11px; padding: 4px;">
          <div style="font-weight: bold; color: var(--c); margin-bottom: 2px;">${data.n.toUpperCase()}</div>
          <div style="color: var(--ts); font-size: 9px; line-height: 1;">STATUS: 
            <span style="color: ${data.s === 'kritis' ? 'var(--cr)' : data.s === 'siaga' ? 'var(--cy)' : 'var(--cg)'}">
              ${data.s.toUpperCase()}
            </span>
          </div>
        </div>
      `, { sticky: true, className: 'tactical-tooltip' });
    }
  };

  return (
    <div className="map-container-ews">
      <MapContainer
        center={center}
        zoom={5.0}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
        dragging={true}
      >
        <GeoJSON 
          data={geoData as any} 
          style={getStyle}
          onEachFeature={onEachFeature}
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}
