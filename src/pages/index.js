import axios from "axios";
import { useRouter } from "next/router";
import FoodLayout from "./LayOut/layOut";

export async function getServerSideProps() {
  try {
    const resp = await axios.get(
      "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
      {
        headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
      }
    );
    return { props: { data: resp.data.data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: [] } };
  }
}

export default function HomePage({ data }) {
  const router = useRouter();

  return (
    <FoodLayout>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <p className="text-center text-lg font-semibold mt-2">
              {item.name}
            </p>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => router.push(`/detail/${item.id}`)}
                className="btn-primary"
              >
                View Details
              </button>
              <button
                onClick={() => router.push(`/update/${item.id}`)}
                className="btn-secondary"
              >
                Update Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </FoodLayout>
  );
}
