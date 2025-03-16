import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";
import Footer from "./_components/Footer";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  //title: "The Wild Oasis", V1
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by the most beautiful mountains and the darkest forests in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative scroll-smooth`}
      >
        <Header />
        <div className="flex-1 px-4 sm:px-8 sm:py-12 py-0 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
