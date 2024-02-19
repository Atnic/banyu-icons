import Icon from "@components/@core/icon";
import loadable from "@loadable/component";
import React from "react";
import { getIcons } from "@utils/getIcons";

import SearchPageIconLoading from "./loading";

export default function SearchIconSet({ query, highlightPattern }) {
  const IconSet = loadable.lib(() => getIcons());

  return (
    <IconSet fallback={<SearchPageIconLoading />}>
      {({ default: icons }) => {
        const found = Object.keys(icons).filter((name) =>
          name.toLowerCase().includes(query)
        );
        return (
          <>
            {found.map((name) => (
              <Icon
                key={name}
                icon={icons[name]}
                name={name}
                highlightPattern={highlightPattern}
              />
            ))}
          </>
        );
      }}
    </IconSet>
  );
}
