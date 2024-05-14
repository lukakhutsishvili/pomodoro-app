export interface AllInfoType {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  font: string;
  color: string;
}
export interface contextType {
  font: string;
  setFont: React.Dispatch<string>;
  color: string;
  setColor: React.Dispatch<string>;
  name: string;
  setName: React.Dispatch<string>;
  allInfo: AllInfoType;
  setAllInfo: React.Dispatch<AllInfoType>;

}
