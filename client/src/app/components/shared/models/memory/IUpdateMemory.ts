import IMemory from './IMemory';

export default interface IUpdateMemory extends IMemory {
  id: string;
  formattedDate: string;
}
