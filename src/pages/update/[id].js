import axios from "axios";
import FoodForm from "../component/FoodForm";
import usePost from "../hooks/usePost";
import FoodLayout from "@/pages/LayOut/layOut";
import { useState } from "react";

export async function getServerSideProps(context) {
  try {
    const resp = await axios.get(
      `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          kataKunci: "Kopi enak bikin kembung",
        },
      }
    );

    return { props: { food: resp.data.data } };
  } catch (error) {
    return { props: { error: error.message } };
  }
}

export default function FoodDetailPage({ food, error }) {
  const { loading, error: postError, post } = usePost();
  const [success, setSuccess] = useState(false);

  const handleUpdateFood = async ({
    name,
    imageUrl,
    description,
    ingredients,
  }) => {
    try {
      await post(`/update-food/${food.id}`, {
        name,
        imageUrl,
        description,
        ingredients,
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error updating food:", error);
    }
  };

  return (
    <FoodLayout>
      <div className="container">
        {error && <div className="text-red-500">{error}</div>}{" "}
        {success && (
          <div className="text-green-500">Food updated successfully!</div>
        )}{" "}
        {postError && (
          <div className="text-red-500">Error updating food: {postError}</div>
        )}{" "}
        <img src={food?.imageUrl} className="w-80 aspect-video" />
        <FoodForm
          title={`Update ${food.name}`}
          defaultNama={food.name}
          defaultUrlGambar={food.imageUrl}
          defaultDescription={food.description}
          defaultIngredoients={food.ingredients}
          loading={loading}
          onSubmitFood={handleUpdateFood}
        />
      </div>
    </FoodLayout>
  );
}
