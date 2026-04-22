import { useThemeColors } from "@/hooks/useThemeColors";
import React from "react";
import { ActivityIndicator } from "react-native";

const SmallLoader = () => {
  const colors = useThemeColors();

  return <ActivityIndicator size={"small"} color={colors.foreground} />;
};

export default SmallLoader;
