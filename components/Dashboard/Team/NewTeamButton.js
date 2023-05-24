import React from "react";
import Button from "../../Items/Button";
import Link from "next/link";

const NewTeam = () => {
  return (
    <Link href="/dashboard/team/new" prefetch={false}>
      <Button text="New Team"></Button>
    </Link>
  );
};

export default NewTeam;
