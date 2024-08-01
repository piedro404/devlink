import { Link } from "react-router-dom";

export function ErrorPage() {
    return(
        <div className="flex flex-col w-full min-h-screen justify-center items-center text-white">
            <h1 className="font-bold text-6xl mb-6">404 - Not Found</h1>
            <p className="italic text-1xl mb-4">Você ta muito longe de casa AMIGO!</p>

            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
                Voltar para Home
            </Link>
        </div>
    )
}