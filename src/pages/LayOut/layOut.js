import Navbars from "../component/navbar";

export default function FoodLayout({ children }) {
    return (
      <div>
        <Navbars/>
        {children}
      </div>
    );
  }
  