import { useState } from "react";
import { Add, Manage, Update } from "../../components";

const Home = () => {
  const [typeContent, setTypeContent] = useState("home");
  const [employeeId, setEmployeeId] = useState("");

  let content;
  switch (typeContent) {
    case "add":
      content = (
        <Add
          setTypeContent={() => {
            setTypeContent("home");
          }}
        />
      );
      break;
    case "update":
      content = (
        <Update
          setTypeContent={() => {
            setTypeContent("home");
          }}
          idUpdate={employeeId}
        />
      );
      break;
    default:
      content = (
        <Manage setTypeContent={setTypeContent} setIdUpdate={setEmployeeId} />
      );
      break;
  }

  return content;
};

export default Home;
