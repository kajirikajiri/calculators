import React, { useState, useEffect } from "react"
import axios from "axios"
import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import CircularProgress from "@material-ui/core/CircularProgress"

const IpStack: React.FC = () => {
  type DataType = {
    city: string;
    continent_code: string;
    continent_name: string;
    country_code: string;
    country_name: string;
    ip: string;
    latitude: number;
    location: {
      capital: string;
      languages: { code: string; name: string; native: string }[];
      country_flag: string;
      country_flag_emoji: string;
      geoname_id: number;
      is_eu: boolean;
    };
    languages: { code: string; name: string; native: string }[];
    longitude: number;
    region_code: string;
    region_name: string;
    type: string;
    zip: string;
  }
  const [data, setData] = useState<DataType | string>("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    axios
      .get("https://api.ipify.org/?format=json")
      .then(res => {
        axios
          .get(
            `http://api.ipstack.com/${res.data.ip}?access_key=eabb00e22a8f432f63bbd67b11b0fe17&format=1`
          )
          .then((res: { data: DataType }) => {
            setSuccess(true)
            setData(res.data)
          })
      })
      .catch(e => {
        setData("失敗しました。1分ほどお待ちいただきリロードお願いします。")
      })
  }, [])

  return (
    <Layout>
      <SEO title={"ip-address"} />
      {success ? (
        <div>
          {typeof data === "string" ? (
            data
          ) : (
            <>
              <div>大陸: {data.continent_name}</div>
              <div>
                <div style={{ display: "flex" }}>
                  国: {data.country_name}
                  <img
                    style={{
                      margin: "0 0 0 5px",
                      height: 24,
                      border: "1px solid black",
                      display: "block",
                    }}
                    src={data.location.country_flag}
                  />
                </div>
              </div>
              <div>都道府県: {data.city}</div>
              <div>郵便番号: {data.zip}</div>
            </>
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </Layout>
  )
}

export default IpStack
