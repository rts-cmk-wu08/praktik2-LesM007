import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

const getHome = async () => {
  const result = await fetch("https://dinmaegler.onrender.com/homes");

  if (!result.ok) {
    throw new Error("Failed to fetch homes");
  }
  return result.json();
};

const Home = async () => {
  const homes = await getHome();
  //console.log(homes);

  return (
    <main>
      <ul>
        {homes.map((home) => (
          <li key={home.id}>
            <Link href={`/homes/${home.id}`}>
              <Image
                src={`${home.images[0].url}`}
                alt={`${home.images[0].name}`}
                width={1400}
                height={934}
              />
              <h1>{home.adress1}</h1>
              <h3>{home.city}</h3>
              <h2>
                {home.type}
                <BsDot />
                {home.cost}kr.
              </h2>
              <span>{home.energylabel}</span>
              <h2>{`${home.rooms}`.slice(-3, -2)}</h2>
              <BsDot />
              <h1>{home.price}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
