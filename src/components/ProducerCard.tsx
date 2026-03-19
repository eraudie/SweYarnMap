import type { Producer } from "../types/producer";
import "./ProducerCard.css";

interface ProducerCardProps {
  producer: Producer;
}

const ORDER_LABEL = {
  webshop: 'Web shop',
  other: 'Other ordering',
} as const

export function ProducerCard({ producer }: ProducerCardProps) {
  return (
    <article className="producer-card">
      <div className="producer-card__logo-wrapper">
        {producer.logo ? (
          <img
            src={producer.logo}
            alt={`${producer.name} logo`}
            className="producer-card__logo"
          />
        ) : (
          <div className="producer-card__logo-placeholder">
            <span>{producer.name.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="producer-card__body">
        <div className="producer-card__name-row">
          <h2 className="producer-card__name">{producer.name}</h2>
          {producer.orderType && (
            <span
              className="producer-card__order-badge"
              data-type={producer.orderType}
              title={producer.orderDetails ?? undefined}
            >
              {ORDER_LABEL[producer.orderType]}
            </span>
          )}
        </div>

        <p className="producer-card__location">
          <svg
            className="producer-card__pin-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {producer.location}, {producer.region}
        </p>

        <p className="producer-card__description">{producer.description}</p>

        {producer.orderType === 'other' && producer.orderDetails && (
          <p className="producer-card__order-details">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="producer-card__order-icon">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 7.07 3.4a2 2 0 0 1 2.18-.45l2.93 1.1" />
              <path d="M22 4 12 14.01l-3-3" />
            </svg>
            {producer.orderDetails}
          </p>
        )}

        <div className="producer-card__fibers">
          {producer.fiberTypes.map((fiber) => (
            <span key={fiber} className="producer-card__fiber-tag">
              {fiber}
            </span>
          ))}
        </div>

        <a
          href={producer.website}
          target="_blank"
          rel="noopener noreferrer"
          className="producer-card__link"
        >
          Visit website
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </article>
  );
}
