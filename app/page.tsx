"use client";

import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Modal from "./components/Modal"

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(true)

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className="flex flex-col min-h-screen">
			<header className="w-full p-8">
				<h1 className="text-3xl font-bold text-center">
					Midhun&apos;s Projects
				</h1>
			</header>
			<main className="flex flex-col items-center justify-center flex-grow p-8">
				<Modal isOpen={isModalOpen} onClose={closeModal}>
					<h1
						className="text-2xl font-bold mb-4"
						style={{ fontFamily: "var(--font-geist-mono)" }}
					>
						Page Under Development
					</h1>
					<p
						className="text-lg mb-4"
						style={{ fontFamily: "var(--font-geist-mono)" }}
					>
						This page is currently under development. Please check back later.
					</p>
				</Modal>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 hidden">
					<a
						href="https://github.com/midhunmonachan/project1"
						target="_blank"
						rel="noopener noreferrer"
						className="p-4 bg-gray-200 bg-opacity-50 rounded-lg hover:bg-gray-300 hover:text-black transition-colors duration-200 aspect-square"
					>
						<h2
							className="text-xl font-bold"
							style={{ fontFamily: "var(--font-geist-mono)" }}
						>
							Project 1
						</h2>
						<p
							className="text-base"
							style={{ fontFamily: "var(--font-geist-mono)" }}
						>
							Description of Project 1
						</p>
					</a>
					<a
						href="https://github.com/midhunmonachan/project2"
						target="_blank"
						rel="noopener noreferrer"
						className="p-4 bg-gray-200 bg-opacity-50 rounded-lg hover:bg-gray-300 hover:text-black transition-colors duration-200 aspect-square"
					>
						<h2
							className="text-xl font-bold"
							style={{ fontFamily: "var(--font-geist-mono)" }}
						>
							Project 2
						</h2>
						<p
							className="text-base"
							style={{ fontFamily: "var(--font-geist-mono)" }}
						>
							Description of Project 2
						</p>
					</a>
					{/* Add more project links as needed */}
				</div>
			</main>
			<footer className="w-full p-8">
				<div className="flex justify-center space-x-4 pt-8">
					<a
						href="https://github.com/midhunmonachan"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub className="w-6 h-6 text-white opacity-50 hover:opacity-100 transition-opacity duration-200" />
					</a>
					<a
						href="https://www.linkedin.com/in/midhunmonachan/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin className="w-6 h-6 text-white opacity-50 hover:opacity-100 transition-opacity duration-200" />
					</a>
				</div>
			</footer>
		</div>
	)
}
