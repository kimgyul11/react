import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 받아왔습니다!");
        setProducts(data);
      })
      .catch((e) => setError("에러 발생"))
      .finally(() => setLoading(false));
    return () => {
      console.log("닫혔습니다.");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
