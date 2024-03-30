import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FoodLayout from "../LayOut/layOut";
import axios from "axios";

export default function FoodDetailPage() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await axios.get(
          `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${router.query.id}`,
          {
            headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
          }
        );
        setData(resp.data.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <FoodLayout>
      <div className="container">
        <img
          src={data?.imageUrl || ""}
          alt={data?.name || ""}
          className="imgDetail"
        />
        <div>
          <p>{data?.name || "Nama Makanan"}</p>
          <p>{data?.description || "Deskripsi Makanan"}</p>
          <p>{data?.ingredients || "Bahan Makanan"}</p>
        </div>
      </div>
    </FoodLayout>
  );
}
