import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SocialMediService from "../../services/SocialMediaService";

function UpdateSocialMedia(props) {
  const socialMediaService = new SocialMediService();

  const [smId, setSmId] = useState([]);

  function getSocialMediaByCvId() {
    return socialMediaService.getSocialMediaByCvId(
      props.getSocialMedias()
    );
  }

  useEffect(() => {
    let isMounted = true;
    getSocialMediaByCvId().then((res) => {
      if (isMounted) {
        setSmId(res.data.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  function updateSocialMedia(sm) {
    return socialMediaService.updateSocialMedia(sm).then(() => {
      getSocialMediaByCvId().then((res) => {
        setSmId(res.data.data);
      });
      props.getSocialMedias();
    });
  }

  return (
    <div>
      <span
        title={"Link değiştir"}
        className="bg-indigo-500 cursor-pointer px-2 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-xs font-semibold capitalize px-1 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-250"
        onClick={async () => {
          try {
            const { value: githubLink} = await Swal.fire({
              title: "1/2 Github Linki",
              input: "text",
              inputPlaceholder: "Github linki giriniz",
              inputValue: smId.githubLink,
              showCancelButton: true,
              cancelButtonText: "Vazgeç",
              confirmButtonText: "Kaydet",
              allowOutsideClick: false,
              inputAttributes: {
                maxlength: 21,
              },

              inputValidator: (value) => {
                return new Promise((resolve) => {
                  if (value != "") {
                    resolve();
                  } else {
                    resolve("Bu alan boş bırakılamaz!");
                  }
                });
              },
            });

            if (githubLink) {
              const { value: linkedinLink } = await Swal.fire({
                title: "2/2 Linkedin Kullanıcı Adı",
                input: "text",
                inputPlaceholder: "Linkedin kullanıcı adınızı giriniz",
                inputValue: smId.linkedinLink,
                showCancelButton: true,
                cancelButtonText: "Vazgeç",
                confirmButtonText: "Kaydet",
                allowOutsideClick: false,
                inputAttributes: {
                  maxlength: 21,
                },

                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (value != "") {
                      resolve();
                    } else {
                      resolve("Bu alan boş bırakılamaz!");
                    }
                  });
                },
              });
              if (linkedinLink) {
                let socialMedia = {
                  cVId: props.getSocialMedias(),
                  githubLink: githubLink,
                  id: smId.id,
                  linkedinLink: linkedinLink,
                };
                updateSocialMedia(socialMedia);
                Swal.fire({
                  icon: "success",
                  title: "Sosyal Medya bilgileriniz başarıyla güncellendi!",
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
            } else {
              Swal.fire({
                position: "center",
                icon: "info",
                title: "İşlemi iptal ettiniz!",
                showConfirmButton: false,
                timer: 1500,
              });
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
        <i className={"fas fa-sm fa-edit"}></i> Düzenle
      </span>
    </div>
  );
}
export default UpdateSocialMedia;
