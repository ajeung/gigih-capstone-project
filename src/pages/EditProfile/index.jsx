import photo from "../../assets/img/man.png"

const EditProfile = () => {
    return (
        <div className="home__container">
            <div className="form__wrapper">
                <h2>Edit Profile</h2>
                <div className="form__card">
                    <div>
                        <img className="profile__image" src={photo}></img>
                    </div>
                    <div className="data__user">
                        <form>
                            <label for="nama" className="nama">Nama</label>
                            <input id="nama" type="text"></input>
                            <br></br>
                            <label for="ttl" className="ttl">Tanggal Lahir</label>
                            <input id="ttl" type="date"></input>
                            <br></br>
                            <label for="jenisKelamin" className="jenisKelamin">Jenis Kelamin</label>
                            <input id="jenisKelamin" type="text"></input>
                            <br></br>
                            <label for="beratB" className="beratB">Berat Badan</label>
                            <input id="beratB" type="text"></input>
                            <br></br>
                            <label for="tinggiB" className="tinggiB">Tinggi Badan</label>
                            <input id="tinggiB" type="text"></input>
                            <br></br>
                            <button>Edit Profile</button>
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default EditProfile