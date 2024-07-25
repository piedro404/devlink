import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiTrash } from "react-icons/fi";

import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnections";

interface LinkProps {
    id: string;
    name: string;
    url: string;
    bg: string;
    color: string;
}

export function Admin() {
    const [nameLink, setNameLink] = useState("");
    const [urlLink, setUrlLink] = useState("");
    const [backgroundColorLink, setBackgroundColorLink] = useState("#F1F1F1");
    const [textColorLink, setTextColorLink] = useState("#121212");
    const [links, setLinks] = useState<LinkProps[]>([])

    useEffect(() => {
        const linksRef = collection(db, "links");
        const queryRef = query(linksRef, orderBy("created", "desc"));

        const unsub = onSnapshot(queryRef, (snapshot) => {
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
        });

        return () => {
            unsub();
        }
    }, []);

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        if (
            nameLink === "" ||
            urlLink === "" ||
            backgroundColorLink === "" ||
            textColorLink === ""
        ) {
            alert("Preencha todos os campos");
            return;
        }

        addDoc(collection(db, "links"), {
            name: nameLink,
            url: urlLink,
            bg: backgroundColorLink,
            color: textColorLink,
            created: new Date(),
        })
            .then(() => {
                setNameLink("");
                setUrlLink("");
                setBackgroundColorLink("#fff");
                setTextColorLink("#000");
                console.log("Link cadastrado");
            })
            .catch((error) => {
                console.log("Erro de cadastro: " + error);
            });
    }

    return (
        <div className="flex flex-col items-center min-h-screen pb-7 px-2">
            <Header />

            <form
                className="flex flex-col mt-8 mb-3 w-full max-w-xl"
                onSubmit={handleRegister}
            >
                <label className="text-white font-medium mt-2 mb-2">
                    Nome do Link
                </label>
                <Input
                    placeholder="Digite o nome do link"
                    type="text"
                    min="3"
                    value={nameLink}
                    onChange={(e) => setNameLink(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">
                    Url do Link
                </label>
                <Input
                    placeholder="Digite a url do link"
                    type="url"
                    min="3"
                    value={urlLink}
                    onChange={(e) => setUrlLink(e.target.value)}
                />

                <section className="flex my-4 gap-5">
                    <div className="flex gap-2">
                        <label className="text-white font-medium mt-2 mb-2">
                            Fundo do Link
                        </label>
                        <input
                            type="color"
                            value={backgroundColorLink}
                            onChange={(e) =>
                                setBackgroundColorLink(e.target.value)
                            }
                        />
                    </div>

                    <div className="flex gap-2">
                        <label className="text-white font-medium mt-2 mb-2">
                            Cor do Link
                        </label>
                        <input
                            type="color"
                            value={textColorLink}
                            onChange={(e) => setTextColorLink(e.target.value)}
                        />
                    </div>
                </section>

                <div className="flex flex-col items-center justify-start mb-7 p-1 border-gray-100/50 border border-dashed rounded-md">
                    <label className="text-white font-medium mt-2 mb-3">
                        Preview
                    </label>
                    <article className="flex flex-col w-11/12 max-w-lg items-center justify-center">
                        <section
                            className="mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer text-center"
                            style={{ backgroundColor: backgroundColorLink }}
                        >
                            <p
                                className="md:text-lg text-base"
                                style={{ color: textColorLink }}
                            >
                                {nameLink === "" ? "Exemplo" : nameLink}
                            </p>
                        </section>
                    </article>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex items-center justify-center mb-7"
                >
                    Cadastrar
                </button>
            </form>

            <h2 className="font-bold mb-4 text-2xl">Meus Links</h2>

            <article className="flex flex-col w-full max-w-xl items-center select-none">
                <section
                    className="flex flex-row mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer justify-between items-center px-2"
                    style={{ backgroundColor: "#2563eb", color: "#fff" }}
                >
                    <a href="">
                        <p
                            className="md:text-lg text-base"
                            style={{ color: "#fff" }}
                        >
                            Canal no Youtube
                        </p>
                    </a>

                    <div>
                        <button className="border border-dashed py-1 p-1 rounded bg-red-500">
                            <FiTrash size={18} color="#fff" />
                        </button>
                    </div>
                </section>
            </article>
        </div>
    );
}
