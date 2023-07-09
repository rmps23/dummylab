"use client";

import { supabase } from "@supabase";
import { useState } from "react";
import { useRef } from "react";
import { FaUpload } from "react-icons/fa";
import { useMutation } from "react-query";

import Image from "next/image";
import Button from "@components/UI/Button";
import CircularLoading from "@components/UI/CircularLoading";
import useTeamStore from "@components/Store/teamStore";

const NewTeamForm = ({ setCloseModal }) => {
  const addTeam = useTeamStore((state) => state.addTeam);

  const teamName = useRef(null);
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [showIMG, setShowIMG] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [imgLoading, setImgLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleUpload = (e) => {
    setImgLoading(true);
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setSelectedFile(e.target.files[0]);
      const reader = new FileReader();
      setFileName(selectedFile.name);

      reader.onload = (event) => {
        setShowIMG(event.target.result);
        setImgLoading(false);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    setShowIMG(null);
    setSelectedFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: team } = await mutationTeam.mutateAsync({
      name: teamName.current.value,
    });

    addTeam(team[0]);

    const team_id = team[0].id;
    const filePath = `${team_id}`;

    if (!selectedFile) {
      setComplete(true);
      setCloseModal(true);
      return;
    }

    const { data: teamIMG } = await mutationIMG.mutateAsync(filePath);

    setComplete(true);
    setCloseModal(true);
  };

  const mutationTeam = useMutation((values) => {
    return supabase.from("team").insert(values).select();
  });

  const mutationIMG = useMutation((filePath) => {
    return supabase.storage.from("team_logos").upload(filePath, selectedFile);
  });

  return (
    <>
      {isLoading ? (
        <div className="w-full items-center text-center">
          <CircularLoading />
        </div>
      ) : complete ? (
        <div className="text-center">
          <p className="text-teal-500">Team created with success!</p>
          <p className="my-4 text-zinc-200">Redirecting...</p>
          <div className="bg-teal-500 text-zinc-200 rounded-full h-14 w-14 items-center flex shadow-lg shadow-teal-600/20 mx-auto">
            <p className="mx-auto text-3xl">&#10004;</p>
          </div>
        </div>
      ) : (
        <form className="text-lg" onSubmit={handleSubmit}>
          <div className="flex-col flex">
            <input
              type="text"
              ref={teamName}
              className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md"
              placeholder="Insert team name..."
              required
            />
          </div>
          <div className="flex-1 w-full flex items-center rounded-md mt-10">
            {showIMG ? (
              <>
                <div className="bg-zinc-900 rounded-md relative items-center">
                  <div className="p-4 relative">
                    <Image src={showIMG} alt="" height={150} width={150} />
                    <span
                      className="cursor-pointer absolute text-zinc-200 bg-teal-600 z-50 h-10 w-10 -right-5 -top-5 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                      onClick={handleRemoveFile}
                    >
                      &#10006;
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <label
                  htmlFor="img"
                  className="w-full py-[10px] rounded-md text-center text-md text-zinc-300 bg-teal-700 hover:bg-teal-600 transition ease-in-out duration-300 cursor-pointer flex items-center justify-center gap-4"
                >
                  {imgLoading ? (
                    <>
                      <CircularLoading white={true} />
                    </>
                  ) : (
                    <>
                      Upload team logo... <FaUpload />
                    </>
                  )}
                </label>
                <input
                  id="img"
                  type="file"
                  onChange={(e) => handleUpload(e)}
                  accept="image/png, image/gif, image/jpeg"
                  ref={fileInputRef}
                  hidden
                />
              </>
            )}
          </div>

          <div className="w-full text-right mt-8">
            <Button text="Confirm"></Button>
          </div>
        </form>
      )}
    </>
  );
};

export default NewTeamForm;
