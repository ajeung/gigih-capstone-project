import React from 'react'
import '../assets/styles/style.css'
const DataUser = () => {
  return (
    <div className="wrapper">
        <div className="card">
            <div>
                <img className="profile_image" src='https://cdn-image.hipwee.com/wp-content/uploads/2018/10/hipwee-photo-1497704009475-24f74754c24e-640x427.jpg'></img>
            </div>
            <div className="data_user">
                <ul>
                    <li>Nama : </li>
                    <hr />
                    <li>Nim :</li>
                    <hr />
                    <li>Usia :</li>
                    <hr />
                    <li>Jenis kelamin :</li>
                    <hr />
                    <li>Berat badan :</li>
                    <hr />
                    <li>Tinggi badan :</li>
                    <hr />
                </ul>
                <div>
                    <button>Edit</button>
                    <button>Keluar</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DataUser