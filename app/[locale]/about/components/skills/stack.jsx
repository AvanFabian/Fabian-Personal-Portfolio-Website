import { motion } from "framer-motion";

export default function Stack() {
	return (
		<motion.div
			className="flex justify-center items-center flex-col mb-5 "
			initial={{
				opacity: 0,
				x: -200,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				delay: 0.5,

				type: "spring",
			}}>
			{/* Main container for the entire section */}
			<div className="w-full max-w-4xl mx-auto px-4">

				{/* Grid container for the list */}
				<div className="mt-8 space-y-6">

					{/* Row 1: Backend */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
						<div className="font-bold text-gray-800 md:text-right">Backend:</div>
						<div className="md:col-span-3 text-gray-600">
							<span className="text-black">AdonisJS (Node.js)</span>, <span className="text-black">Laravel (PHP)</span>, <span className="text-gray-500">Express.js</span>, <span className="text-gray-500">Python</span>
						</div>
					</div>

					{/* Row 2: Frontend & Mobile */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
						<div className="font-bold text-gray-800 md:text-right">Frontend & Mobile:</div>
						<div className="md:col-span-3 text-gray-600">
							<span className="text-black">Next.js</span>, <span className="text-black">React</span>, <span className="text-black">Flutter</span>, <span className="text-gray-500">TypeScript</span>, <span className="text-gray-500">JavaScript</span>, <span className="text-gray-500">Tailwind CSS</span>
						</div>
					</div>

					{/* Row 3: Databases & BaaS */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
						<div className="font-bold text-gray-800 md:text-right">Databases & BaaS:</div>
						<div className="md:col-span-3 text-gray-600">
							<span className="text-black">PostgreSQL</span>, <span className="text-black">MySQL</span>, <span className="text-black">Supabase</span>, <span className="text-gray-500">Firebase</span>, <span className="text-gray-500">MongoDB</span>
						</div>
					</div>

					{/* Row 4: Specialized Fields */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
						<div className="font-bold text-gray-800 md:text-right">Specialized Fields:</div>
						<div className="md:col-span-3 text-gray-600">
							<span className="text-black">Machine Learning</span>, <span className="text-black">Virtual Reality (VR)</span>, <span className="text-black">Internet of Things (IoT)</span>, <span className="text-gray-500">IAM</span>
						</div>
					</div>

					{/* Row 5: Tools & DevOps */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
						<div className="font-bold text-gray-800 md:text-right">Tools & DevOps:</div>
						<div className="md:col-span-3 text-gray-600">
							<span className="text-black">Git</span>, <span className="text-black">GitHub</span>, <span className="text-black">Postman</span>, <span className="text-gray-500">Vercel</span>, <span className="text-gray-500">Docker</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}