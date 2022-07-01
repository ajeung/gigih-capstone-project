// import photo from "../../assets/img/woman.png";
// import styles from "./style.module.css";
// import DoctorCard from "../../components/DoctorCard";
// import DoctorCategory from "../../components/DoctorCategory";

// const SearchDoctor = () => {

//   const categories = [
//     { title: "Pengembangan Diri" },
//     { title: "Stress dan Kecemasan" },
//     { title: "Hubungan antar Manusia" },
//     { title: "Pekerjaan dan Pendidikan" },
//     { title: "Seksualitas dan Gender" },
//   ];

//   const doctorList = [
//     {
//       name: "Nama Dokter Umum",
//       rating: 5,
//       price: "Rp 20.000",
//       photo: photo,
//     },
//     {
//       name: "Nama Dokter Umum",
//       rating: 5,
//       price: "Rp 20.000",
//       photo: photo,
//     },
//     {
//       name: "Nama Dokter Umum",
//       rating: 5,
//       price: "Rp 20.000",
//       photo: photo,
//     },
//   ];

//   return (
//     <div className={styles.container}>
//       <div className={styles.categories}>
//         <h3>Kategori Dokter</h3>
//         {categories.map((category, categoryIdx) => (
//           <DoctorCategory key={categoryIdx} title={category.title} />
//         ))}
//       </div>
//       <div className={styles.doctor_list}>
//         {doctorList.map((doctor, doctorIdx) => (
//           <DoctorCard
//             key={doctorIdx}
//             name={doctor.name}
//             rating={doctor.rating}
//             price={doctor.price}
//             photo={doctor.photo}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchDoctor;

import React, { useState } from "react";
import data from "../../assets/data/data_dokter";
import Card from "./Card";
import Buttons from "./Button";

const SearchDoctor = () => {
  const [item, setItem] = useState(data);

  const menuItems = [...new Set(data.map((Val) => Val.speciality))];

  const filterItem = (curcat) => {
    const newItem = data.filter((newVal) => {
      return newVal.speciality === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
      <Buttons 
        filterItem={filterItem}
        setItem={setItem}
        menuItems={menuItems}
      />
      <Card item={item} />
    </>
  );
};

export default SearchDoctor;