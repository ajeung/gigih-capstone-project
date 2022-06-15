import photo from "../../assets/img/woman.png";
import styles from "./style.module.css";
import DoctorCard from "../../components/DoctorCard";
import DoctorCategory from "../../components/DoctorCategory";
import Header from "../../components/Header";

const SearchDoctor = () => {
  console.log("kena");

  const categories = [
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
    { title: "Spesialis" },
  ];

  const doctorList = [
    {
      name: "Nama Dokter Umum",
      rating: 5,
      price: "Rp 20.000",
      photo: photo,
    },
    {
      name: "Nama Dokter Umum",
      rating: 5,
      price: "Rp 20.000",
      photo: photo,
    },
    {
      name: "Nama Dokter Umum",
      rating: 5,
      price: "Rp 20.000",
      photo: photo,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <h3>Kategori Dokter</h3>
        {categories.map((category, categoryIdx) => (
          <DoctorCategory key={categoryIdx} title={category.title} />
        ))}
      </div>
      <div className={styles.doctor_list}>
        {doctorList.map((doctor, doctorIdx) => (
          <DoctorCard
            key={doctorIdx}
            name={doctor.name}
            rating={doctor.rating}
            price={doctor.price}
            photo={doctor.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchDoctor;
