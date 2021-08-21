import React from "react";

function Header() {
  return (
    <div className="flex h-20 items-center shadow-lg bg-white">
      <header data-testid="app_header" className="px-3">
        <div className="max-w-5xl mx-auto">
          <div
            data-testid="app_logo"
            className="font-serif text-3xl text-gray-600"
          >
            Broccoli &amp; Co
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
