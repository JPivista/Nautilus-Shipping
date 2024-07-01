import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-ZMHFBS4ZZE');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};