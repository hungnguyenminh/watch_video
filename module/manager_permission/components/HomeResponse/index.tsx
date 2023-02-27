import "./index.scss";
import React, {useState} from "react";
import {useRouter} from "next/router";

export function HomeResponse(): JSX.Element {
  const router = useRouter();
  const [dataFilter, setDataFilter] = useState<object>({});

  const avatar =
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/02/how-to-delete-tiktok-920x515.jpg";

  const goToViewDetail = (value: string): void => {
    console.log("goToViewDetail");
    router.push("/detail_video");
  };
  console.log("dataFilter", dataFilter);

  const listBook = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return <div className="home-container-respon">ss</div>;
}
