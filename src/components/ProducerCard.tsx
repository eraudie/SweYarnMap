import type { Producer } from "../types/producer";
import "./ProducerCard.css";

interface Props { producer: Producer }

const ORDER_LABEL = { webshop: "Web shop", other: "Other ordering" } as const

export function ProducerCard({ producer }: Props) {
  return (
    <article className="card">
      <div className="card__avatar">
        {producer.image
          ? <img src={producer.image} alt={producer.name} className="card__avatar-img" />
          : <span className="card__avatar-initial">{producer.name.charAt(0)}</span>
        }
      </div>

      <div className="card__body">
        <div className="card__name-row">
          <h2 className="card__name">{producer.name}</h2>
          {producer.orderType && (
            <span className="card__badge" data-type={producer.orderType}>
              {ORDER_LABEL[producer.orderType]}
            </span>
          )}
        </div>

        <p className="card__location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {producer.location}, {producer.region}
        </p>

        <p className="card__description">{producer.description}</p>

        {producer.orderType === "other" && producer.orderDetails && (
          <p className="card__order-details">{producer.orderDetails}</p>
        )}

        <div className="card__fibers">
          {producer.fiberTypes.map(f => (
            <span key={f} className="card__fiber-tag">{f}</span>
          ))}
        </div>

        <a href={producer.website} target="_blank" rel="noopener noreferrer" className="card__link">
          Visit website
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </article>
  )
}
