import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-white bottom-0 w-screen pt-1 border-b-2 border-blue-700">
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              © Copyright 1999-2021 by dogadata. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
