import { IOption } from "../../components/Select";

export const useCategories = () => {
  const categories: IOption[] = [
    {
      label: "Development",
      value: "development",
    },
    {
      label: "Design",
      value: "design",
    },
    {
      label: "Meeting",
      value: "meeting",
    },
    {
      label: "Bureaucratic",
      value: "bureaucratic",
    },
  ];

  return categories;
};
