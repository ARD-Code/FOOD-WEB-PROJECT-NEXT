import { useState } from "react";

export default function FoodForm({
  title,
  defaultNama,
  defaultUrlGambar,
  defaultDescription,
  defaultIngredients,
  onSubmitFood,
  loading,
}) {
  const [name, setName] = useState(defaultNama || "");
  const [imageUrl, setImageUrl] = useState(defaultUrlGambar || "");
  const [description, setDescription] = useState(defaultDescription || "");
  const [ingredients, setIngredients] = useState(defaultIngredients || "");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !name.trim() ||
      !imageUrl.trim() ||
      !description.trim() ||
      !ingredients.trim()
    ) {
      alert("Semua kolom harus diisi");
      return;
    }

    onSubmitFood({
      name,
      imageUrl,
      description,
      ingredients: ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid w-1/2 justify-center gap-2">
      <h5 className="text-xl text-center font-bold">{title}</h5>

      <label>Nama:</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="nameFood"
        className="text-black"
        placeholder="nama makanan"
      />

      <label>URL Gambar:</label>
      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        name="imageFood"
        className="text-black"
        placeholder="url gambar"
      />

      <label>Description: </label>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="descriptionFood"
        className="text-black"
        placeholder="description food"
      />

      <label>Ingredients: </label>
      <input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        name="ingredientsFood"
        className="text-black"
        placeholder="ingredients food"
      />

      <button
        type="submit"
        disabled={loading}
        className={`${
          loading ? "bg-gray-500" : "bg-blue-500"
        } p-1 rounded-full`}
      >
        {loading ? "Loading..." : title}
      </button>
    </form>
  );
}
