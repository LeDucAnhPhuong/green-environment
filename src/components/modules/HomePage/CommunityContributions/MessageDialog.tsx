import useStore from "@/store";
import React from "react";
import Modal from "react-modal";

import { FacebookIcon, FacebookShareButton } from "react-share";

interface IProps {
  htmlMessage: string;
}

function MessageDialog({ htmlMessage }: IProps) {
  const { openMessageDiaolog, setOpenMessageDiaolog } = useStore((state) => ({
    openMessageDiaolog: state.openMessageDiaolog,
    setOpenMessageDiaolog: state.setOpenMessageDiaolog,
  }));
  return (
    <Modal
      isOpen={openMessageDiaolog}
      onRequestClose={() => {
        setOpenMessageDiaolog(false);
      }}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: 16,
          zIndex: 1000,
          maxWidth: "960px",
          maxHeight: "80%",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.13)",
        },
        overlay: {
          backgroundColor: "rgba(37, 36, 36, 0.5)",
          zIndex: 1000,
        },
      }}
      contentLabel="Example Modal"
    >
      <div>
        <div className="scrollbar-hide animate-fade flex w-full flex-col justify-between gap-0">
          <div className="flex w-full flex-row justify-between">
            <h1 className="w-full text-center text-[24px] font-bold text-primary">
              THÔNG ĐIỆP DÀNH CHO BẠN
            </h1>
          </div>
        </div>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: htmlMessage }}
        />
        <div className="mx-auto mt-4 flex items-center justify-center gap-4">
          <p>Chia sẻ về FPT Education: </p>
          <FacebookShareButton
            url={
              "https://fpt.edu.vn/tin-tuc/fpt-edu-tin-tuc-chung/nguoi-fpt-edu-chinh-phuc-25-dinh-nui-ky-niem-25-nam-thanh-lap-to-chuc"
            }
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
      </div>
    </Modal>
  );
}

export default MessageDialog;
