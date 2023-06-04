import axios from "axios";

// 郵便番号から住所情報の検索
export async function fetchAddressByZipcode(zipcode) {
  try {
    const res = await axios.get("https://zipcloud.ibsnet.co.jp/api/search", {
      params: {
        zipcode: zipcode
      }
    });

    if (res.data.results) {
      const result = res.data.results[0];
      return {
        address1: result["address1"],
        address2: result["address2"],
        address3: result["address3"]
      };
    }
  } catch {
    throw new Error("住所の取得に失敗しました。");
  }
}
