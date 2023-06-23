"use client";

import { supabase } from "@supabase";
import { useState, useEffect } from "react";
import { FetchSession } from "components/Functions/FetchSession";
import { useRef } from "react";
import Image from "next/image";

import Button from "@components/UI/Button";
import CircularProgress from "@mui/material/CircularProgress";

const NewTeamForm = () => {
  const [teamName, setTeamName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [session, setSession] = useState(null);
  const [showIMG, setShowIMG] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    FetchSession()
      .then((value) => {
        setSession(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUpload = (e) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setSelectedFile(e.target.files[0]);
      const reader = new FileReader();
      setFileName(selectedFile.name);

      reader.onload = (event) => {
        setShowIMG(event.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data: teamData, error: teamError } = await supabase
        .from("team")
        .insert({
          name: teamName,
        })
        .select();

      if (teamError) {
        throw teamError;
      }

      const team_id = teamData[0].id;

      const filePath = `${team_id}`;

      const { data, error } = await supabase.storage
        .from("team_logos")
        .upload(filePath, selectedFile);

      if (error) {
        console.log("Error uploading image:", error.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setComplete(true);
      setIsLoading(false);
      setTimeout(() => {
        window.location.href = "/dashboard/team";
      }, 1000);
    }
  };

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    setShowIMG(null);
    setSelectedFile(null);
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full items-center text-center">
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
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
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="bg-zinc-950 border-b-2 mb-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200 rounded-md"
              placeholder="Insert team name..."
              required
            />
          </div>
          <div className="flex-1 w-full flex items-center overflow-hidden rounded-md mt-2">
            {showIMG ? (
              <div className="bg-zinc-950 rounded-md w-full relative flex items-center">
                <div className="px-2">
                  <Image src={showIMG} alt="" height={20} width={20} />
                </div>
                <span className="text-xs truncate py-3 pr-10">{fileName}</span>
                <span className="text-red-600 right-3 text-md font-bold absolute bg-gradient-to-r from-transparent to-zinc-950 to-50% w-14 text-right">
                  <span className="cursor-pointer" onClick={handleRemoveFile}>
                    &#10006;
                  </span>
                </span>
              </div>
            ) : (
              <>
                <label
                  htmlFor="img"
                  className="w-full py-[10px] rounded-sm text-center text-sm text-zinc-300 bg-teal-700 hover:bg-teal-600 transition ease-in-out duration-300 cursor-pointer"
                >
                  Upload team logo...
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
