import ButtonCategories from "./ButtonCategories";
import TitleSection from "./TitleSection";
import { CATEGORIES } from "../data/categories";

function Categories() {
  return (
    <div className="flex-1">
      <TitleSection>Categorias</TitleSection>
      <div className="bg-linear-65 from-blue-100 to-fuchsia-100 rounded-t-3xl flex-wrap flex flex-row px-3 py-3 gap-3">
        {CATEGORIES.map((cat) => (
          <ButtonCategories
            key={cat.id}
            label={cat.label}
            colorClass={cat.color}
            icon={cat.icon}
            onClick={() => console.log(`Clicou em ${cat.label}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
