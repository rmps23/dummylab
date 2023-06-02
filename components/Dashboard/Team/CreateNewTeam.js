import React from "react";

import ModalUI from "components/UI/ModalUI";
// import NewTeam from "components/Dashboard/Forms/Team/NewTeam";

const style = "bg-teal-500";

const CreateNewTeam = () => {
  return (
    <div>
      <ModalUI btn={"Create Team"} classes={style} form={""} />
    </div>
  );
};

export default CreateNewTeam;
