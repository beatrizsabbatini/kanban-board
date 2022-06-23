import ICategory from "./ICategory";
import IStatus from "./IStatus";

interface ICard {
  category: ICategory,
  title: string,
  description: string,
  status: IStatus
}

export default ICard;