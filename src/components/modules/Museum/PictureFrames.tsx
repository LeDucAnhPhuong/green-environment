"use client"
import React, { useEffect, useState } from "react";
import Frame from "./Frame";
import axios from "axios";
import endpoint from "@/app/service/endpoint";
function PictureFrames({ setIsShowDrawer, setContent }: any) {
  const [data, setData] = useState([]);
  const getFrames = async () => {
    try {
      const newData: any = await axios.get(endpoint.GET_FRAME);
      setData(newData.data.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getFrames();
  }, []);
  return (
    <group>
      {data?.map((frame: any) => (
        <Frame
          key={frame._id}
          setIsShowDrawer={setIsShowDrawer}
          setContent={setContent}
          data={frame}
        />
      ))}
    </group>
  );
}

export default PictureFrames;
