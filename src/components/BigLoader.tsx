import { useThemeColors } from "@/hooks/useThemeColors";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const BigLoader = () => {
  const colors = useThemeColors();

  return (
    <View className="flex-1 h-[100%] justify-center content-center bg-secondary/40">
      <ActivityIndicator size="large" color={colors.foreground} />
    </View>
  );
};

export default BigLoader;

const styles = StyleSheet.create({});
