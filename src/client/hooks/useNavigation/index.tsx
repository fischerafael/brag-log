import Router from "next/router";

export const useNavigation = () => {
  const navigateTo = (url: string) => {
    Router.push(url);
  };

  return {
    navigateTo,
  };
};
