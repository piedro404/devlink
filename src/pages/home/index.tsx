import { Social } from "../../components/Social";
import { FaYoutube, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export function Home() {
    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Piedro 404</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
                    <a href="">
                        <p className="md:text-lg text-base">Canal no Youtube</p>
                    </a>
                </section>
            
                <footer className="flex flex-row justify-center gap-3 my-4">
                    <Social url="https://github.com/piedro404">
                        <FaGithub size={35} color="#fff"></FaGithub>
                    </Social>  

                    <Social url="https://www.linkedin.com/in/pedrohenrique404/">
                        <FaLinkedin size={35} color="#fff"></FaLinkedin>
                    </Social>  

                    <Social url="https://www.youtube.com/@Piedro404">
                        <FaYoutube size={35} color="#fff"></FaYoutube>
                    </Social> 

                    <Social url="https://www.instagram.com/piedro_404/">
                        <FaInstagram size={35} color="#fff"></FaInstagram>
                    </Social>             
                </footer>
            </main>

        </div>
    )
}