import React, { useMemo, useState } from "react";
import "./Location.css";
import Topbar from "../Components/Tobbar";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import RichTextField from "../Components/RichTextField";
import { EmptyState } from "../Components/UIStates";

const Location = () => {
  const locations = useMemo(
    () => [
      {
        kind: "charging",
        name: "Downtown Charging Hub",
        address: "123 Main St, Downtown",
        status: "Active",
        rating: 4.8,
        detailLabel: "Charger Type",
        detailValue: "Type 2 (AC) + CCS",
        bookings: 456,
        revenue: 12450,
        updated: "2024-03-17",
      },
      {
        kind: "coffee",
        name: "Espresso & Charge Cafe",
        address: "456 Coffee Ave, Midtown",
        status: "Active",
        rating: 4.9,
        detailLabel: "Experience",
        detailValue: "Premium Lounge",
        bookings: 289,
        revenue: 8920,
        updated: "2024-03-16",
      },
      {
        kind: "charging",
        name: "Mall Fast Charge Station",
        address: "Shopping Mall, Level 3",
        status: "Active",
        rating: 4.6,
        detailLabel: "Charger Type",
        detailValue: "DC Fast Charging",
        bookings: 678,
        revenue: 15670,
        updated: "2024-03-17",
      },
      {
        kind: "coffee",
        name: "Work & Charge Office",
        address: "789 Business Blvd",
        status: "Active",
        rating: 4.7,
        detailLabel: "Experience",
        detailValue: "Work & Charge",
        bookings: 234,
        revenue: 7420,
        updated: "2024-03-15",
      },
      {
        kind: "charging",
        name: "Airport Charging Station",
        address: "Airport Terminal 2",
        status: "Maintenance",
        rating: 4.5,
        detailLabel: "Charger Type",
        detailValue: "Tesla Supercharger",
        bookings: 892,
        revenue: 22340,
        updated: "2024-03-14",
      },
      {
        kind: "coffee",
        name: "Quick Coffee & Charge",
        address: "321 Highway Exit 5",
        status: "Active",
        rating: 4.4,
        detailLabel: "Experience",
        detailValue: "Quick Coffee Break",
        bookings: 456,
        revenue: 11230,
        updated: "2024-03-17",
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("");
  const [status, setStatus] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return locations.filter((l) => {
      const matchesQuery =
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q);
      const matchesKind = !kind || l.kind === kind;
      const matchesStatus = !status || l.status === status;
      return matchesQuery && matchesKind && matchesStatus;
    });
  }, [locations, query, kind, status]);

  const stats = useMemo(() => {
    const chargingCount = locations.filter((l) => l.kind === "charging").length;
    const coffeeCount = locations.filter((l) => l.kind === "coffee").length;
    const activeCount = locations.filter((l) => l.status === "Active").length;
    const totalRevenue = locations.reduce((sum, l) => sum + l.revenue, 0);
    return { chargingCount, coffeeCount, activeCount, totalRevenue };
  }, [locations]);

  return (
    <>
      <div className="dashboard">
        <Navbar />
        <div className="mainContent">
          <Topbar />

          <div className="locationPage">
            <div className="locationHeader">
              <div>
                <h1 className="locationTitle">STATIONS &amp; LOCATIONS</h1>
                <p className="locationSubtitle">
                  Manage charging stations and coffee experiences
                </p>
              </div>

              <Link to="/Addlocation" className="locationAddLink locationAddBtn">
                +&nbsp; Add Location
              </Link>
            </div>

            <div className="locationStats">
              <div className="statCard">
                <div className="statIcon statBlue" aria-hidden="true">
                  ⚡
                </div>
                <div className="statMeta">
                  <div className="statLabel">Charging Stations</div>
                  <div className="statValue">{stats.chargingCount}</div>
                </div>
              </div>

              <div className="statCard">
                <div className="statIcon statPurple" aria-hidden="true">
                  ☕
                </div>
                <div className="statMeta">
                  <div className="statLabel">Coffee Locations</div>
                  <div className="statValue">{stats.coffeeCount}</div>
                </div>
              </div>

              <div className="statCard">
                <div className="statIcon statGreen" aria-hidden="true">
                  ✓
                </div>
                <div className="statMeta">
                  <div className="statLabel">Active</div>
                  <div className="statValue">{stats.activeCount}</div>
                </div>
              </div>

              <div className="statCard">
                <div className="statIcon statOrange" aria-hidden="true">
                  👁
                </div>
                <div className="statMeta">
                  <div className="statLabel">Total Revenue</div>
                  <div className="statValue">
                    {stats.totalRevenue.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="locationFilters">
              <div className="filterSearch">
                <span className="searchIcon" aria-hidden="true">
                  🔍
                </span>
                <RichTextField
                  placeholder="Search locations..."
                  minHeight={46}
                  showToolbar={false}
                  initialValue={query}
                  onChangeText={setQuery}
                />
              </div>

              <select
                className="filterSelect"
                value={kind}
                onChange={(e) => setKind(e.target.value)}
              >
                <option value="">All types</option>
                <option value="charging">Charging</option>
                <option value="coffee">Coffee</option>
              </select>

              <select
                className="filterSelect"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">All statuses</option>
                <option value="Active">Active</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <EmptyState
                title="No locations matched"
                subtitle="Try different filters or add a new location."
              />
            ) : (
              <div className="locationGrid">
                {filtered.map((l) => (
                <div className="locationCard" key={`${l.kind}-${l.name}`}>
                  <div className="cardTop">
                    <div
                      className={`cardBadge ${
                        l.kind === "charging" ? "badgeBlue" : "badgePurple"
                      }`}
                      aria-hidden="true"
                    >
                      {l.kind === "charging" ? "⚡" : "☕"}
                    </div>

                    <button className="cardMenu" type="button" aria-label="Menu">
                      ⋮
                    </button>
                  </div>

                  <div className="cardTitle">{l.name}</div>

                  <div className="cardAddress">
                    <span aria-hidden="true">📍</span>
                    <span>{l.address}</span>
                  </div>

                  <div className="cardMetaRow">
                    <span
                      className={`statusPill ${
                        l.status === "Active" ? "statusActive" : "statusWarn"
                      }`}
                    >
                      {l.status}
                    </span>

                    <span className="rating">
                      <span className="star" aria-hidden="true">
                        ★
                      </span>
                      {l.rating}
                    </span>
                  </div>

                  <div className="cardDetail">
                    <div className="detailLabel">{l.detailLabel}</div>
                    <div className="detailValue">{l.detailValue}</div>
                  </div>

                  <div className="cardNumbers">
                    <div className="numBlock">
                      <div className="numLabel">Total Bookings</div>
                      <div className="numValue">{l.bookings}</div>
                    </div>
                    <div className="numBlock right">
                      <div className="numLabel">Revenue</div>
                      <div className="numValue">
                        {l.revenue.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="cardFooter">
                    Last updated: {l.updated}
                  </div>
                </div>
                ))}
              </div>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Location;
