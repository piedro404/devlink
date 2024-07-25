import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnections";

export function Network() {
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [youtube, setYoutube] = useState("");
    const [instagram, setInstagram] = useState("");

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(db, "social", "link");
            getDoc(docRef)
                .then((snapshot) => {
                    if(snapshot.data() !== undefined){
                        setGithub(snapshot.data()?.github)
                        setLinkedin(snapshot.data()?.linkedin)
                        setYoutube(snapshot.data()?.youtube)
                        setInstagram(snapshot.data()?.instagram)
                    }
                })
                .catch((error) => {
                    console.log("Erro ao buscar links: " + error);
                });
        }
    }, []);

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            github: github,
            linkedin: linkedin,
            youtube: youtube,
            instagram: instagram,
        })
            .then(() => {
                console.log("Redes Sociais Definidas com Sucesso");
            })
            .catch((error) => {
                console.log("Erro ao salvar: " + error);
            });
    }

    return (
        <div className="flex flex-col items-center min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">
                Minhas Redes Sociais
            </h1>

            <form
                className="flex flex-col w-full max-w-xl"
                onSubmit={handleRegister}
            >
                <label className="text-white font-medium mt-2 mb-2">
                    Link do Github
                </label>

                <Input
                    type="url"
                    placeholder="Digite a url do seu perfil do Github"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-2">
                    Link do Linkedin
                </label>

                <Input
                    type="url"
                    placeholder="Digite a url do seu perfil do Linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-2">
                    Link do Youtube
                </label>

                <Input
                    type="url"
                    placeholder="Digite a url do seu perfil do Youtube"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-2">
                    Link do Instagram
                </label>

                <Input
                    type="url"
                    placeholder="Digite a url do seu perfil do Instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex items-center justify-center mb-7"
                >
                    Salvar
                </button>
            </form>
        </div>
    );
}
