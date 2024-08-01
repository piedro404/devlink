import { Social } from "../../components/Social";
import { FaYoutube, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import {
    getDocs,
    collection,
    orderBy,
    query,
    doc,
    getDoc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnections";
import { useEffect, useState } from "react";

interface LinkProps {
    id: string;
    name: string;
    url: string;
    bg: string;
    color: string;
}

interface SocialProps {
    github: string;
    linkedin: string;
    youtube: string;
    instagram: string;
}

export function Home() {
    const [links, setLinks] = useState<LinkProps[]>([]);
    const [socialLinks, setSocialLinks] = useState<SocialProps>();

    useEffect(() => {
        function loadLinks() {
            const linksRef = collection(db, "links");
            const queryRef = query(linksRef, orderBy("created", "desc"));

            getDocs(queryRef)
                .then((snapshot) => {
                    let links = [] as LinkProps[];

                    snapshot.forEach((doc) => {
                        links.push({
                            id: doc.id,
                            name: doc.data().name,
                            url: doc.data().url,
                            bg: doc.data().bg,
                            color: doc.data().color,
                        });
                    });

                    setLinks(links);
                })
                .catch((error) => {
                    console.log("Erro ao buscar Links: " + error);
                });
        }

        loadLinks();
    }, []);

    useEffect(() => {
        function loadSocial() {
            const docRef = doc(db, "social", "link");
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        setSocialLinks({
                            github: snapshot.data()?.github,
                            linkedin: snapshot.data()?.linkedin,
                            youtube: snapshot.data()?.youtube,
                            instagram: snapshot.data()?.instagram,
                        });
                    }
                })
                .catch((error) => {
                    console.log("Erro ao Buscar Redes Sociais: " + error);
                });
        }

        loadSocial();
    }, []);

    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
                Piedro 404
            </h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                {links.map((link) => {
                    return (
                        <section
                            key={link.id}
                            className="mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
                            style={{
                                backgroundColor: link.bg,
                                color: link.color,
                            }}
                        >
                            <a href={link.url} target="_black">
                                <p className="md:text-lg text-base">
                                    {link.name}
                                </p>
                            </a>
                        </section>
                    );
                })}

                {socialLinks && Object.keys(socialLinks).length > 0 && (
                    <footer className="flex flex-row justify-center gap-3 my-4">
                        <Social url={socialLinks?.github}>
                            <FaGithub size={35} color="#fff"></FaGithub>
                        </Social>

                        <Social url={socialLinks?.linkedin}>
                            <FaLinkedin size={35} color="#fff"></FaLinkedin>
                        </Social>

                        <Social url={socialLinks?.youtube}>
                            <FaYoutube size={35} color="#fff"></FaYoutube>
                        </Social>

                        <Social url={socialLinks?.instagram}>
                            <FaInstagram size={35} color="#fff"></FaInstagram>
                        </Social>
                    </footer>
                )}
            </main>
        </div>
    );
}
