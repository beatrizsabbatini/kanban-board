import IStatus from "./IStatus";

// interface ICardData {
//   id: string,
//   visible: boolean
// }

interface IColumn {
  id: IStatus,
  title: string,
  cardsIds: string[]
}

export default IColumn;