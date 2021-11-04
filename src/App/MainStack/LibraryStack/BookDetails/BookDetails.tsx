// external dependencies
import * as React from "react";
import {View, Text} from "react-native";

// internal dependencies
import {TabNavProps} from "../../../components/navigation";

export const BookDetails = ({route}: TabNavProps<"BookDetails">) => {
  const {book} = route.params;

  return (
    <View>
      <Text>{book.title}</Text>
    </View>
  );
};
