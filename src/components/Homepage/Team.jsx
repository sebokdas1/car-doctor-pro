"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, React, useEffect } from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [current, setCurrent] = useState(3);
  useEffect(() => {
    fetch("/teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  const handlePrevSlide = async () => {
    // console.log(current);
    await setPrevious(previous - 3);
    await setCurrent(current - 3);
  };
  const handleNextSlide = async () => {
    // console.log(current);
    await setPrevious(previous + 3);
    await setCurrent(current + 3);
  };
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

      {/* carousel part */}

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-1 mt-6">
          {teams?.slice(previous, current)?.map((team) => (
            <div className="card bg-base-100 w-96 shadow" key={team?.id}>
              <figure>
                <Image src={team?.img} alt="img" height={294} width={314} />
              </figure>
              <div className="card-body text-center">
                <h2 className="font-bold text-2xl text-center">
                  {team?.title}
                </h2>
                <p>{team?.designation}</p>
                <div className="card-actions justify-center text-blue-700 text-2xl">
                  {team?.links?.facebook && (
                    <Link href={team?.links?.facebook} target="_blank">
                      <FaFacebookSquare />
                    </Link>
                  )}
                  {team?.links?.linkedin && (
                    <Link href={team?.links?.linkedin} target="_blank">
                      <FaLinkedin />
                    </Link>
                  )}
                  {team?.links?.twitter && (
                    <Link href={team?.links?.twitter} target="_blank">
                      <FaTwitterSquare />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-1">
          {current > 3 && (
            <button
              onClick={handlePrevSlide}
              className="btn bg-[#ff3911c5] text-gray-300 hover:bg-[#FF3811] hover:text-white btn-circle "
            >
              ❮
            </button>
          )}
          {teams?.length === current ||
            (teams?.length > current && (
              <button
                onClick={handleNextSlide}
                className="btn bg-[#ff3911c5] text-gray-300 hover:bg-[#FF3811] hover:text-white btn-circle "
              >
                ❯
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
