import IColumn from "../interfaces/IColumn";
import IStatus from "../interfaces/IStatus";

const mockColumns: IColumn[] = [
  {
    id: IStatus.BACKLOG,
    title: 'Backlog',
    cardsIds: ['card-2', 'card-3', 'card-4']
  },
  {
    id: IStatus.TO_DO,
    title: 'To Do',
    cardsIds: ['card-6']
  },
  {
    id: IStatus.DOING,
    title: 'Doing',
    cardsIds: ['card-1']
  },
  {
    id: IStatus.IN_REVIEW,
    title: 'In Review',
    cardsIds: ['card-8']
  },
  {
    id: IStatus.DONE,
    title: 'Done',
    cardsIds: ['card-7', 'card-5']
  }
]

export default mockColumns;
