import React from "react";

function Footer() {
  return (
    <div
      data-testid="app_footer"
      className="flex h-20 items-center justify-center border-t border-gray-200"
    >
      <footer className="px-3">
        <div className="max-w-5xl mx-auto">
          <div className="text-center text-xs sm:text-sm text-gray-500">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Illo nulla id dolores culpa. Doloribus, quae laborum!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
