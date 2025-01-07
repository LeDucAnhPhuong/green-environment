import { contants } from "@/setting/index";

const prefix = "api/v1";
const endpoint = {
  GET_FRAME: `${contants.API_SERVER}/${prefix}/frame`,
  GET_PROJECT: `${contants.API_SERVER}/${prefix}/project`,
  GET_PROJECT_BY_ID: `${contants.API_SERVER}/${prefix}/project/{slug}`,
};
export default endpoint;
