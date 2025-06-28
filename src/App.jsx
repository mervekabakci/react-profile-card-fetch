import { useState, useEffect } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

export default function App() {
    const [userData, setUserData] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((json) => {
                setUserData(json);
                setDataIsLoaded(true);
            });
    }, []); 
    if (!dataIsLoaded) {
        return (
            <div>
                <h1>Kişiler Yükleniyor Lütfen bekleyiniz...</h1>
            </div>
        );
    }
    return (
      <div className="cards">
        <ProfileCard userData={userData} />
      </div>
    );
};