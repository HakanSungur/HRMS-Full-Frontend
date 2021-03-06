import React, { useEffect, useState } from "react";

import ProfileNavbar from "../../components/Navbars/ProfileNavbar";
import Footer from "../../components/Footers/Footer";
import CVService from "../../services/CVService";
import Swal from "sweetalert2";
import EducationDelete from "./CvDelete/EducationDelete";
import JobExperienceDelete from "./CvDelete/JobExperienceDelete";
import LanguageDelete from "./CvDelete/LanguageDelete";
import AddEducation from "./CvAdd/AddAducation";
import EducationService from "../../services/EducationService";
import AddJobExperiences from "./CvAdd/AddJobExperience";
import JobExperienceService from "../../services/JobExperienceService";
import AddJobSeekerLanguage from "./CvAdd/AddJobSeekerLanguage";
import JobSeekerLanguageService from "../../services/JobSeekerLanguageService";
import AddTechnology from "./CvAdd/AddTechnology";
import TechnologyService from "../../services/TechnologyService";
import AddSocialMedia from "./CvAdd/AddSocialMedia";
import UpdateSocialMedia from "../../components/Utility/UpdateSocialMedia";

export default function JobSeekerProfile() {
  const cVService = new CVService();

  const technologyService = new TechnologyService();

  const educationService = new EducationService();

  const jobExperienceService = new JobExperienceService();

  const jobSeekerLanguageService = new JobSeekerLanguageService();

  const [cv, setCv] = useState([]);

  const [cvEducations, setCvEducations] = useState([]);

  const [cvJobExperiences, setCvJobExperiences] = useState([]);

  const [cvJobSeekerLanguages, setCvJobSeekerLanguages] = useState([]);

  const [cvTechnologies, setCvTechnologies] = useState([]);

  const [cvSocialMedias, setCvSocialMedias] = useState([]);

  let jobSeekerId = 1; //burası login yapmış olan kullanıcıdan alınacak

  function findCvByJobSeekerId() {
    return cVService.findCvByJobSeekerId(jobSeekerId);
  }

  useEffect(() => {
    let isMounted = true;
    findCvByJobSeekerId().then((res) => {
      if (isMounted) {
        setCv(res.data.data);
      }
    });
    findCvByJobSeekerId().then((res) => {
      if (isMounted) {
        setCvEducations(res.data.data.educations);
      }
    });
    findCvByJobSeekerId().then((res) => {
      if (isMounted) {
        setCvJobExperiences(res.data.data.jobExperiences);
      }
    });
    findCvByJobSeekerId().then((res) => {
      if (isMounted) {
        setCvJobSeekerLanguages(res.data.data.jobSeekerLanguages);
      }
    });
    findCvByJobSeekerId().then((res) => {
      if (isMounted) {
        setCvTechnologies(res.data.data.technologies);
      }
    });
    findCvByJobSeekerId().then((res) => {
      if (isMounted) {
        setCvSocialMedias(res.data.data.socialMedia);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  function deleteEducationById(id) {
    educationService.deleteEducationById(id).then((response) => {
      findCvByJobSeekerId().then((res) => {
        setCvEducations(res.data.data.educations);
      });
    });
  }

  function deleteJobExperienceById(id) {
    jobExperienceService.deleteJobExperienceById(id).then(() => {
      findCvByJobSeekerId().then((res) => {
        setCvJobExperiences(res.data.data.jobExperiences);
      });
    });
  }

  function deleteTechnologyById(id) {
    technologyService.deleteTechnologyById(id).then(() => {
      findCvByJobSeekerId().then((res) => {
        setCvTechnologies(res.data.data.technologies);
      });
    });
  }

  function deleteJobSeekerLanguageById(id) {
    jobSeekerLanguageService.deleteJobSeekerLanguageById(id).then(() => {
      findCvByJobSeekerId().then((res) => {
        setCvJobSeekerLanguages(res.data.data.jobSeekerLanguages);
      });
    });
  }

  function updateCv(cv) {
    cVService.updateCv(cv).then(() => {
      findCvByJobSeekerId().then((res) => {
        setCv(res.data.data);
      });
    });
  }

  function getEducations() {
    findCvByJobSeekerId().then((res) => {
      setCvEducations(res.data.data.educations);
    });
    return jobSeekerId;
  }

  function getJobEXperiences() {
    findCvByJobSeekerId().then((res) => {
      setCvJobExperiences(res.data.data.jobExperiences);
    });
    return jobSeekerId;
  }

  function getJobSeekerLanguages() {
    findCvByJobSeekerId().then((res) => {
      setCvJobSeekerLanguages(res.data.data.jobSeekerLanguages);
    });
    return jobSeekerId;
  }

  function getTechnologies() {
    findCvByJobSeekerId().then((res) => {
      setCvTechnologies(res.data.data.technologies);
    });
    return jobSeekerId;
  }

  function getSocialMedias() {
    findCvByJobSeekerId().then((res) => {
      setCvSocialMedias(res.data.data.socialMedia);
    });
    return cv.id;
  }

  function uploadImage() {
    document.getElementById("image").src =
      "https://res.cloudinary.com/torukobyte/image/upload/v1625589853/svg-cloud-upload-long-shadow-icon-1_akc2uc.png";
  }

  function originalImage() {
    document.getElementById("image").src = cv.pictureUrl;
    document.getElementById("image").title = "Fotoğraf Yükle";
  }

  return (
    <>
      <ProfileNavbar fixed />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div
            className="relative flex flex-col min-w-0 break-words w-1/2 mx-auto mb-6 shadow-lg rounded-lg  border-0"
            style={{
              marginTop: "-20em",
              background: "rgba(43,62,80,0.3)",
              border: "2px solid rgba(99,102,241,0.55)",
              boxShadow: "3px 5px 4px rgba(0,0,0,0.64)",
            }}
          >
            <div className="flex-auto px-4 mt-6 lg:px-10 py-10 pt-0">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    id={"image"}
                    alt="..."
                    src={cv?.pictureUrl}
                    className="shadow-xl rounded-full cursor-pointer hover:bg-purple-400 align-middle mt-2 border-none flex lg:-ml-16 max-w-150-px"
                    onMouseOver={() => {
                      uploadImage();
                    }}
                    onMouseOut={() => {
                      originalImage();
                    }}
                    style={{
                      marginLeft: "-24rem",
                      border: "2px solid rgba(99,102,241,0.3)",
                    }}
                    onClick={async () => {
                      const { value: file } = await Swal.fire({
                        title: "Fotoğraf Seç",
                        input: "file",
                        inputAttributes: {
                          accept: "image/*",
                          "aria-label": "Upload your profile picture",
                        },
                        showCancelButton: true,
                        cancelButtonText: "Vazgeç",
                        confirmButtonText: "Kaydet",
                      });

                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          Swal.fire({
                            title: "Your uploaded picture",
                            imageUrl: e.target.result,
                            imageAlt: "The uploaded picture",
                          });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>
              </div>
              <form>
                <div className="flex flex-wrap mt-10">
                  <div className="w-full lg:w-6/12 px-12">
                    <div className="relative w-full mb-3">
                      <input
                        type="text"
                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder={"Ad"}
                        defaultValue={cv?.jobSeeker?.firstName}
                        style={{ cursor: "default" }}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-12">
                    <div className="relative w-full mb-3">
                      <input
                        type="text"
                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder={"Soyad"}
                        defaultValue={cv?.jobSeeker?.lastName}
                        style={{ cursor: "default" }}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-12">
                    <div className="relative w-full mb-3">
                      <input
                        type="email"
                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder={"E-Posta Adresi"}
                        defaultValue={cv?.jobSeeker?.email}
                        style={{ cursor: "default" }}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-12">
                    <div className="relative w-full mb-3">
                      <input
                        type="text"
                        className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder={"Tc kimlik numarası"}
                        defaultValue={cv?.jobSeeker?.identityNumber}
                        style={{ cursor: "default" }}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="w-full mx-auto lg:w-12/12 px-12">
                    <div className="relative w-full mb-3">
                      <div className={"flex flex-wrap mt-2"}>
                        <label
                          className="block uppercase text-black text-xs mt-2 font-bold mb-3"
                          htmlFor="grid-password"
                        >
                          Hakkımda
                        </label>

                        <div
                          className="w-full absolute lg:w-4/12 px-4 lg:order-3 mb-1 lg:text-right lg:self-center"
                          style={{ marginLeft: "70%" }}
                        >
                          <div className="py-2 px-2 sm:mt-0">
                            <span
                              title={"Hakkımda Bilgisini Düzenle"}
                              className="bg-indigo-500 cursor-pointer text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-xs font-semibold capitalize px-1 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-250"
                              onClick={async () => {
                                const { value: text } = await Swal.fire({
                                  input: "textarea",
                                  inputLabel: "Hakkımda",
                                  inputPlaceholder: cv.coverLetter,
                                  inputValue: cv.coverLetter,
                                  inputAttributes: {
                                    maxlength: 200,
                                  },
                                  showCancelButton: true,
                                  cancelButtonText: "Vazgeç",
                                  confirmButtonText: "Kaydet",
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

                                if (text) {
                                  let curriculaVitae = {
                                    id: cv.id,
                                    jobSeekerId: jobSeekerId,
                                    pictureUrl: cv.pictureUrl,
                                    coverLetter: text,
                                  };
                                  updateCv(curriculaVitae);
                                  Swal.fire({
                                    icon: "success",
                                    title:
                                      "Hakkımda bilgisi başarıyla güncellendi!",
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
                              }}
                            >
                              <i className={"far fa-sm fa-edit"}></i> Düzenle
                            </span>
                          </div>
                        </div>
                      </div>

                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="3"
                        placeholder={"Hobilerin, hedeflerin vb."}
                        defaultValue={cv?.coverLetter}
                        style={{ cursor: "default" }}
                        maxLength={200}
                        readOnly={true}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <hr
                  className="mt-6 "
                  style={{ borderBottom: "1px solid black" }}
                />
                <div className={"flex flex-wrap mt-2"}>
                  <label
                    className="block uppercase text-black text-sm mt-2 font-bold mb-3"
                    htmlFor="grid-password"
                  >
                    Eğitim Bilgileri
                  </label>

                  <div
                    className="w-full absolute lg:w-4/12 px-4 lg:order-3 mb-1 lg:text-right lg:self-center"
                    style={{ marginLeft: "56%" }}
                  >
                    <div className="py-2 px-2 sm:mt-0">
                      <AddEducation getEducations={() => getEducations()} />
                    </div>
                  </div>
                </div>

                {cvEducations != null
                  ? cvEducations.map((education, index) => (
                      <div className="flex flex-wrap" key={education.id}>
                        <div className="w-full lg:w-6/12 px-12">
                          <div className="relative w-full mb-3">
                            <input
                              type="text"
                              className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder={"Okul Adı"}
                              defaultValue={education.school?.schoolName}
                              style={{ cursor: "default" }}
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-12">
                          <div className="relative w-full mb-3">
                            <input
                              type="text"
                              className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder={"Bölüm Adı"}
                              defaultValue={
                                education.department?.departmentName
                              }
                              style={{ cursor: "default" }}
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-12">
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-black text-xs font-semibold font-bold mb-2">
                              Başlangıç Tarihi
                            </label>
                            <input
                              type="date"
                              className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              defaultValue={education.startDate}
                              style={{ cursor: "default" }}
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-12">
                          <div className="relative w-full mb-3">
                            <label className="block uppercase black text-xs font-semibold font-bold mb-2">
                              Bitiş Tarihi
                            </label>
                            <input
                              type={
                                education.endDate === null ? "text" : "date"
                              }
                              className="border-0 px-3 py-2 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              defaultValue={
                                education.endDate === null
                                  ? "Henüz mezun olmadı"
                                  : education.endDate
                              }
                              style={{ cursor: "default" }}
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div
                          className={"absolute"}
                          style={{ marginLeft: "90%", marginTop: "2.7rem" }}
                        >
                          <EducationDelete
                            deleteEducation={() =>
                              deleteEducationById(education.id)
                            }
                          />
                        </div>
                        <span
                          className={"mt-2 mb-6 mx-auto"}
                          style={{
                            borderBottom: "1px solid #000",
                            width: "89%",
                          }}
                        ></span>
                      </div>
                    ))
                  : ""}

                <hr
                  className="mt-6 "
                  style={{ borderBottom: "1px solid black" }}
                />

                <div className={"flex flex-wrap mt-2"}>
                  <label
                    className="block uppercase text-black text-sm mt-2 font-bold mb-3"
                    htmlFor="grid-password"
                  >
                    İş Tecrübeleri
                  </label>

                  <div
                    className="w-full absolute lg:w-4/12 px-4 lg:order-3 mb-1 lg:text-right lg:self-center"
                    style={{ marginLeft: "56%" }}
                  >
                    <div className="py-2 px-2 sm:mt-0">
                      <AddJobExperiences
                        getJobExperiences={() => getJobEXperiences()}
                      />
                    </div>
                  </div>
                </div>
                {cvJobExperiences != null
                  ? cvJobExperiences.map((jobExperience, index) => (
                      <div className="flex flex-wrap" key={jobExperience.id}>
                        <div className="w-full lg:w-6/12 px-12">
                          <div className="relative w-full mb-3">
                            <input
                              type="text"
                              className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder={"Şirket Adı"}
                              defaultValue={jobExperience.companyName}
                              style={{ cursor: "default" }}
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-12">
                          <div className="relative w-full mb-3">
                            <input
                              type="text"
                              className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder={"Pozisyon Adı"}
                              defaultValue={jobExperience.positionName}
                              style={{ cursor: "default" }}
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-12">
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-black text-xs font-semibold font-bold mb-2">
                              Başlangıç Tarihi
                            </label>
                            <input
                              type="date"
                              className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              defaultValue={jobExperience.startDate}
                              style={{ cursor: "default" }}
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-12">
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-black text-xs font-semibold font-bold mb-2">
                              Bitiş Tarihi
                            </label>
                            <input
                              type={
                                jobExperience.endDate == null ? "text" : "date"
                              }
                              className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              defaultValue={
                                jobExperience.endDate == null
                                  ? "Çalışmaya devam ediyor"
                                  : jobExperience.endDate
                              }
                              style={{ cursor: "default" }}
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div
                          className={"absolute"}
                          style={{ marginLeft: "90%", marginTop: "2.7rem" }}
                        >
                          <JobExperienceDelete
                            deleteJobExperienceById={() =>
                              deleteJobExperienceById(jobExperience.id)
                            }
                          />
                        </div>
                        <span
                          className={"mt-2 mb-6 mx-auto"}
                          style={{
                            borderBottom: "1px solid #000",
                            width: "89%",
                          }}
                        ></span>
                      </div>
                    ))
                  : ""}
                <hr
                  className="mt-6 "
                  style={{ borderBottom: "1px solid black" }}
                />

                <div className={"flex flex-wrap mt-2"}>
                  <label
                    className="block uppercase text-black text-sm mt-2 font-bold mb-3"
                    htmlFor="grid-password"
                  >
                    Yabancı Diller
                  </label>

                  <div
                    className="w-full absolute lg:w-4/12 px-4 lg:order-3 mb-1 lg:text-right lg:self-center"
                    style={{ marginLeft: "56%" }}
                  >
                    <div className="py-2 px-2 sm:mt-0">
                      <AddJobSeekerLanguage
                        getJobSeekerLanguages={() => getJobSeekerLanguages()}
                      />
                    </div>
                  </div>
                </div>
                {cvJobSeekerLanguages != null
                  ? cvJobSeekerLanguages.map((language, index) => (
                      <div className="flex flex-wrap" key={language.id}>
                        <div className="w-full lg:w-6/12 px-12">
                          <div className="relative w-full mb-3">
                            <input
                              type="text"
                              className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              style={{ cursor: "default" }}
                              placeholder={"Yabancı Dil"}
                              defaultValue={language.language?.languageName}
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12">
                          <div className="flex mb-3">
                            <span
                              type="text"
                              className="border-0 py-2 mx-auto text-center placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                              placeholder={"Dil Derecesi"}
                              style={{ width: "77.48%" }}
                            >
                              <i
                                className={"fas fa-lg fa-star"}
                                style={
                                  language.languageDegree >= 1
                                    ? { color: "#6366F1" }
                                    : {}
                                }
                              ></i>
                              <i
                                className={"fas fa-lg fa-star"}
                                style={
                                  language.languageDegree >= 2
                                    ? { color: "#6366F1" }
                                    : {}
                                }
                              ></i>
                              <i
                                className={"fas fa-lg fa-star"}
                                style={
                                  language.languageDegree >= 3
                                    ? { color: "#6366F1" }
                                    : {}
                                }
                              ></i>
                              <i
                                className={"fas fa-lg fa-star"}
                                style={
                                  language.languageDegree >= 4
                                    ? { color: "#6366F1" }
                                    : {}
                                }
                              ></i>
                              <i
                                className={"fas fa-lg fa-star"}
                                style={
                                  language.languageDegree == 5
                                    ? { color: "#6366F1" }
                                    : {}
                                }
                              ></i>
                            </span>
                          </div>
                        </div>
                        <div
                          className={"absolute"}
                          style={{ marginLeft: "90%", marginTop: "0.1.5rem" }}
                        >
                          <LanguageDelete
                            deleteJobSeekerLanguageById={() =>
                              deleteJobSeekerLanguageById(language.id)
                            }
                          />
                        </div>
                      </div>
                    ))
                  : ""}
                <hr
                  className="mt-6 "
                  style={{ borderBottom: "1px solid black" }}
                />

                <div className={"flex flex-wrap mt-2"}>
                  <label
                    className="block uppercase text-black text-sm mt-2 font-bold mb-3"
                    htmlFor="grid-password"
                  >
                    Yetenekler/Teknolojiler
                  </label>

                  <div
                    className="w-full absolute lg:w-4/12 px-4 lg:order-3 mb-1 lg:text-right lg:self-center"
                    style={{ marginLeft: "56%" }}
                  >
                    <div className="py-2 px-2 sm:mt-0">
                      {cvTechnologies.length > 5 ? (
                        ""
                      ) : (
                        <AddTechnology
                          getTechnologies={() => getTechnologies()}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className=" mx-auto lg:w-12/12 px-12">
                    <div className="flex mx-auto mt-1">
                      {cvTechnologies.map((technology, index) => (
                        <span
                          className="w-1/3 text-white text-sm font-bold uppercase px-3 py-2 mr-2 rounded-full shadow outline-none focus:outline-none ease-linear transition-all duration-150"
                          key={technology.id}
                          style={
                            index % 2 == 0
                              ? {
                                  backgroundColor: "#6366F1",
                                  cursor: "default",
                                }
                              : {
                                  backgroundColor: "#A855F7",
                                  cursor: "default",
                                }
                          }
                        >
                          <i
                            title={"Sil"}
                            className={
                              "fas fa-times mr-2 cursor-pointer hover:text-red-400"
                            }
                            onClick={() => {
                              Swal.fire({
                                icon: "warning",
                                title: "Emin misiniz?",
                                showDenyButton: true,
                                // showCancelButton: true,
                                confirmButtonText: `Sil`,
                                denyButtonText: `Vazgeç`,
                              }).then((result) => {
                                /* Read more about isConfirmed, isDenied below */
                                if (result.isConfirmed) {
                                  deleteTechnologyById(technology.id);
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
                                        "mouseleave",
                                        Swal.resumeTimer
                                      );
                                    },
                                  });

                                  Toast.fire({
                                    icon: "success",
                                    html: "<h1 style='font-family: Ubuntu;color: white;'>Başarıyla Kaldırıldı!</h1>",
                                  });
                                } else if (result.isDenied) {
                                  Swal.fire({
                                    position: "center",
                                    icon: "info",
                                    title: "İşlemi iptal ettiniz!",
                                    showConfirmButton: false,
                                    timer: 1500,
                                  });
                                }
                              });
                            }}
                          ></i>{" "}
                          {technology.plName}
                        </span>
                      ))}
                      
                    </div>
                  </div>
                </div>
                <hr
                  className="mt-6 "
                  style={{ borderBottom: "1px solid black" }}
                />

                <div className={"flex flex-wrap mt-2"}>
                  <label
                    className="block uppercase text-black text-sm mt-2 font-bold mb-3"
                    htmlFor="grid-password"
                  >
                    Sosyal Hesaplar
                  </label>

                  <div
                    className="w-full absolute lg:w-4/12 px-4 lg:order-3 mb-1 lg:text-right lg:self-center"
                    style={{ marginLeft: "56%" }}
                  >
                    <div className="py-2 px-2 sm:mt-0">
                      {cvSocialMedias?.githubLink != null ||
                      cvSocialMedias?.linkedinLink != null ? (
                        <UpdateSocialMedia
                          getSocialMedias={() => getSocialMedias()}
                        />
                      ) : (
                        <AddSocialMedia
                          getSocialMedias={() => getSocialMedias()}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-12">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-black text-xs font-semibold font-bold mb-2">
                        <i className={"fab fa-lg fa-github text-black"}></i>{" "}
                        Github
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder={"Github Linki"}
                        defaultValue={cvSocialMedias?.githubLink}
                        style={{ cursor: "default" }}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-12">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-black text-xs font-semibold font-bold mb-2">
                        <i className={"fab fa-lg fa-linkedin text-black"}></i>{" "}
                        Linkedin
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-2 placeholder-blueGray-600 font-semibold text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder={"Linkedin Kullanıcı Adı"}
                        defaultValue={cvSocialMedias?.linkedinLink}
                        style={{ cursor: "default" }}
                        readOnly={true}
                      />
                    </div>
                  </div>
                </div>

               
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
