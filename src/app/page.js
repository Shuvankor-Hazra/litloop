import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/home/book-bg-3.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
      className="blur-sm"
      src={backgroundImage}
      alt="Background Image"
      fill
      sizes="100vh"
      style={{objectFit:"cover"}}
      />

      <div className="flex flex-col justify-center items-center bg-purple-300 rounded-md p-2 lg:w-2/5 lg:h-1/4 z-10">
        <div className="flex pb-5 mb-5 text-5xl font-semibold text-purple-900">
          <p>LitLoop</p>
        </div>
        <div>
          <Link
          className="bg-purple-600 text-white rounded p-2"
          href='/store'
          >Take me to the Store</Link>
        </div>
      </div>
    </div>
  );
}
