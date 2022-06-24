import IColumn from "../interfaces/IColumn";
import IStatus from "../interfaces/IStatus";

const mockColumns: IColumn[] = [
  {
    id: IStatus.BACKLOG,
    title: 'Backlog',
    cardsIds: ['card-2', 'card-3']
  },
  {
    id: IStatus.TO_DO,
    title: 'To Do',
    cardsIds: []
  },
  {
    id: IStatus.DOING,
    title: 'Doing',
    cardsIds: ['card-1']
  },
  {
    id: IStatus.IN_REVIEW,
    title: 'In Review',
    cardsIds: []
  },
  {
    id: IStatus.DONE,
    title: 'Done',
    cardsIds: []
  }
]

export default mockColumns;
