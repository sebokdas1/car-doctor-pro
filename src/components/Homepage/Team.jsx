"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, React, useEffect } from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("/teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, [teams]);
  console.log(teams);
  return (
    <div className="container mx-auto mt-14">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#FF3811]">Team</h3>
        <h2 className="text-5xl">Meet Our Team</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don`t look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-1 px-7">
        {teams.map((team) => (
          <div className="card bg-base-100 w-96 shadow-xl" key={team?.id}>
            <figure>
              <Image src={team?.img} alt="img" height={294} width={314} />
            </figure>
            <div className="card-body text-center">
              <h2 className="font-bold text-2xl text-center">{team?.title}</h2>
              <p>{team?.designation}</p>
              <div className="card-actions justify-center text-blue-700 text-2xl">
                {team?.links?.facebook && (
                  <Link href={team.links.facebook} target="_blank">
                    <FaFacebookSquare />
                  </Link>
                )}
                {team?.links?.linkedin && (
                  <Link href={team.links.linkedin} target="_blank">
                    <FaLinkedin />
                  </Link>
                )}
                {team?.links?.twitter && (
                  <Link href={team.links.twitter} target="_blank">
                    <FaTwitterSquare />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="carousel w-full">
        {bannerss.map((banner, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            id={`slide${banner.id}`}
            className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat bg-cover"
          >
            <div className="h-full w-full lg:w-[50%] flex items-center pl-8 lg:pl-36">
              <div className="lg:space-y-6">
                <h1 className="text-2xl lg:text-5xl font-bold text-white">
                  {banner?.text}
                </h1>
                <p className="text-white">{banner?.description}</p>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-primary btn-outline">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute  left-5 right-5 top-1/2  flex -translate-y-1/2  transform justify-between">
              <a
                href={banner.prev}
                className="btn btn-circle hover:bg-[#FF3811] hover:text-white mr-3 lg:mr-6"
              >
                ❮
             </Link>
              <a
                href={banner.next}
                className="btn hover:bg-[#FF3811] hover:text-white btn-circle"
              >
                ❯
             </Link>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

const bannerss = [
  {
    id: 5,
    text: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide6",
    prev: "#slide8",
  },
  {
    id: 6,
    text: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide7",
    prev: "#slide5",
  },
  {
    id: 7,
    text: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide8",
    prev: "#slide6",
  },
  {
    id: 8,
    text: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide5",
    prev: "#slide7",
  },
];

export default Team;
