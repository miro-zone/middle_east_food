import Link from "next/link";
import Image from "next/image";
import CheckIcon from "@/icons/Check";
import AddToCart from "../buttons/AddToCart";

export default function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className={`card w-100 mx-auto`} style={{ maxWidth: "18rem" }}>
      <Image
        src={meal.image}
        width="0"
        height="0"
        sizes="200px"
        style={{ width: "100%", height: "250px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{meal.name}</h5>
        <div className="d-flex mb-4 justify-content-between align-items-center">
          <div className="hstack gap-2">
            <span className="fw-bold">Price</span>
            <span>£{meal.price}</span>
          </div>
          <div className="hstack">
            <span>
              <CheckIcon className="text-success" />
            </span>
            <span className="fw-semibold">{meal.category}</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Link href={`/meals/${meal.id}`} className="btn btn-primary">
            View
          </Link>
          <AddToCart meal={meal} />
        </div>
      </div>
    </div>
  );
}
