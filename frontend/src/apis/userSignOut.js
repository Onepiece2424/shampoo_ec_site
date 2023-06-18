import axios from 'axios';
import { logoutIndex } from '../urls/index'

// ログアウト
export const userSignOut = async(userHeader) => {
  await axios.post(logoutIndex, userHeader)
  .then(data => {
    console.log(data)

    localStorage.removeItem("access-token");
    localStorage.removeItem("client");
    localStorage.removeItem("uid");

    // ログアウト時にページを強制更新
    window.location.reload()
  }).catch(error => {
    console.log(error);
  });
};
