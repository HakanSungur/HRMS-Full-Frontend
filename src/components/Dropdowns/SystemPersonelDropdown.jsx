import { Menu, Transition } from "@headlessui/react";

import React, { Fragment } from "react";
import Swal from "sweetalert2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function SystemPersonelDropdown(props) {
  const {open} = this.state;
  return (
    <Menu>
      {({}) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full mb-2 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              <a className="text-white px-3 text-lg">
                <i className="fas fa-ellipsis-h"></i>
              </a>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute bg-blueGray-700 text-base float-left list-none rounded shadow-lg min-w-48"
              style={{
                marginTop: -10,
                textAlign: "center",
                border: "solid 1px #F1F5F9",
                marginLeft: "-25",
              }}
            >
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-emerald-500 text-white" : "text-white",
                        "block px4 py-3 text-sm"
                      )}
                      onClick={() => {
                        Swal.fire({
                          icon: "warning",
                          title: "Emin misiniz?",
                          showDenyButton: true,
                          confirmButtonText: `Sil`,
                          denyButtonText: `Vazge??`,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            props.deleteSystemPersonel();
                            const Toast = Swal.mixin({
                              toast: true,
                              position: "top-end",
                              showConfirmButton: false,
                              timer: 3000,
                              timerProgressBar: true,
                              background: "#3d6f42",
                              didOpen: (toast) => {
                                toast.addEventListener(
                                  "mouseenter",
                                  Swal.stopTimer
                                );
                                toast.addEventListener(
                                  "mouseleav",
                                  Swal.resumeTimer
                                );
                              },
                            });
                            Toast.fire({
                              icon: "success",
                              html: "<h1 style='font-family: Ubuntu;color: white;'>Ba??ar??yla Kald??r??ld??!</h1>",
                            });
                          } else if (result.isDenied) {
                            //
                          }
                        });
                      }}
                    >
                      <i className="fas fa-trash"></i>Sil
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
