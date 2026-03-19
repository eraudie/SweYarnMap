import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo-mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
            <path
              d="M14 24 C14 14 24 10 24 24 C24 38 34 34 34 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <div>
          <h1 className="header__title">Swedish Yarn Producers</h1>
          <p className="header__subtitle">
            Discover independent and traditional yarn makers across Sweden
          </p>
        </div>
      </div>
    </header>
  );
}
