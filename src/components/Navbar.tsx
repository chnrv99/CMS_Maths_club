"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import club_logo from '../../public/Club Logo.svg';
import Image from "next/image";



export default function Navbar() {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);


		return (
			<header ref={ref}>
				<div
					className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800"
						}`}
				>
					<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
						<div className="flex justify-between gap-8">
							<Link
								href="#"
								className="duration-200 text-yellow-100 hover:text-zinc-400 p-2 text-lg font-semibold"
							>
								Home
							</Link>
						</div>

						<Link
							href="#"
							className="duration-200"
						>
							<Image src={club_logo} alt="club logo" width={40} height={40} />
						</Link>
					</div>
				</div>
			</header>
		);
	
	
};