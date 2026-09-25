/** Shapes shared by every locale's content bundle. */

export type Service = {
  no: string;
  title: string;
  summary: string;
  points: string[];
  icon: string;
};
export type Expert = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};
export type Career = {
  title: string;
  location: string;
  salary: string;
  language: string;
  duties: string[];
  requirements?: string[];
  note?: string;
};
