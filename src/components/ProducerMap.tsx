import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { Producer, OrderType } from '../types/producer'
import './ProducerMap.css'

// Dot colours
const DOT_COLOR: Record<NonNullable<OrderType>, string> = {
  webshop: '#ec4899', // pink
  other:   '#f97316', // orange
}
const DOT_DEFAULT = '#6b7280' // grey fallback (orderType === null)

function makeIcon(orderType: OrderType) {
  const color = orderType ? DOT_COLOR[orderType] : DOT_DEFAULT
  return L.divIcon({
    className: '',
    html: `<span class="map-dot" style="background:${color}"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10],
  })
}

const ORDER_LABEL: Record<NonNullable<OrderType>, string> = {
  webshop: 'Web shop',
  other:   'Other ordering',
}

interface ProducerMapProps {
  producers: Producer[]
}

// Centre of Sweden
const SWEDEN_CENTER: [number, number] = [62.5, 16.5]

export function ProducerMap({ producers }: ProducerMapProps) {
  return (
    <div className="producer-map__wrapper">
      <MapContainer
        center={SWEDEN_CENTER}
        zoom={5}
        className="producer-map__container"
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {producers.map((producer) => (
          <Marker
            key={producer.id}
            position={[producer.lat, producer.lng]}
            icon={makeIcon(producer.orderType)}
          >
            <Popup className="producer-map__popup" maxWidth={260}>
              <div className="producer-map__popup-inner">
                <strong className="producer-map__popup-name">{producer.name}</strong>
                <span className="producer-map__popup-location">
                  📍 {producer.location}, {producer.region}
                </span>
                {producer.orderType && (
                  <span
                    className="producer-map__popup-order-badge"
                    data-type={producer.orderType}
                  >
                    {ORDER_LABEL[producer.orderType]}
                    {producer.orderDetails ? ` — ${producer.orderDetails}` : ''}
                  </span>
                )}
                <p className="producer-map__popup-desc">{producer.description}</p>
                <div className="producer-map__popup-fibers">
                  {producer.fiberTypes.map((f) => (
                    <span key={f} className="producer-map__popup-tag">{f}</span>
                  ))}
                </div>
                <a
                  href={producer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="producer-map__popup-link"
                >
                  Visit website ↗
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="producer-map__legend">
        <span className="producer-map__legend-item">
          <span className="producer-map__legend-dot" style={{ background: DOT_COLOR.webshop }} />
          Web shop
        </span>
        <span className="producer-map__legend-item">
          <span className="producer-map__legend-dot" style={{ background: DOT_COLOR.other }} />
          Other ordering
        </span>
        <span className="producer-map__legend-item">
          <span className="producer-map__legend-dot" style={{ background: DOT_DEFAULT }} />
          Unknown
        </span>
      </div>
    </div>
  )
}
