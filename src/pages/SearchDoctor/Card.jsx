import React from "react";
import DoctorCard from "../../components/DoctorCard";
import styles from "./style.module.css";
import photo from "../../assets/img/woman.png";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
                <DoctorCard
                    className={styles.card}
                    key={Val.id}
                    name={Val.name}
                    photo={photo}
                />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;