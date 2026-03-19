import { useState, useMemo } from "react";
import type { Producer } from "../types/producer";
import { ProducerCard } from "./ProducerCard";
import "./ProducerGrid.css";

interface ProducerGridProps {
  producers: Producer[];
}

export function ProducerGrid({ producers }: ProducerGridProps) {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedFiber, setSelectedFiber] = useState("All");

  const regions = useMemo(() => {
    const all = producers.map((p) => p.region);
    return ["All", ...Array.from(new Set(all)).sort()];
  }, [producers]);

  const fiberTypes = useMemo(() => {
    const all = producers.flatMap((p) => p.fiberTypes);
    return ["All", ...Array.from(new Set(all)).sort()];
  }, [producers]);

  const filtered = useMemo(() => {
    return producers.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());

      const matchesRegion =
        selectedRegion === "All" || p.region === selectedRegion;

      const matchesFiber =
        selectedFiber === "All" || p.fiberTypes.includes(selectedFiber);

      return matchesSearch && matchesRegion && matchesFiber;
    });
  }, [producers, search, selectedRegion, selectedFiber]);

  return (
    <div className="producer-grid__wrapper">
      <div className="producer-grid__filters">
        <input
          type="search"
          placeholder="Search producers…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="producer-grid__search"
          aria-label="Search producers"
        />

        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="producer-grid__select"
          aria-label="Filter by region"
        >
          {regions.map((r) => (
            <option key={r} value={r}>
              {r === "All" ? "All regions" : r}
            </option>
          ))}
        </select>

        <select
          value={selectedFiber}
          onChange={(e) => setSelectedFiber(e.target.value)}
          className="producer-grid__select"
          aria-label="Filter by fiber type"
        >
          {fiberTypes.map((f) => (
            <option key={f} value={f}>
              {f === "All" ? "All fibers" : f}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="producer-grid__empty">
          No producers match your filters. Try a different search.
        </p>
      ) : (
        <>
          <p className="producer-grid__count">
            Showing {filtered.length} of {producers.length} producers
          </p>
          <div className="producer-grid__grid">
            {filtered.map((producer) => (
              <ProducerCard key={producer.id} producer={producer} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
