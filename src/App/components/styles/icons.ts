export type OutlineFillIcon = {
  outline: number;
  fill: number;
};

export const bottomTabIcons: Record<string, OutlineFillIcon> = {
  HomeStack: {
    outline: require("../../../../res/icons/home-variant-outline.png"),
    fill: require("../../../../res/icons/home-variant.png"),
  },
  LibraryStack: {
    outline: require("../../../../res/icons/library.png"),
    fill: require("../../../../res/icons/library-fill.png"),
  },
  SearchStack: {
    outline: require("../../../../res/icons/search.png"),
    fill: require("../../../../res/icons/search-fill.png"),
  },
  SettingsStack: {
    outline: require("../../../../res/icons/settings.png"),
    fill: require("../../../../res/icons/settings-fill.png"),
  },
};
