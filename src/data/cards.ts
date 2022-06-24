import ICard from "../interfaces/ICard";
import ICategory from "../interfaces/ICategory";
import IStatus from "../interfaces/IStatus";

const mockCards: ICard[] = [
  {
    id: 'card-1',
    category: ICategory.BUG,
    title: 'Reset password button not working',
    description: 'The button does not contain any feedback, when you click on it, it does nothing',
    status: IStatus.DOING
  },
  {
    id: 'card-2',
    category: ICategory.FEATURE,
    title: 'Create clear filters button',
    description: 'The user can select the filters but they should also be able to clear them without having to reload the page',
    status: IStatus.BACKLOG
  },
  {
    id: 'card-3',
    category: ICategory.INFRA,
    title: 'Set up the staging environment',
    description: '',
    status: IStatus.BACKLOG
  },
  {
    id: 'card-4',
    category: ICategory.DEPLOY,
    title: 'Send first deploy to prod',
    description: '',
    status: IStatus.BACKLOG
  },
  {
    id: 'card-5',
    category: ICategory.FEATURE,
    title: 'Create landing page',
    description: '',
    status: IStatus.DONE
  },
  {
    id: 'card-6',
    category: ICategory.REFACTOR,
    title: 'Make the onDragEnd function more efficient',
    description: '',
    status: IStatus.TO_DO
  },
  {
    id: 'card-7',
    category: ICategory.DEPLOY,
    title: 'Send first deploy to develop environment',
    description: '',
    status: IStatus.DONE
  },
  {
    id: 'card-8',
    category: ICategory.FEATURE,
    title: 'Create light and dark theme switch',
    description: '',
    status: IStatus.IN_REVIEW
  },
]

export default mockCards;