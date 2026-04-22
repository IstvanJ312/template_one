// hooks/useThemeColors.ts
import { useUnstableNativeVariable } from "nativewind";

function useHsl(variable: string): string {
  const value = useUnstableNativeVariable(variable);
  return value ? `hsl(${value})` : "transparent";
}

export function useThemeColors() {
  return {
    background: useHsl("--background"),
    foreground: useHsl("--foreground"),
    card: useHsl("--card"),
    cardForeground: useHsl("--card-foreground"),
    primary: useHsl("--primary"),
    primaryForeground: useHsl("--primary-foreground"),
    secondary: useHsl("--secondary"),
    secondaryForeground: useHsl("--secondary-foreground"),
    muted: useHsl("--muted"),
    mutedForeground: useHsl("--muted-foreground"),
    accent: useHsl("--accent"),
    destructive: useHsl("--destructive"),
    destructiveForeground: useHsl("--destructive-foreground"),
    border: useHsl("--border"),
    input: useHsl("--input"),
    ring: useHsl("--ring"),
    success: useHsl("--success"),
    priorityLow: useHsl("--priority-low"),
    priorityLowForeground: useHsl("--priority-low-foreground"),
    priorityMedium: useHsl("--priority-medium"),
    priorityMediumForeground: useHsl("--priority-medium-foreground"),
    priorityHigh: useHsl("--priority-high"),
    priorityHighForeground: useHsl("--priority-high-foreground"),
  };
}
