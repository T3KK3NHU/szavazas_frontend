import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import TextBox from "../components/TextBox"
import Button from "../components/Button"
import { regisztracio } from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function RegistrationPage(){
    const navigation= useNavigate();

    const [email, setEmail] = useState("");
    const [felhasználonev, setFelhasznalonev] = useState("");
    const [jelszo, setJelszo] = useState("");
    const [jelszo2, setJelszo2] = useState("");

    
    return(
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div style={{minWidth: 700}}>
                <div className="text-center fs-1">Regisztráció</div>
                <TextBox title={"E-mail"} type={"email"} placeholder={"Add meg az email cimed te cigány"} value={email} setValue={setEmail}/>
                <TextBox title={"Felhasználónév"} type={"text"} placeholder={"Add meg a felhasználóneved te cigány"} value={felhasználonev} setValue={setFelhasznalonev}/>
                <TextBox title={"Jelszó"} type={"password"} placeholder={"Add meg a jelszavad te cigány"} value={jelszo} setValue={setJelszo}/>
                <TextBox title={"Jelszó megerősítés"} type={"password"} placeholder={"Add meg újra a jelszavad te cigány"} value={jelszo2} setValue={setJelszo2} />
                <div className="text-center mt-2">
                    <Button content={"Regisztráció"} color={"dark"} onClick={async ()=> {
                        if (!email || !felhasználonev || !jelszo || !jelszo2) {
                            return alert("Hiányos beviteli adat(ok)!")
                        }
                        if (jelszo !== jelszo2) {
                            return alert("A jelszavak nem egyeznek")
                        }
                        const res = await regisztracio(email, felhasználonev, jelszo)
                        alert(res.message)
                        if (res.result)
                        {
                            // navigálás a bejelentkezésbe
                            navigation('/login')
                        }
                    }} />
                </div>
                <div className="text-center mt-3">
                <Link to="/login" className="text-dark text-decoration-none">Van fiókom</Link> 
                </div>
            </div>
        </div>
    )
}