import React, { useState } from "react";
import axios from "axios";
import FoodLayout from "../LayOut/layOut";
import FoodForm from "../component/FoodForm";

export default function CreatePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async ({ name, imageUrl, description, ingredients }) => {
    setLoading(true);
    try {
      if (!name || !imageUrl || !description || !ingredients) {
        throw new Error("Semua kolom harus diisi");
      }

      await axios.post(
        "https://api-bootcamp.do.dibimbing.id/api/v1/create-food",
        {
          name,
          imageUrl,
          description,
          ingredients,
        },
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
          },
        }
      );

      setLoading(false);
      alert("Makanan berhasil dibuat!");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <FoodLayout>
      <div className="container">
        {error && <div className="text-red-500">{error}</div>}
        <FoodForm
          title={"Create Food"}
          onSubmitFood={handleSubmit}
          loading={loading}
        />
      </div>
    </FoodLayout>
  );
}
