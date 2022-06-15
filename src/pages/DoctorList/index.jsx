import styles from "./style.module.css";
import photo from "../../assets/img/woman.png";
import DoctorCard from "../../components/DoctorCard";
import DoctorListTitle from "../../components/DoctorListTitle";
import Header from "../../components/Header";

const DoctorList = () => {

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
    ]

    return (
        <div className={styles.container}>
            <DoctorListTitle title="Dokter Umum" />
            <div className={styles.doctor_list}>
                {
                    doctorList.map((doctor, doctorIdx) => (
                        <DoctorCard className={styles.card} key={doctorIdx} name={doctor.name} rating={doctor.rating} price={doctor.price} photo={doctor.photo} />
                    ))
                }
            </div>
        </div>
    );
};

export default DoctorList;