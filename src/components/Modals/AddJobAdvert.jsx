import React from "react";
import Swal from "sweetalert2";
import CityService from "../../services/CityService";

export default function AddJobAdvert(props) {
  const cityService = new CityService();

  console.log(cityService.getCities());

  return (
    <div>
      <button
        className={
          "absolute bg-emerald-500 text-blueGray-200 hover:bg-lightBlue-300 font-semibold text px-4 py-2 rounded shadow outline-none focus:outline-none ease-linear transition-all duration-50"
        }
        onClick={async () => {
          const { value: username } = await Swal.fire({
            title: "1/3 Kullanıcı Adı",
            input: "text",
            inputPlaceholder: "Kullanıcı adı giriniz",
            showCancelButton: true,
            cancelButtonText: "Vazgeç",
            confirmButtonText: "Kaydet",
            allowOutsideClick: false,
            inputAttributes: {
              maxlength: 35,
            },

            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (value !== "") {
                  resolve();
                } else {
                  resolve("Bu alan boş bırakılamaz!");
                }
              });
            },
          });

          if (username) {
            const { value: email } = await Swal.fire({
              title: "2/3 E-Posta",
              input: "email",
              inputPlaceholder: "E-posta giriniz",
              showCancelButton: true,
              cancelButtonText: "Vazgeç",
              confirmButtonText: "Kaydet",
              allowOutsideClick: false,
              inputAttributes: {
                maxlength: 50,
              },

              inputValidator: (value) => {
                let re = /\S+@\S+\.\S+/;
                return new Promise((resolve) => {
                  if (re.test(value)) {
                    resolve();
                  } else if (!re.test(value)) {
                    resolve("Eposta formatı uygun değil!");
                  } else {
                    resolve("Bu alan boş bırakılamaz!");
                  }
                });
              },
            });
            if (email) {
              const { value: password } = await Swal.fire({
                title: "3/3 Şifre",
                input: "password",
                inputPlaceholder: "Şifre giriniz",
                showCancelButton: true,
                cancelButtonText: "Vazgeç",
                confirmButtonText: "Kaydet",
                allowOutsideClick: false,
                inputAttributes: {
                  maxlength: 25,
                },
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (value !== "" && value.length >= 6) {
                      resolve();
                    } else {
                      resolve("Şifre 6 karakterden kısa olamaz!");
                    }
                  });
                },
              });

              if (password) {
                let personel = {
                  id: 0,
                  username: username,
                  email: email,
                  password: password,
                };
              } else {
                Swal.fire({
                  position: "center",
                  icon: "info",
                  title: "İşlemi iptal ettiniz!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            } else {
              Swal.fire({
                position: "center",
                icon: "info",
                title: "İşlemi iptal ettiniz!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          } else {
            Swal.fire({
              position: "center",
              icon: "info",
              title: "İşlemi iptal ettiniz!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }}
      >
        <i className="fas fa-sm fa-plus"></i> İlan Yayınla
      </button>
    </div>
  );
}
