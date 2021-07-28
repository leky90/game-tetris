import { FC, memo } from "react";

type GridItemProps = {
  value: boolean;
};

const GridItem: FC<GridItemProps> = ({ value }) => {
  return <div className={`grid-item grid-${value}`}></div>;
};

function areSameProps(prevProps: GridItemProps, nextPropx: GridItemProps) {
  return prevProps.value === nextPropx.value;
}

export default memo(GridItem, areSameProps);
