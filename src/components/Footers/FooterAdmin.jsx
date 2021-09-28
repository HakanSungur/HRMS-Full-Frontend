import React from "react";

import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()} İnsan Kaynakları Yönetim
                Sistemi by{" "}
                <a
                  href="#"
                  className="text-blueGray-800 hover:text-lightBlue-600 text-sm font-semibold py-1"
                >
                  Hakan SUNGUR
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="#"
                    className="text-blueGray-800 hover:text-lightBlue-600 text-sm font-semibold block py-1 px-3"
                  >
                    Hakan SUNGUR
                  </a>
                </li>
                <a
                                        href="#"
                                        className="text-blueGray-800 hover:text-lightBlue-600 text-sm font-semibold block py-1 px-3"
                                    >
                                        Hakkımda
                                    </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
