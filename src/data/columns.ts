import IColumn from "../interfaces/IColumn";
import IStatus from "../interfaces/IStatus";

const mockColumns: IColumn[] = [
  {
    id: IStatus.BACKLOG,
    title: 'Backlog',
    cardsIds: ['card-2', 'card-3', 'card-4']
    //cardsIds: [ { id: 'card-2', visible: true }, { id: 'card-3', visible: true }, { id: 'card-4', visible: true }]
  },
  {
    id: IStatus.TO_DO,
    title: 'To Do',
    cardsIds: ['card-6']
    //cardsIds: [ { id: 'card-6', visible: true }]
  },
  {
    id: IStatus.DOING,
    title: 'Doing',
    cardsIds: ['card-1']
    //cardsIds: [ { id: 'card-1', visible: true }]
  },
  {
    id: IStatus.IN_REVIEW,
    title: 'In Review',
    cardsIds: ['card-8']
    //cardsIds: [ { id: 'card-8', visible: true }]
  },
  {
    id: IStatus.DONE,
    title: 'Done',
    cardsIds: ['card-7', 'card-5']
    //cardsIds: [ { id: 'card-7', visible: true }, { id: 'card-5', visible: true }]
  }
]

export default mockColumns;
