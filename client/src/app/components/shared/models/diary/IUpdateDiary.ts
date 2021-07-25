import IDiary from './IDiary';

export default interface IUpdateDiary extends IDiary {
  id: string;
  formattedPositiveTest: string;
  formattedDueDate: string;
  genderAsString: string;
}
