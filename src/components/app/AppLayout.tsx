import axios, { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Modal } from "semantic-ui-react";
import { Nav } from "src/components/app/Nav";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { Settings } from "../modal/Settings";

export const AppLayout = () => {
  const { errors } = useContext(ApplicationContext);
  return (
    <>
      <div>
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
        {/* Global views */}
        {/* FIXME: Settings modal goes here */}
        <Settings />
      </div>
      {errors && <ErrorModal error={errors} />}
    </>
  );
};

const ErrorModal = (error: any) => {
  const [status, setStatus] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // check if the error was thrown from axios
    if (axios.isAxiosError(error.error)) {
      const err: AxiosError = error.error;
      if (err.response) {
        setStatus(err.response?.status);
        setStatusText(err.response?.statusText);
        setMessage(err.response?.data.message.join(","));
      }
    } else {
      //throw new Error("different error than axios");
      console.log(error);
      // Check if object or what could be ?
      //setMessage();
    }
  }, [error]);

  return (
    <Modal size="mini" open={true}>
      <Modal.Header>
        Error : {statusText} {status}
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description>{message}</Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
