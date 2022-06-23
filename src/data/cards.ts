import ICard from "../interfaces/ICard";
import ICategory from "../interfaces/ICategory";
import IStatus from "../interfaces/IStatus";

const mockCards: ICard[] = [
  {
    category: ICategory.BUG,
    title: 'Reset password button not working',
    description: 'The button does not contain any feedback, when you click on it, it does nothing',
    status: IStatus.DOING
  },
  {
    category: ICategory.FEATURE,
    title: 'Create clear filters button',
    description: 'The user can select the filters but they should also be able to clear them without having to reload the page',
    status: IStatus.BACKLOG
  },
  {
    category: ICategory.INFRA,
    title: 'Set up the staging environment',
    description: '',
    status: IStatus.BACKLOG
  },
]

export default mockCards;