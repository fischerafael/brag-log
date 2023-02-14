import React from "react";

export const useFormatTask = () => {
  const getCategory = (category: string): string => `#${category}`;
  const getDuration = (duration: number): string => `${duration} h`;
  const getID = (id: string): string => `#${id.slice(0, 4)}`;

  return {
    getCategory,
    getDuration,
    getID,
  };
};
