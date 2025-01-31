import Footer from "@/components/Footer";

export const metadata = {
	title: "Fabian | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
