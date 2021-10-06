import { createSelector } from "reselect";
import {IRootState} from "../../types";

const selectorHomePage = (state: IRootState) => state.homePage;

export const makeSelecAnimePage = createSelector(
  selectorHomePage,
  (homePage) => homePage.animePage
);
