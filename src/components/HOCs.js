import { View } from "react-native";
import { branch, lifecycle, renderNothing } from 'recompose';
import R from "ramda";
import React from "react";

import BusyScreen from "./BusyScreen";

export function rootComponentHOC(WrappedComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {

    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <View style={{
        flex: 1
      }}>
        <WrappedComponent {...this.props} />
        </View>;
    }
  }
}

export const hideIfNoData = hasNoData => branch(hasNoData, renderNothing);

export const hideIfNoProps = hideIfNoData(props =>
                                          R.all(R.isNil, R.values(props))
                                         );

export const withBusyScreen = (WrappedComponent, pred) => (
  <View>{pred() ? <WrappedComponent /> : <BusyScreen />}</View>
);

export const deepCompareItem = lifecycle({
  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props.item, nextProps.item);
  }
});
