const EditProfile = () => {
    return (
        <div className="home__container">
            <div className="form__wrapper">
                <h2>Edit Profile</h2>
                <div className="form__card">
                    <div>
                        <img className="profile__image" src='https://cdn-image.hipwee.com/wp-content/uploads/2018/10/hipwee-photo-1497704009475-24f74754c24e-640x427.jpg'></img>
                    </div>
                    <div className="data__user">
                        <form>
                            <label for="firstName" class="first-name">First Name</label>
                            <input id="firstName" type="text"></input>
                            <br></br>
                            <label for="lastName" class="last-name">Last Name</label>
                            <input id="lastName" type="text"></input>
                            <br></br>
                            <label for="ttl" class="ttl">Tanggal Lahir</label>
                            <input id="ttl" type="date"></input>
                            <br></br>
                            <label for="email" class="email">Email</label>
                            <input id="email" type="text"></input>
                            <br></br>
                            <label for="password" class="password">Password</label>
                            <input id="password" type="password"></input>
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