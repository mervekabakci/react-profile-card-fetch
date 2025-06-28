export default function ProfileCard( {userData} ){
    return(
        <>
            {userData.users.map((user) => (
                <div className="card" key={user.id}>
                <div className="userImage">
                    <img src={user.image} alt={user.image} />
                </div>
                <div className="userInfo">
                    <div className="userName">{user.firstName} {user.lastName}</div>
                    <div><span className="title">Yaş : </span> {user.age}</div>
                    <div><span className="title">E-Posta : </span> <a href="mailto:{user.email}">{user.email}</a></div>
                    <div><span className="title">Telefon :</span> <a href="tel:{user.phone}">{user.phone}</a></div>
                    <div><span className="title">Doğum Tarihi :</span> {user.birthDate}</div>
                    <div><span className="title">Adres :</span> {user.address.address} - {user.address.city} / {user.address.state} / {user.address.country}</div>
                </div>
                </div>
            ))}
        </>
    )
}