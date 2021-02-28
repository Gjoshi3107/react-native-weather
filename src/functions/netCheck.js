import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export async function checkNetInfo() {
  // try {
  const netinfo = useNetInfo();
  return netinfo.isConnected;
  // }
  // catch (err) {
  //   console.log("checkNetInfo error:-", err);
  //   return false;
  // }

  // return await NetInfo.addEventListener((state) => {
  //   console.log("state.isConnected ", state.isConnected);
  //   return state.isConnected
  // })
  // console.log("net \n", netinfo);
  // return false;
}