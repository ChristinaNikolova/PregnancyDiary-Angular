import IBaby from './IBaby';

export default interface IBabyDetails extends IBaby {
  id: string;
  genderAsString: string;
  formattedBirthDate: string;
}
