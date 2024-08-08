import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            let {data} = await axios.post('http://localhost:3000/login', {email, password})
            localStorage.setItem('access_token', data.access_token)
            navigate('/')
        } catch (error) {
            // console.log(error.response.data.message);
            Swal.fire({
                title: 'Oh No!',
                text:  error.response.data.message,
                icon: 'error'
              })
        }
    }





    return (        
        <div className="bg-white font-outfit">
            <div className="flex justify-center h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    }}
                >
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-3xl lg:text-5xl drop-shadow-md font-bold text-white">
                                Sky Gate Indonesia
                            </h2>
                            <p className="max-w-xl mt-3 font-bold drop-shadow-md text-gray-300">
                                Navigate Airports with Ease.
                            </p>
                            <p className="max-w-xl text-justify drop-shadow-md text-gray-300">
                                Greetings from Sky Gate Indonesia! Your portal to exploring extensive airport details, reviewing your experiences, and uncovering the best of Indonesia's cities with our interactive chatbot.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <svg className="h-20 bg-blue-500 fill-white rounded-3xl p-3"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 117.84 122.88"
                                    style={{ enableBackground: "new 0 0 117.84 122.88" }}
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <path d="M106.41,76.26c0.16,0,0.31,0.02,0.46,0.04c0.98-1.7,1.87-3.49,2.67-5.36c0.02-0.04,0.03-0.07,0.05-0.11 c1.21-2.85,2.12-5.81,2.73-8.88c0.48-2.38,0.77-4.82,0.88-7.32l-14.39,0c-0.26,7.31-2.44,14.51-6.51,21.62H106.41L106.41,76.26 L106.41,76.26z M11.06,111.51c0.01-2.52,1.44-4.98,3.76-7.73L1.36,95.27c-0.85-0.37-0.83-0.89-0.34-1.5l2.85-2.43 c0.52-0.32,1.07-0.46,1.66-0.29l16.62,2.81l10.81-11.96L0.65,60.02C-0.17,59.54-0.24,59,0.6,58.37l4.66-3.72L47.4,66.49 l12.45-13.31c4.18-3.61,8.23-5.23,11.35-4.46c1.72,0.42,2.32,0.94,2.85,2.55c1.03,3.16-0.57,7.4-4.35,11.77L56.4,75.48l11.84,42.14 l-3.72,4.66c-0.63,0.84-1.17,0.77-1.65-0.04L40.99,89.92l-11.96,10.81l2.81,16.62c0.16,0.59,0.03,1.14-0.29,1.66l-2.43,2.85 c-0.61,0.49-1.13,0.51-1.5-0.34l-8.51-13.46c-2.77,2.33-5.23,3.76-7.75,3.76C11.11,111.81,11.06,111.73,11.06,111.51L11.06,111.51 L11.06,111.51z M103.9,80.85H89.4c-3.97,5.75-9.18,11.44-15.62,17.06l-1.38-4.9c4.46-4.04,8.24-8.09,11.35-12.16H68.98l-0.76-2.7 l2.02-1.89h16.72c4.54-7.15,6.98-14.36,7.27-21.62h-8.77c0.23-1.55,0.26-3.09,0.08-4.59h8.59c-0.6-7.1-3.23-14.3-7.94-21.62H67.78 l0,0v9.06c-1.43,0.24-2.86,0.65-4.3,1.21c-0.1,0.04-0.19,0.08-0.29,0.12V28.44H44.78c-4.71,7.31-7.34,14.52-7.94,21.62h12.2 l-4.29,4.59h-0.06l-16.33-4.59h3.9c0.53-7.16,2.91-14.36,7.16-21.62H24.08c-0.97,1.69-1.85,3.46-2.65,5.31 c-0.02,0.04-0.03,0.07-0.05,0.11c-1.21,2.85-2.12,5.81-2.73,8.88c-0.29,1.45-0.51,2.91-0.67,4.4l-4.48-1.26 c0.16-1.36,0.38-2.71,0.64-4.04c0.67-3.35,1.68-6.61,3.02-9.78c0.02-0.04,0.03-0.08,0.05-0.13c1.36-3.16,2.97-6.13,4.84-8.92 c1.87-2.78,3.99-5.36,6.36-7.72c2.36-2.37,4.94-4.49,7.72-6.36c2.79-1.87,5.77-3.49,8.92-4.84l0,0l0.01,0 c3.2-1.37,6.5-2.39,9.89-3.07l0,0C58.38,0.34,61.88,0,65.49,0c3.6,0,7.11,0.34,10.51,1.02c3.35,0.67,6.61,1.68,9.78,3.02 c0.04,0.02,0.09,0.03,0.13,0.05c3.16,1.36,6.13,2.97,8.92,4.84c2.79,1.87,5.36,3.99,7.72,6.36c2.38,2.36,4.49,4.94,6.36,7.72 c1.87,2.79,3.49,5.77,4.84,8.92l0,0l0,0.01c1.37,3.2,2.39,6.5,3.07,9.89c0.68,3.4,1.02,6.91,1.02,10.51c0,3.6-0.34,7.11-1.02,10.51 c-0.67,3.35-1.68,6.61-3.02,9.77c-0.01,0.04-0.03,0.08-0.05,0.13c-1.36,3.16-2.97,6.13-4.84,8.92c-1.87,2.78-3.98,5.36-6.36,7.72 c-2.37,2.37-4.94,4.49-7.72,6.36c-2.79,1.87-5.77,3.49-8.92,4.84l0,0l-0.01,0c-3.2,1.37-6.5,2.39-9.89,3.07 c-0.19,0.04-0.38,0.07-0.56,0.11l-1.25-4.43c0.3-0.05,0.61-0.11,0.91-0.17c3.11-0.62,6.11-1.55,8.99-2.78l0,0 c2.93-1.26,5.66-2.74,8.19-4.43c2.53-1.7,4.87-3.63,7.03-5.79l0.01-0.01l0,0C100.98,84.51,102.51,82.74,103.9,80.85L103.9,80.85 L103.9,80.85z M27.07,23.85h15.28c4.35-6.27,10.11-12.58,17.29-18.93c-1.27,0.15-2.53,0.35-3.78,0.6c-3.11,0.62-6.1,1.55-8.99,2.78 l0,0c-2.93,1.26-5.66,2.74-8.19,4.43c-2.53,1.7-4.87,3.63-7.03,5.79l-0.01,0.01l0,0C29.99,20.19,28.46,21.97,27.07,23.85 L27.07,23.85L27.07,23.85z M71.32,4.92c7.18,6.35,12.94,12.65,17.29,18.93h15.29c-1.39-1.88-2.92-3.66-4.58-5.32l-0.01-0.01l0,0 c-2.15-2.16-4.5-4.09-7.03-5.79c-2.53-1.69-5.26-3.17-8.19-4.43c-0.04-0.02-0.07-0.03-0.11-0.05c-2.85-1.21-5.81-2.12-8.88-2.73 C73.86,5.27,72.6,5.07,71.32,4.92L71.32,4.92L71.32,4.92z M106.88,28.44H91.55c4.26,7.25,6.63,14.46,7.16,21.62h14.48 c-0.11-2.5-0.41-4.94-0.88-7.32c-0.62-3.11-1.55-6.1-2.78-8.99l0,0C108.73,31.9,107.86,30.13,106.88,28.44L106.88,28.44 L106.88,28.44z M67.78,7.9v15.95h15.19C78.98,18.59,73.92,13.27,67.78,7.9L67.78,7.9L67.78,7.9z M63.19,23.85V7.9 C57.05,13.27,51.99,18.59,48,23.85H63.19L63.19,23.85L63.19,23.85z" />
                                    </g>
                                </svg>
                            </div>
                            <p className="mt-3 text-gray-500 font-semibold">
                                Discover more with a quick sign-in
                            </p>
                        </div>
                        <div className="mt-8">
                            <form onSubmit={handleLogin}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm text-gray-600">
                                        Email Address
                                    </label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example@example.com"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label
                                            htmlFor="password"
                                            className="text-sm text-gray-600"
                                        >
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Your Password"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            <p className="mt-6 text-sm text-center text-gray-400">
                                Don't have an account yet?{" "}
                                <Link to={'/register'}
                                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                                >
                                    Sign up
                                </Link>
                                .
                            </p>
                            <div className="flex items-center justify-between mt-7">
                                <span className="w-1/5 border-b border-gray-400 lg:w-1/4" />
                                <div
                                    className="text-xs text-center text-gray-500 uppercase dark:text-gray-400"
                                >
                                    or sign in with Google
                                </div>
                                <span className="w-1/5 border-b border-gray-400 lg:w-1/4" />
                            </div>
                            <a
                                href="#"
                                className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-blue-400  "
                            >
                                <div className="px-4 py-2 ">
                                    <svg className="w-6 h-6 bg-white rounded-3xl" viewBox="0 0 40 40">
                                        <path
                                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                            fill="#FFC107"
                                        />
                                        <path
                                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                            fill="#FF3D00"
                                        />
                                        <path
                                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                            fill="#4CAF50"
                                        />
                                        <path
                                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                            fill="#1976D2"
                                        />
                                    </svg>
                                </div>
                                <span className=" w-5/6 px-4 py-3 font-bold text-black hover:text-white text-center">
                                    Sign in with Google
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage