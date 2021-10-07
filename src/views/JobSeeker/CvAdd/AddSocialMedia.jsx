import React from "react";
import Swal from "sweetalert2";
import SocialMediService from "../../../services/SocialMediaService";

export default function AddSocialMedia(props) {
  const socialMediaService = new SocialMediService();

  function addSocialMedia(sm) {
    return socialMediaService.addSocialMedia(sm).then(() => {
      props.getSocialMedias();
    });
  }

  return (
    <div>
      <span
        title={"Kullanıcı Linki Ekle"}
        className="bg-indigo-500 cursor-pointer px-2 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-xs font-semibold capitalize px-1 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-250"
        onClick={async () => {
          try {
            const { value: githubLink } = await Swal.fire({
              title: "Github Linkinizi Giriniz",
              input: "text",
              inputPlaceholder: "Github linkinizi giriniz",
              showCancelButton: true,
              cancelButtonText: "Vazgeç",
              confirmButtonText: "Kaydet",
              allowOutsideClick: false,
              inputAttributes: {
                maxlength: 21,
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

            if (githubLink) {
              const { value: linkedinLink } = await Swal.fire({
                title: "Linkedin Linki",
                input: "text",
                inputPlaceholder: "Linkedin linki giriniz",
                showCancelButton: true,
                cancelButtonText: "Vazgeç",
                confirmButtonText: "Kaydet",
                allowOutsideClick: false,
                inputAttributes: {
                  maxlength: 21,
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
              if (linkedinLink) {
                let socialMedia = {
                  CvId: props.getSocialMedias(),
                  githubLink: githubLink,
                  id: 0,
                  linkedinLink: linkedinLink,
                };
                addSocialMedia(socialMedia);
                Swal.fire({
                  icon: "success",
                  title: "Sosyal Medya bilgileriniz başarıyla eklendi!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
                Swal.fire({
                  position: "center",
                  icon: "info",
                  title: "İşlemi iptal ettiniz!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            }
          } catch (e) {
            
            Swal.fire({
              icon: "error",
              title: "HATA",
              text: e,
              confirmButtonText: "Tamam",
            });
          }
        }}
      >
        <i className={"fas fa-sm fa-plus"}></i> Ekle
      </span>
    </div>
  );
}
