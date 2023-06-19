"use client";

import Image from "next/image";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

const getHome = async (homeId) => {
  const result = await fetch(`https://dinmaegler.onrender.com/homes/${homeId}`);

  if (!result.ok) {
    throw new Error("Failed to fetch homes");
  }
  return result.json();
};

const HomeDetail = async ({ params: { homeId } }) => {
  const [toggler, setToggler] = useState(false);
  const home = await getHome(homeId);

  const imageurls = home.images.map((image) => image.url);
  console.log(imageurls);

  //const sources = home.images.map((image) => image.url);
  //console.log(sources);

  const newFormatNum = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: 2,
    roundingIncrement: 5,
  });

  return (
    <article>
      <Image
        src={home.images[0].url}
        alt={home.images[0].name}
        width={1400}
        height={934}
      ></Image>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox toggler={toggler} sources={[imageurls]} />
      <h1>
        {home.adress1}
        {home.postalcode}
        {home.city}
      </h1>
      <h2>{newFormatNum.format(home.price)}</h2>
      <section>
        <h3>
          Boligareal: {home.livingspace} m<sup>2</sup>
          Grundareal: {home.lotsize} m<sup>2</sup>
          Rum/værelser: {home.rooms}
          Kælder: {home.basementsize}
          Byggeår: {home.built}
          Ombygget: {home.remodel}
          Energimærke: {home.energylabel}
          Udbetaling: {newFormatNum.format(home.payment)}
          Brutto ex. ejerudgift: {newFormatNum.format(home.gross)}
          Netto ex. ejerudgift: {newFormatNum.format(home.netto)}
          Ejerudgift: {newFormatNum.format(home.cost)}
        </h3>
      </section>
      <section>
        <h1>Beskrivelse</h1>
        <p>{home.description}</p>
      </section>
    </article>
  );
};

export default HomeDetail;
