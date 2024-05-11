import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-4xl py-8">
        hi, there's nothing here.
      </h2>
      <p className="text-xl">
        kindly click <Link href={"/auth/login"}> here </Link> to begin...
      </p>
    </div>
  );
}
