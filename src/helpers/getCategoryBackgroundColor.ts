import { DefaultTheme } from "styled-components";
import ICategory from "../interfaces/ICategory";

const getCategoryBackgroundColor = (theme: DefaultTheme, value: ICategory) => {
  switch (value) {
    case ICategory.BUG:
      return theme.colors.bug;

    case ICategory.FEATURE:
      return theme.colors.feature;

    case ICategory.INFRA:
      return theme.colors.infra;

    case ICategory.REFACTOR:
      return theme.colors.refactor;

    case ICategory.DEPLOY:
      return theme.colors.deploy;

    default:
      return theme.colors.primary;
  }
}

export default getCategoryBackgroundColor;