import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Footer,
  Intro,
  Achives,
  About,
  Suppo,
  Navbar,
  Layout,

} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen py-5">
      <Layout>
        <Intro />
        <Achives />
        <Suppo />
        
      </Layout>

    </main>
  );
}
