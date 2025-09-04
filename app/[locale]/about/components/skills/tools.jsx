import { motion } from "framer-motion";

export default function Tools() {
	return (
		<motion.div
			className="flex justify-start items-center flex-col mb-5 "
			initial={{
				opacity: 0,
				x: 200,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				delay: 0.6,

				type: "spring",
			}}>

			{/* Section container */}
			<div className="w-full max-w-4xl mx-auto px-4 py-16">

				{/* Grid container for the list */}
				<div className="space-y-4">

					{/* Row 1: Development & IDEs */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 items-center">
						<div className="font-bold text-gray-800 md:text-right">
							Development & IDEs:
						</div>
						<div className="md:col-span-2 text-gray-600">
							Visual Studio Code, JetBrains IDEs, Jupyter Notebook, Unity 3D
						</div>
					</div>

					{/* Row 2: Version Control & API Tools */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 items-center">
						<div className="font-bold text-gray-800 md:text-right">
							Version Control & API Tools:
						</div>
						<div className="md:col-span-2 text-gray-600">
							Git, GitHub, Postman
						</div>
					</div>

					{/* Row 3: Design & Prototyping */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 items-center">
						<div className="font-bold text-gray-800 md:text-right">
							Design & Prototyping:
						</div>
						<div className="md:col-span-2 text-gray-600">
							Figma, Blender, Arduino IDE
						</div>
					</div>

				</div>
			</div>
		</motion.div>
	);
}
